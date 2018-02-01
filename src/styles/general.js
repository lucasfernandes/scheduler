import colors from './colors';
import metrics from './metrics';

const general = {
  masterContainer: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.baseSpace,
  },

  dividerForm: {
    marginVertical: (metrics.tinyMargin / 2),
  },

  dividerButton: {
    marginVertical: (metrics.tinyMargin / 2) + 2.5,
  },
};

export default general;
