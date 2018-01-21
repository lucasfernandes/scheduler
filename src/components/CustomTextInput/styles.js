import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: fonts.big,
    color: colors.whiteOpacity,
    height: 54,
    borderRadius: metrics.baseRadius,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purplePlaceholder,
    height: 54,
    borderRadius: metrics.baseRadius,
  },

  icon: {
    margin: metrics.baseSpace,
    color: colors.whiteOpacity,
  },
});

export default styles;
