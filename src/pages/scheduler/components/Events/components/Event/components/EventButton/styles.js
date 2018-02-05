import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
  },

  'bg-color-share': {
    backgroundColor: colors.share,
  },

  'bg-color-delete': {
    backgroundColor: colors.red,
  },

  'margin-left': {
    marginLeft: metrics.smallSpace / 1.5,
  },

  'margin-right': {
    marginRight: metrics.smallSpace / 1.5,
  },
});

export default styles;
