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
    paddingRight: 25,
  },

  spaceLeftInside: {
    paddingLeft: metrics.baseSpace,
  },

  dark: {
    color: colors.gray,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purplePlaceholder,
    height: 54,
    borderRadius: metrics.baseRadius,
  },

  sectionDark: {
    backgroundColor: colors.grayPlaceholder,
  },

  icon: {
    margin: metrics.baseSpace,
    color: colors.whiteOpacity,
  },

  iconDark: {
    color: colors.gray,
  },

  'input-error': {
    borderColor: colors.red,
    borderWidth: 0.5,
  },
});

export default styles;
