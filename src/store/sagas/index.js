import { all, takeLatest } from 'redux-saga/effects';

/* types */
import { Types as IdentifyTypes } from 'store/ducks/identify';
import { Types as VerifyTypes } from 'store/ducks/verify';
import { Types as EventsNewTypes } from 'store/ducks/eventsNew';
import { Types as EventsRemoveTypes } from 'store/ducks/eventsRemove';
import { Types as EventsAllTypes } from 'store/ducks/eventsAll';
import { Types as EventsByDateTypes } from 'store/ducks/eventsByDate';

/* Sagas */
import { identifyByPhone } from './identify';
import { confirmationCode } from './verify';
import { saveEvent, getAllEvents, getEventsByDate, removeEvent } from './events';

export default function* root() {
  yield all([
    takeLatest(IdentifyTypes.IDENTIFY_REQUEST, identifyByPhone),
    takeLatest(VerifyTypes.VERIFY_REQUEST, confirmationCode),
    takeLatest(EventsNewTypes.EVENTS_NEW_REQUEST, saveEvent),
    takeLatest(EventsRemoveTypes.EVENTS_REMOVE_REQUEST, removeEvent),
    takeLatest(EventsAllTypes.EVENTS_ALL_REQUEST, getAllEvents),
    takeLatest(EventsByDateTypes.EVENTS_BY_DATE_REQUEST, getEventsByDate),
  ]);
}
