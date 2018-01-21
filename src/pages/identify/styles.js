import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    marginVertical: (metrics.tinyMargin / 2) + 2.5,
  },
});

export default styles;
