import firebase from 'react-native-firebase';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/verify';
import { NavigationActions } from 'react-navigation';

export function* confirmationCode(action) {
  let user = null;

  try {
    const auth = firebase.auth();
    const signIn = yield call(
      [auth, auth.signInWithPhoneNumber],
      action.phone,
    );

    try {
      user = yield call(
        [signIn, signIn.confirm],
        action.code,
      );

      yield put(ActionCreators.verifySuccess(user));
      yield put(NavigationActions.navigate({ routeName: 'Scheduler' }));
    } catch (error) {
      console.tron.log(error.message);
      yield put(ActionCreators.verifyError());
    }
  } catch (error) {
    console.tron.log(error.message);
    yield put(ActionCreators.verifyError());
  }
}

