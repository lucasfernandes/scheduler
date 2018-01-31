import firebase from 'react-native-firebase';

import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import ActionCreators from 'store/ducks/identify';
import { NavigationActions } from 'react-navigation';

export function* identifyByPhone(action) {
  const auth = firebase.auth();

  try {
    // const confirmation = yield call(
    //   [auth, auth.signInWithPhoneNumber],
    //   action.phone,
    // );

    yield call(
      [auth, auth.signInWithPhoneNumber],
      action.phone,
    );

    yield call(delay, 1000);
    yield put(ActionCreators.identifySuccess(action.phone));
    yield put(NavigationActions.navigate({ routeName: 'Verify' }));
  } catch (error) {
    console.tron.log(error.message);
    yield put(ActionCreators.identifyError());
  }
}

