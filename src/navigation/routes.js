import { StackNavigator } from 'react-navigation';

// import Footer from 'components/Footer';

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
  // swipeEnabled: false,
  // animationEnabled: false,
  // lazy: false,
  // tabBarPosition: 'bottom',
  // tabBarComponent: Footer,
  headerMode: 'none',
});

export default Routes;
