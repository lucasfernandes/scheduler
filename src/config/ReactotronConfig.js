import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: '10.10.10.173' })
    // .configure({ host: '10.0.0.27' })
    .use(reduxPlugin())
    .use(sagaPlugin())
    .useReactNative()
    .connect();

  tron.clear();
  console.tron = tron;
  console.display = tron;
}
