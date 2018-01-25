import { all, takeLatest } from 'redux-saga/effects';

/* types */
import { Types as IdentifyTypes } from 'store/ducks/identify';

/* Sagas */
import { identifyByPhone } from './identify';

export default function* root() {
  yield all([
    takeLatest(IdentifyTypes.IDENTIFY_REQUEST, identifyByPhone),
  ]);
}
