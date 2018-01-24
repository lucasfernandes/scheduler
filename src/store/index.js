import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

/* Reducers */
import navReducer from 'navigation/reducer';
import { reducer as identify } from './ducks/identify';

import configureStore from './configureStore';
// import rootSaga from './sagas';
import configurePersistor from './configurePersistor';

const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
}, {
  nav: navReducer,
  identify,
});
// const store = configureStore(rootReducer, rootSaga);
const store = configureStore(rootReducer, []);
const persistor = configurePersistor(store);

export { store, persistor };
