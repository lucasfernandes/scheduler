import { all, takeLatest } from 'redux-saga/effects';

/* types */
import { Types as IdentifyTypes } from 'store/ducks/identify';
import { Types as VerifyTypes } from 'store/ducks/verify';

/* Sagas */
import { identifyByPhone } from './identify';
import { confirmationCode } from './verify';

export default function* root() {
  yield all([
    takeLatest(IdentifyTypes.IDENTIFY_REQUEST, identifyByPhone),
    takeLatest(VerifyTypes.VERIFY_REQUEST, confirmationCode),
  ]);
}
