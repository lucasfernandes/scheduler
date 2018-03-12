import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  eventsListRequest: ['events', 'date'],
  eventsListSuccess: ['data', 'date'],
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  loading: false,
  data: {},
  date: null,
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
  date: action.date,
});


export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENTS_LIST_REQUEST]: request,
  [Types.EVENTS_LIST_SUCCESS]: success,
});
