import { StyleSheet } from 'react-native';
import { general, metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  // ...general,

  container: {
    flex: 1,
    backgroundColor: colors.background,
    // padding: metrics.baseSpace,
  },

  pageContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  haveAccountButton: {
    // fontSize: fonts.big,
    // color: colors.pink,
    // padding: metrics.baseSpace + 5,
  },
});

export default styles;
