import firebase from 'react-native-firebase';
import { call, put, select } from 'redux-saga/effects';

import EventsListActionCreators from 'store/ducks/eventsList';
import EventsNewActionCreators from 'store/ducks/eventsNew';
import EventsRemoveActionCreators from 'store/ducks/eventsRemove';
import ToastActionCreators from 'store/ducks/toast';
import ModalActionCreators from 'store/ducks/modal';
import moment from 'moment';
import I18n from 'i18n';
import { colors } from 'styles';

/* Selectors */
const eventsListData = state => state.eventsList.data;

/* Firebase */
const auth = firebase.auth();
const rootRef = firebase.database().ref();
let isLogged = false;

auth.onAuthStateChanged((user) => {
  isLogged = user;
});

function mountLoggedRef() {
  const { phoneNumber } = isLogged;
  let eventsRef = null;

  if (phoneNumber) {
    eventsRef = rootRef.child(phoneNumber).child('events');
  }

  return eventsRef;
}

export function* saveEvent(action) {
  const eventsRef = mountLoggedRef();

  try {
    if (eventsRef) {
      const { values } = action;
      const newKey = eventsRef.push().key;

      values.shortDate = moment(values.date, 'DD/MM/YYYY hh:mm').format('YYYYMMDD');
      values.shortTime = moment(values.date, 'DD/MM/YYYY hh:mm').format('H:mm');

      const data = { [newKey]: action.values };

      yield call([eventsRef, eventsRef.update], data);

      const events = yield select(eventsListData);
      const day = values.shortDate;
      yield put(EventsListActionCreators.eventsListRequest(events, day));

      yield put(ModalActionCreators.modalHide());
      yield put(EventsNewActionCreators.eventsNewSuccess(data));
      yield put(ToastActionCreators.toastShow(I18n.t('message.added'), 'check-circle', 'success', null, false, true));
    } else {
      yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
    }
  } catch (error) {
    yield put(EventsNewActionCreators.eventsNewError(error.message));
    yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
  }
}

function loadMarkedDates(action) {
  const dates = {};
  const { events, day } = action;

  Object.values(events).map((value) => {
    const date = moment(value.shortDate).format('YYYY-MM-DD');
    const formatedDay = moment(day).format('YYYY-MM-DD');

    dates[date] = {
      selectedColor: colors.add,
      dotColor: colors.green,
      marked: true,
      selected: formatedDay === date,
    };

    return dates;
  });

  return dates;
}


export function* loadEvents(action) {
  const markedDates = yield call(loadMarkedDates, action);

  yield put(EventsListActionCreators.eventsListSuccess(action.events, markedDates, action.day));
}

export function* removeEvent(action) {
  const eventsRef = mountLoggedRef();
  const events = yield select(eventsListData);
  const { day } = action;

  try {
    if (eventsRef) {
      const { key } = action;
      const eventToRemove = eventsRef.child(key);

      yield call([eventToRemove, eventToRemove.remove]);
      yield put(EventsRemoveActionCreators.eventsRemoveSuccess());

      delete events[key];

      yield put(ToastActionCreators.toastShow(I18n.t('message.removed'), 'check-circle', 'success', null, false, true));
      yield put(EventsListActionCreators.eventsListRequest(events, day));
    } else {
      yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
    }
  } catch (error) {
    yield put(EventsRemoveActionCreators.eventsRemoveError());
    yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
  }
}