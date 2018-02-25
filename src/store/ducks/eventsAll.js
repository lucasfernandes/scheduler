import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventsAllRequest: null,
  eventsAllSuccess: ['data'],
  eventsAllError: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
  // data: {},
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  loading: false,
  data: action.data,
});

export const error = state => ({
  ...state,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_ALL_REQUEST]: request,
  [Types.EVENTS_ALL_SUCCESS]: success,
  [Types.EVENTS_ALL_ERROR]: error,
});
