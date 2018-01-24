import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  identifyRequest: ['phone'],
  identifySuccess: ['user'],
  identifyError: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  user: null,
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  // user: action.data,
  user: {},
  loading: false,
  error: false,
});

export const error = () => ({
  user: null,
  loading: false,
  error: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.IDENTIFY_REQUEST]: request,
  [Types.IDENTIFY_SUCCESS]: success,
  [Types.IDENTIFY_ERROR]: error,
});
