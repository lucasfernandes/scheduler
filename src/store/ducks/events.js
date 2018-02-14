import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventRequest: ['values'],
  eventSuccess: null,
  eventError: null,

  eventGetRequest: null,
  eventGetSuccess: ['data'],
  eventGetError: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  loading: false,
  error: false,
  values: [],
  data: [],
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  loading: false,
});

export const error = state => ({
  ...state,
});

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

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENT_REQUEST]: request,
  [Types.EVENT_SUCCESS]: success,
  [Types.EVENT_ERROR]: error,

  [Types.EVENT_GET_REQUEST]: getRequest,
  [Types.EVENT_GET_SUCCESS]: getSuccess,
  [Types.EVENT_GET_ERROR]: getError,
});
