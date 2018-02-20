import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({

  container: { alignSelf: 'stretch' },

  pickerContainer: {
    width: '100%',
    height: 54,
    marginBottom: 3,
    borderRadius: metrics.baseRadius,
  },

  icon: {
    position: 'absolute',
    left: metrics.baseSpace,
    top: 9,
    color: colors.gray,
  },
});

export default styles;
