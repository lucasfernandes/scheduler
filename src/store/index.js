import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

/* Reducers */
import navReducer from 'navigation/reducer';
import { reducer as toast } from './ducks/toast';
import { reducer as identify } from './ducks/identify';
import { reducer as verify } from './ducks/verify';
import { reducer as modal } from './ducks/modal';
import { reducer as events } from './ducks/events';
import { reducer as eventsNew } from './ducks/eventsNew';
import { reducer as eventsRemove } from './ducks/eventsRemove';
import { reducer as eventsAll } from './ducks/eventsAll';
import { reducer as eventsByDate } from './ducks/eventsByDate';

import configureStore from './configureStore';
import rootSaga from './sagas';
import configurePersistor from './configurePersistor';

const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
  blacklist: ['events', 'eventsNew', 'eventsAll', 'eventsByDate'],
}, {
  nav: navReducer,
  toast,
  identify,
  verify,
  modal,
  events,
  eventsNew,
  eventsAll,
  eventsByDate,
  eventsRemove,
});

const store = configureStore(rootReducer, rootSaga);
const persistor = configurePersistor(store);

export { store, persistor };
