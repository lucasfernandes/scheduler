/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { SafeAreaView } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import Toast from 'components/Toast';

import Routes from './routes';
import styles from './styles';

const Navigator = ({ dispatch, nav, toast }) => (
  <SafeAreaView
    style={styles.safeArea}
  >
    <Routes
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
    />

    {/* {console.tron.log(toast)} */}

    { toast.show && toast.modal === false &&
      <Toast color={toast.color} icon={toast.icon} style={styles.toast}>
        {toast.message}
      </Toast> }
  </SafeAreaView>
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
  toast: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
  toast: state.toast,
});

export default connect(mapStateToProps)(Navigator);

