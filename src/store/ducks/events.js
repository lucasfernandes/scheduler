import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventRequest: ['values'],
  eventSuccess: ['lastDateAdded'],
  // eventSuccess: null,
  eventError: null,

  eventGetRequest: null,
  eventGetSuccess: ['data'],
  eventGetError: null,

  eventGetByDateRequest: ['date'],
  eventGetByDateSuccess: ['dataByDay'],
  eventGetByDateError: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  loading: false,
  error: false,
  values: [],
  data: [],
  dataByDay: [],
  lastDateAdded: null,
};

/* Reducers */


// Add new event
export const request = state => ({
  ...state,
  lastDateAdded: null,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  values: [],
  loading: false,
  lastDateAdded: action.lastDateAdded,
});

export const error = state => ({
  ...state,
});


// Request all events
export const getRequest = state => ({
  ...state,
  loading: true,
});

export const getSuccess = (state, action) => ({
  ...state,
  loading: false,
  data: action.data,
});

export const getError = state => ({
  ...state,
});

// Request events by date
export const getByDateRequest = state => ({
  ...state,
  loading: true,
});

export const getByDateSuccess = (state, action) => ({
  ...state,
  loading: false,
  dataByDay: action.dataByDay,
});

export const getByDateError = state => ({
  ...state,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENT_REQUEST]: request,
  [Types.EVENT_SUCCESS]: success,
  [Types.EVENT_ERROR]: error,

  [Types.EVENT_GET_REQUEST]: getRequest,
  [Types.EVENT_GET_SUCCESS]: getSuccess,
  [Types.EVENT_GET_ERROR]: getError,

  [Types.EVENT_GET_BY_DATE_REQUEST]: getByDateRequest,
  [Types.EVENT_GET_BY_DATE_SUCCESS]: getByDateSuccess,
  [Types.EVENT_GET_BY_DATE_ERROR]: getByDateError,
});
