import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventsByDateRequest: ['date'],
  eventsByDateSuccess: ['data'],
  eventsByDateError: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: {},
};

/* Reducers */


// Request events by date
export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  loading: false,
  data: action.data,
});

export const error = () => ({
  loading: false,
  error: true,
  data: {},
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_BY_DATE_REQUEST]: request,
  [Types.EVENTS_BY_DATE_SUCCESS]: success,
  [Types.EVENTS_BY_DATE_ERROR]: error,
});
