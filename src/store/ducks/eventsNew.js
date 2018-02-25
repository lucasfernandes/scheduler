import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  eventsNewRequest: ['values'],
  eventsNewSuccess: ['lastDateAdded'],
  eventsNewError: null,
});

export { Types };
export default Creators;


/* Initial State */

export const INITIAL_STATE = {
  loading: false,
  error: false,
  lastDateAdded: null,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  loading: false,
  lastDateAdded: action.lastDateAdded,
});

export const error = () => ({
  loading: false,
  lastDateAdded: null,
  error: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_NEW_REQUEST]: request,
  [Types.EVENTS_NEW_SUCCESS]: success,
  [Types.EVENTS_NEW_ERROR]: error,
});
