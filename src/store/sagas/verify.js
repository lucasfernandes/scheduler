import firebase from 'react-native-firebase';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/verify';

export function* confirmationCode(action) {
  // const auth = firebase.auth();

  // console.tron.log(action.code);
  console.tron.log(action.confirmation);

  try {
    const result = yield call(action.confirmation, action.code);
    console.tron.log(result);

    const user = { foo: 'bar' };
    yield put(ActionCreators.verifySuccess(user));
  } catch (error) {
    console.tron.log(error.message);
    yield put(ActionCreators.verifyError());
  }
}

