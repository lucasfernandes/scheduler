import SagaTester from 'redux-saga-tester';
import sinon from 'sinon';

// import rootSaga from 'store/sagas';
import IdentifyActions from 'store/ducks/identify';

describe('Testing Identify SAGA', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});

    sagaTester.start([]);
  });

  it.skip('can identify a phone number', () => {
    const firebase = sinon.spy();
  });
});

