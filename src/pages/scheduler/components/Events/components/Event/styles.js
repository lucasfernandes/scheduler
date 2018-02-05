import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  swipeout: {
    backgroundColor: colors.transparent,
    marginTop: metrics.smallSpace / 1.5,
    // marginHorizontal: metrics.baseSpace,
  },

  eventContainer: {
    height: metrics.eventHeight,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.smallSpace / 1.5,
    padding: metrics.baseSpace,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  eventText: {
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: fonts.regular,
    fontWeight: 'bold',
    lineHeight: 25,
  },

  sub: {
    fontFamily: 'Helvetica Neue',
    fontSize: fonts.regular,
    color: colors.gray,
    // lineHeight: 22,
  },

  time: {
    fontSize: fonts.regular,
    color: colors.gray,
  },
});

export default styles;
