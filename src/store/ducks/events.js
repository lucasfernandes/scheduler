import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventRequest: ['values'],
  eventSuccess: ['data'],
  eventError: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
};

/* Reducers */


// Add new event
export const request = state => ({
  ...state,
  data: {},
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
});

export const error = state => ({
  ...state,
});


/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENT_REQUEST]: request,
  [Types.EVENT_SUCCESS]: success,
  [Types.EVENT_ERROR]: error,
});
