import { all, takeLatest } from 'redux-saga/effects';

/* types */
import { Types as IdentifyTypes } from 'store/ducks/identify';
import { Types as VerifyTypes } from 'store/ducks/verify';
import { Types as EventsListTypes } from 'store/ducks/eventsList';
import { Types as EventsNewTypes } from 'store/ducks/eventsNew';
import { Types as EventsRemoveTypes } from 'store/ducks/eventsRemove';

/* Sagas */
import { identifyByPhone } from './identify';
import { confirmationCode } from './verify';
import { saveEvent, loadEvents, removeEvent } from './events';

export default function* root() {
  yield all([
    takeLatest(IdentifyTypes.IDENTIFY_REQUEST, identifyByPhone),
    takeLatest(VerifyTypes.VERIFY_REQUEST, confirmationCode),
    takeLatest(EventsListTypes.EVENTS_LIST_REQUEST, loadEvents),
    takeLatest(EventsNewTypes.EVENTS_NEW_REQUEST, saveEvent),
    takeLatest(EventsRemoveTypes.EVENTS_REMOVE_REQUEST, removeEvent),
  ]);
}
