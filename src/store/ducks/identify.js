import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  identifyRequest: ['phone', 'dispatch'],
  identifySuccess: ['phone', 'verificationId'],
  identifyError: null,
  identifyPhoneNumber: ['phone'],
  identifyReset: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  phone: '',
  verificationId: null,
  loading: false,
  error: true,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  phone: action.phone,
  verificationId: action.verificationId,
  loading: false,
  error: false,
});

export const error = state => ({
  ...state,
  loading: false,
  error: true,
});

export const phoneNumber = (state, action) => ({
  ...state,
  phone: action.phone,
});

export const reset = () => ({
  INITIAL_STATE,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.IDENTIFY_REQUEST]: request,
  [Types.IDENTIFY_SUCCESS]: success,
  [Types.IDENTIFY_ERROR]: error,
  [Types.IDENTIFY_PHONE_NUMBER]: phoneNumber,
  [Types.IDENTIFY_RESET]: reset,
});
