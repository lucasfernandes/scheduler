import firebase from 'react-native-firebase';
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import ActionCreators from 'store/ducks/events';
import EventsNewActionCreators from 'store/ducks/eventsNew';
import EventsRemoveActionCreators from 'store/ducks/eventsRemove';
import EventsAllActionCreators from 'store/ducks/eventsAll';
import EventsByDateActionCreators from 'store/ducks/eventsByDate';
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
      yield delay(500);

      yield put(EventsNewActionCreators.eventsNewSuccess(data));
      yield put(EventsAllActionCreators.eventsAllRequest());
      yield put(EventsByDateActionCreators.eventsByDateRequest(values.shortDate));


      yield put(ToastActionCreators.toastShow(I18n.t('message.added'), 'check-circle', 'success', null, false, true));
    } else {
      yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
    }
  } catch (error) {
    yield put(EventsNewActionCreators.eventsNewError(error.message));
    yield put(ToastActionCreators.toastShow(I18n.t('message.error'), 'times-circle', 'error'));
  }
}

export function* getAllEvents() {
  const eventsRef = mountLoggedRef();

  try {
    if (eventsRef) {
      const queryAllRef = eventsRef.orderByChild('shortDate/shortTime');
      const result = yield call([queryAllRef, queryAllRef.once], 'value');
      const data = result.val() ? result.val() : [];

      yield put(EventsAllActionCreators.eventsAllSuccess(data));
    } else {
      // call toaster fucker
    }
  } catch (error) {
    yield put(ActionCreators.eventsAllError(error.message));
    // console.tron.log(error.message);
  }
}

export function* getEventsByDate(action) {

  console.tron.log('ENTROU AQUI NO GETEVENTSBYDATE');
  const eventsRef = mountLoggedRef();

  try {
    if (eventsRef) {
      const queryByDateRef = eventsRef
        .orderByChild('shortDate')
        .equalTo(action.date);

      const result = yield call([queryByDateRef, queryByDateRef.once], 'value');
      // console.tron.log(result);
      const data = result.val() ? result.val() : [];

      // console.tron.log(data);

      yield put(EventsByDateActionCreators.eventsByDateSuccess(data));
    } else {
      // console.tron.log('NAO ESTÁ LOGADO');
    }
  } catch (error) {
    // console.tron.log(error.message);
    yield put(EventsByDateActionCreators.eventsByDateError(error.message));
    // console.tron.log(error.message);
  }
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
      
      yield put(EventsAllActionCreators.eventsAllRequest());
      yield put(EventsByDateActionCreators.eventsByDateRequest('20180307'));
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