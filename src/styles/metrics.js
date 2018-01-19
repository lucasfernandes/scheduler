import { Platform } from 'react-native';

export default {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  navBarHeight: 62,
  inputHeight: 54,
  titleBarHeight: 82,
  buttonHeight: 54,
  eventHeight: 78,
  eventButtonHeight: 78,
  tinyMargin: 10,
  smallMargin: 15,
  baseMargin: 20,
};
