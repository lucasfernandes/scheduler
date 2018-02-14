import { Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  navBarHeight: 62,
  inputHeight: 54,
  titleBarHeight: 82,
  buttonHeight: 54,
  eventHeight: 78,
  eventButtonHeight: 78,
  tinyMargin: 10,
  smallSpace: 15,
  baseSpace: 20,
  baseRadius: 5,
  screenWidth: width,
};
