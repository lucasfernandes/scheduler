import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blackOpacity,
    zIndex: 10,
  },

  close: { flex: 1 },
});

export default styles;
