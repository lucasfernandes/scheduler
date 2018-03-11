import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventsRemoveRequest: ['key'],
  eventsRemoveSuccess: null,
  eventsRemoveError: null,
});

export { Types };
export default Creators;


/* Initial State */

export const INITIAL_STATE = {
  loading: false,
  error: false,
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

export const error = () => ({
  loading: false,
  error: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_REMOVE_REQUEST]: request,
  [Types.EVENTS_REMOVE_SUCCESS]: success,
  [Types.EVENTS_REMOVE_ERROR]: error,
});
