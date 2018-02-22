import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventRequest: ['values'],
  eventSuccess: null,
  eventError: null,

  eventGetRequest: null,
  eventGetSuccess: ['data'],
  eventGetError: null,
  eventGetReload: null,

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
};

/* Reducers */


// Add new event
export const request = state => ({
  ...state,
  loading: true,
});

export const success = state => ({
  ...state,
  values: [],
  loading: false,
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

export const getReload = state => ({
  ...state,
  loading: true,
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
  [Types.EVENT_GET_RELOAD]: getReload,

  [Types.EVENT_GET_BY_DATE_REQUEST]: getByDateRequest,
  [Types.EVENT_GET_BY_DATE_SUCCESS]: getByDateSuccess,
  [Types.EVENT_GET_BY_DATE_ERROR]: getByDateError,
});
