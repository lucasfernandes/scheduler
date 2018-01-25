import { StackNavigator } from 'react-navigation';

import Identify from 'pages/identify';
import Register from 'pages/register';
import Login from 'pages/login';

const IdentifyRoutes = StackNavigator({
  // Register: { screen: Register },
  Login: { screen: Login },
  // Identify: { screen: Identify },
}, {
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'none',
  // initialRouteName: 'Register',
});

const Routes = StackNavigator({
  Identify: { screen: IdentifyRoutes },
}, {
  headerMode: 'none',
  cardStyle: { shadowColor: 'transparent' },
  // initialRouteName: 'Identify',
});

export default Routes;
