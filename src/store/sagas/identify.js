import firebase from 'react-native-firebase';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/identify';

export function* identifyByPhone(action) {
  const auth = firebase.auth();

  try {
    const confirmation = yield call(
      [auth, auth.signInWithPhoneNumber],
      action.phone,
    );

    const user = { foo: 'bar' };

    yield put(ActionCreators.identifySuccess(confirmation));
  } catch (error) {
    yield put(ActionCreators.identifyError());
  }
}

