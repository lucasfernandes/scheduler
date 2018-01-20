/* Core */
import 'config/ReactotronConfig';
import 'config/StatusBarConfig';
import React from 'react';

/* Redux */
import Navigator from 'navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
