import { StackNavigator } from 'react-navigation';

import Identify from 'pages/identify';
import Verify from 'pages/verify';
import Login from 'pages/login';

const IdentifyRoutes = StackNavigator({
  Identify: { screen: Identify },
  Verify: { screen: Verify },
  Login: { screen: Login },
}, {
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'none',
});

const Routes = StackNavigator({
  Identify: { screen: IdentifyRoutes },
}, {
  headerMode: 'none',
  cardStyle: { shadowColor: 'transparent' },
});

export default Routes;
