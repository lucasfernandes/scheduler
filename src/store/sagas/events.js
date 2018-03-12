import firebase from 'react-native-firebase';
import { call, put } from 'redux-saga/effects';

import EventsListActionCreators from 'store/ducks/eventsList';
import EventsNewActionCreators from 'store/ducks/eventsNew';
import EventsRemoveActionCreators from 'store/ducks/eventsRemove';
import ToastActionCreators from 'store/ducks/toast';
import ModalActionCreators from 'store/ducks/modal';
import moment from 'moment';
import I18n from 'i18n';

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

      yield put(ModalActionCreators.modalHide());
      // yield delay(500);
      yield put(EventsNewActionCreators.eventsNewSuccess(data));
      // yield put(EventsAllActionCreators.eventsAllRequest());
      // yield put(EventsByDateActionCreators.eventsByDateRequest(values.shortDate));


      yield put(ToastActionCreators.toastShow(I18n.t('message.added'), 'check-circle', 'success', null, false, true));
    } else {
      yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
    }
  } catch (error) {
    yield put(EventsNewActionCreators.eventsNewError(error.message));
    yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
  }
}


export function* loadEvents(action) {
  const data = action.events;
  const { date } = action;

  yield put(EventsListActionCreators.eventsListSuccess(data, date));
}

export function* removeEvent(action) {
  const eventsRef = mountLoggedRef();

  try {
    if (eventsRef) {
      const { key } = action;
      const eventToRemove = eventsRef.child(key);

      yield call([eventToRemove, eventToRemove.remove]);

      // yield put(ModalActionCreators.modalHide());
      // yield delay(500);
      
      // yield put(EventsAllActionCreators.eventsAllRequest());
      // yield put(EventsByDateActionCreators.eventsByDateRequest('20180307'));
      yield put(EventsRemoveActionCreators.eventsRemoveSuccess());
      
      // yield delay(1000);
      // console.tron.log(Object.values(data).length);
      // yield put(EventsByDateActionCreators.eventsByDateRequest(values.shortDate));

      yield put(ToastActionCreators.toastShow(I18n.t('message.removed'), 'check-circle', 'success', null, false, true));
      // toastShow: ['message', 'icon', 'color', 'style', 'modal', 'show'],
    } else {
      // call toaster fucker
    }
  } catch (error) {
    yield put(EventsRemoveActionCreators.eventsRemoveError());
    yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
  }
}