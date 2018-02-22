import firebase from 'react-native-firebase';
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import ActionCreators from 'store/ducks/events';
import ToastActionCreators from 'store/ducks/toast';
import ModalActionCreators from 'store/ducks/modal';
import moment from 'moment';

const { database } = firebase;
let isLogged = false;

const auth = firebase.auth();
const ref = database().ref('events');

auth.onAuthStateChanged((user) => {
  isLogged = user;
});

export function* saveEvent(action) {
  try {
    if (isLogged) {
      const { values } = action;

      values.shortDate = moment(values.date, 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD');
      values.shortTime = moment(values.date, 'DD/MM/YYYY hh:mm').format('H:mm');

      const newKey = database().ref().child('events').push().key;
      const event = { [newKey]: action.values };

      yield call([ref, ref.update], event);
      
      yield put(ModalActionCreators.modalHide());
      yield put(ActionCreators.eventGetReload());
      yield delay(500);
      
      yield put(ActionCreators.eventGetByDateRequest(values.shortDate));
      yield put(ActionCreators.eventSuccess());
      // yield put(ToastActionCreators.toastShow(['22222'], 'times-circle', 'error'));
    } else {
      // call toaster fucker
    }
  } catch (error) {
    yield put(ActionCreators.eventGetError(error.message));
    yield put(ToastActionCreators.toastShow([error.message], 'times-circle', 'error'));
  }
}

export function* getAllEvents() {
  try {
    if (isLogged) {
      const result = yield call([ref, ref.once], 'value');
      const data = result.val() ? result.val() : [];

      yield put(ActionCreators.eventGetSuccess(data));
    } else {
      // call toaster fucker
    }
  } catch (error) {
    yield put(ActionCreators.eventGetError(error.message));
    // console.tron.log(error.message);
  }
}

export function* getEventsByDate(action) {
  const queryRef = database().ref('events').orderByChild('shortDate').equalTo(action.date);

  try {
    if (isLogged) {
      const result = yield call([queryRef, queryRef.once], 'value');
      const dataByDay = result.val() ? result.val() : [];

      yield put(ActionCreators.eventGetByDateSuccess(dataByDay));
    } else {
      // call toaster fucker
    }
  } catch (error) {
    yield put(ActionCreators.eventGetByDateError(error.message));
    // console.tron.log(error.message);
  }
}

