import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  modalShow: null,
  modalHide: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  show: false,
};

/* Reducers */

export const show = () => ({
  show: true,
});

export const hide = () => ({
  show: false,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MODAL_SHOW]: show,
  [Types.MODAL_HIDE]: hide,
});
