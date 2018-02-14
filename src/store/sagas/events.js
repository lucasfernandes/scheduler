import firebase from 'react-native-firebase';
import { call, put } from 'redux-saga/effects';

import ActionCreators from 'store/ducks/events';
import ToastActionCreators from 'store/ducks/toast';

const { database } = firebase;
let isLogged = false;

const auth = firebase.auth();
const ref = database().ref('events');

export function* saveEvent(action) {
  // const auth = firebase.auth();

  try {
    yield put(ActionCreators.eventSuccess());
  } catch (error) {
    // yield put(ActionCreators.identifyError());
    yield put(ToastActionCreators.toastShow([error.message], 'times-circle', 'error'));
  }
}

export function* getAllEvents() {
  auth.onAuthStateChanged((user) => {
    isLogged = user;
  });

  try {
    if (isLogged) {
      const result = yield call([ref, ref.once], 'value');

      yield put(ActionCreators.eventGetSuccess(result.val()));
    } else {
      // call toaster fucker
    }
  } catch (error) {
    yield put(ActionCreators.eventGetError(error.message));
    // console.tron.log(error.message);
  }
}

