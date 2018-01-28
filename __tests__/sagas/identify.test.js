import SagaTester from 'redux-saga-tester';
import sinon from 'sinon';
import firebase from 'react-native-firebase';

// import rootSaga from 'store/sagas';
import IdentifyActions from 'store/ducks/identify';

describe('Testing Identify SAGA', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});

    sagaTester.start([]);
  });

  it('can identify a phone number', () => {
    sinon.spy(firebase.auth(), 'verifyPhoneNumber');
  });
});

