import { Platform } from 'react-native';

export default {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
};
