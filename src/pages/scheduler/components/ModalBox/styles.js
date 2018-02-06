import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blackOpacity,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: metrics.baseSpace,
    paddingVertical: (metrics.baseSpace * 2) + 10,
    margin: metrics.baseSpace,
    marginVertical: 180,
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
    flex: 1,
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

  close: { flex: 1 },
});

export default styles;
