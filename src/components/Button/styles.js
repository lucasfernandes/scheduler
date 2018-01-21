import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    height: 54,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button,
  },

  buttonText: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
