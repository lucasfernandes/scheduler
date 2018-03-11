import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  toastShow: ['message', 'icon', 'color', 'style', 'modal', 'show'],
  toastHide: null,
});

export { Types };
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  show: false,
  message: undefined,
  icon: undefined,
  color: undefined,
  style: undefined,
  modal: undefined,
};

/* Reducers */

export const show = (state, action) => ({
  show: true,
  modal: action.modal,
  message: action.message,
  icon: action.icon,
  color: action.color,
  style: action.style,
});

export const hide = () => ({
  // ...INITIAL_STATE,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOAST_SHOW]: show,
  [Types.TOAST_HIDE]: hide,
});
