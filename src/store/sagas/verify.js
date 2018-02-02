import firebase from 'react-native-firebase';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/verify';
import { NavigationActions } from 'react-navigation';
import ToastActionCreators from 'store/ducks/toast';

export function* confirmationCode(action) {
  const { auth } = firebase;
  const { PhoneAuthProvider } = auth;
  const { signInWithCredential } = auth();

  try {
    const credential = yield call(
      [PhoneAuthProvider, PhoneAuthProvider.credential],
      action.verificationId,
      action.code,
    );

    const user = yield call(
      [auth(), signInWithCredential],
      credential,
    );

    yield put(ActionCreators.verifySuccess(user));
    yield put(NavigationActions.navigate({ routeName: 'Scheduler' }));
  } catch (error) {
    yield put(ActionCreators.verifyError());
    yield put(ToastActionCreators.toastShow(error.message, 'times-circle', 'error'));
  }
}

