import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

// console.tron.log(metrics.screenHeight);

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.screenHeight === metrics.iosXHeight
      ? metrics.statusBarHeight + 5
      : metrics.statusBarHeight,
  },

  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  message: {
    marginLeft: 12,
    fontSize: fonts.bigger,
    color: colors.white,
    fontWeight: 'bold',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  // errors: {
  //   marginLeft: metrics.baseSpace * 2,
  //   fontSize: fonts.regular,
  //   color: colors.white,
  // },

  'bg-color-success': {
    backgroundColor: colors.green,
  },

  'bg-color-error': {
    backgroundColor: colors.red,
  },

});

export default styles;
