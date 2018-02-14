import { all, takeLatest } from 'redux-saga/effects';

/* types */
import { Types as IdentifyTypes } from 'store/ducks/identify';
import { Types as VerifyTypes } from 'store/ducks/verify';
import { Types as EventsTypes } from 'store/ducks/events';

/* Sagas */
import { identifyByPhone } from './identify';
import { confirmationCode } from './verify';
import { saveEvent, getAllEvents } from './events';

export default function* root() {
  yield all([
    takeLatest(IdentifyTypes.IDENTIFY_REQUEST, identifyByPhone),
    takeLatest(VerifyTypes.VERIFY_REQUEST, confirmationCode),
    takeLatest(EventsTypes.EVENT_REQUEST, saveEvent),
    takeLatest(EventsTypes.EVENT_GET_REQUEST, getAllEvents),
  ]);
}
