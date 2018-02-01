import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: metrics.statusBarHeight + 10,
    // height: 62 + metrics.statusBarHeight,
  },

  message: {
    marginLeft: 12,
    fontSize: fonts.bigger,
    color: colors.white,
    fontWeight: 'bold',
  },

  'bg-color-success': {
    backgroundColor: colors.green,
  },

  'bg-color-error': {
    backgroundColor: colors.red,
  },

});

export default styles;
