import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.smallSpace / 2,
    flex: 1,
  },

  empty: {
    fontSize: fonts.big,
    color: colors.pink,
    padding: metrics.baseSpace + 5,
    alignSelf: 'center',
  },

  loading: {
    padding: metrics.smallSpace,
    alignSelf: 'center',
  },
});

export default styles;
