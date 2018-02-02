import firebase from 'react-native-firebase';

import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import ActionCreators from 'store/ducks/identify';
import ToastActionCreators from 'store/ducks/toast';
import { NavigationActions } from 'react-navigation';

export function* identifyByPhone(action) {
  const auth = firebase.auth();

  try {
    const identification = yield call(
      [auth, auth.verifyPhoneNumber],
      action.phone,
    );

    yield call(delay, 1000);
    yield put(ActionCreators.identifySuccess(action.phone, identification.verificationId));
    yield put(NavigationActions.navigate({ routeName: 'Verify' }));
  } catch (error) {
    yield put(ActionCreators.identifyError());
    yield put(ToastActionCreators.toastShow(error.message, 'times-circle', 'error'));
  }
}

