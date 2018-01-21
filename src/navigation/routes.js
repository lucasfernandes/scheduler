import { StackNavigator } from 'react-navigation';

import Identify from 'pages/identify';
import Register from 'pages/register';
import Login from 'pages/login';

const IdentifyRoutes = StackNavigator({
  Identify: { screen: Identify },
  Register: { screen: Register },
  Login: { screen: Login },
}, {
  headerMode: 'none',
});

const Routes = StackNavigator({
  Identify: { screen: IdentifyRoutes },
}, {
  headerMode: 'none',
});

export default Routes;
