import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  eventsListRequest: ['events', 'day'],
  eventsListSuccess: ['data', 'markedDates', 'day'],
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  loading: false,
  data: {},
  markedDates: {},
  day: null,
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
  markedDates: action.markedDates,
  day: action.day,
});


/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_LIST_REQUEST]: request,
  [Types.EVENTS_LIST_SUCCESS]: success,
});

