
import { NavigationActions } from 'react-navigation';
import Routes from './routes';

const initialState = Routes.router.getStateForAction(NavigationActions.init());

const navReduce = (state = initialState, action) => {
  const nextState = Routes.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReduce;
