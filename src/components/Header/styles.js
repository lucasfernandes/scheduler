import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: metrics.baseSpace,
    height: metrics.navBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    flexDirection: 'row',
  },

  title: {
    color: colors.white,
    fontSize: fonts.cyclopic,
    alignSelf: 'center',
    fontFamily: 'Baloo',
  },

  leftButton: {
    width: 22,
  },

  rightButton: {
    width: 22,
  },

  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.add,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
