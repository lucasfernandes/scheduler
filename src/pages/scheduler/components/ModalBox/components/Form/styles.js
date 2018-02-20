import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    // backgroundColor: 'red',
    padding: metrics.baseSpace,
    // height: 850,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    // flex: 1,
    paddingHorizontal: metrics.baseSpace,
    paddingVertical: (metrics.baseSpace * 2) + 10,
    // margin: metrics.baseSpace,
    // marginVertical: 180,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.baseSpace * 1.7,
  },

  title: {
    fontFamily: 'Helvetica',
    fontSize: fonts.huge,
    fontWeight: 'bold',
    color: colors.background,
  },

  inputsContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  section: {
    backgroundColor: colors.grayPlaceholder,
  },

  cancel: {
    marginTop: metrics.baseSpace,
  },

  cancelText: {
    fontFamily: 'Helvetica',
    fontSize: fonts.regular,
    color: colors.darkGray,
  },

  toast: {
    width: metrics.screenWidth,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default styles;
