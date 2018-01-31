import { StackNavigator } from 'react-navigation';

import Identify from 'pages/identify';
import Verify from 'pages/verify';
import Scheduler from 'pages/scheduler';

const IdentifyRoutes = StackNavigator({
  Identify: { screen: Identify },
  Verify: { screen: Verify },
}, {
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'none',
  transitionConfig: () => ({ screenInterpolator: () => null }),
});

const Routes = StackNavigator({
  Identify: { screen: IdentifyRoutes },
  Scheduler: { screen: Scheduler },
}, {
  headerMode: 'none',
  cardStyle: { shadowColor: 'transparent' },
});

export default Routes;
