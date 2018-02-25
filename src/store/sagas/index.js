import { all, takeLatest } from 'redux-saga/effects';

/* types */
import { Types as IdentifyTypes } from 'store/ducks/identify';
import { Types as VerifyTypes } from 'store/ducks/verify';
import { Types as EventsTypes } from 'store/ducks/events';
import { Types as EventsNewTypes } from 'store/ducks/eventsNew';
import { Types as EventsAllTypes } from 'store/ducks/eventsAll';

/* Sagas */
import { identifyByPhone } from './identify';
import { confirmationCode } from './verify';
import { saveEvent, getAllEvents, getEventsByDate } from './events';

export default function* root() {
  yield all([
    takeLatest(IdentifyTypes.IDENTIFY_REQUEST, identifyByPhone),
    takeLatest(VerifyTypes.VERIFY_REQUEST, confirmationCode),
    takeLatest(EventsNewTypes.EVENTS_NEW_REQUEST, saveEvent),
    takeLatest(EventsAllTypes.EVENTS_ALL_REQUEST, getAllEvents),
    // takeLatest(EventsTypes.EVENTS_GET_REQUEST, getAllEvents),
    takeLatest(EventsTypes.EVENT_GET_BY_DATE_REQUEST, getEventsByDate),
  ]);
}
