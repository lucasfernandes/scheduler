import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexWrap: 'wrap',
    paddingTop: (metrics.navBarHeight + metrics.statusBarHeight) - 20,
    padding: metrics.baseSpace,
  },

  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    marginLeft: 12,
    fontSize: fonts.bigger,
    color: colors.white,
    fontWeight: 'bold',
  },

  errors: {
    // marginLeft: 12,
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
