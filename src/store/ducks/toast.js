import { createReducer, createActions } from 'reduxsauce';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  toastShow: ['message', 'icon', 'color', 'style'],
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
};

/* Reducers */

export const show = (state, action) => ({
  show: true,
  message: action.message,
  icon: action.icon,
  color: action.color,
  style: action.style,
});

export const hide = () => ({
  INITIAL_STATE,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOAST_SHOW]: show,
  [Types.TOAST_HIDE]: hide,
});