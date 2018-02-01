/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Redux */
import { connect } from 'react-redux';


/* Presentational */
import { SafeAreaView, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import Toast from 'components/Toast';

import Routes from './routes';
import styles from './styles';

const Navigator = ({ dispatch, nav }) => (
  <SafeAreaView
    style={styles.safeArea}
  >
    <Routes
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
    />
    <Toast color="success" icon="check-circle" style={styles.toast}>
      Aqui é um toast galera!
    </Toast>
  </SafeAreaView>
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigator);



// <View style={styles.masterContainer}>
//     <Toast color="success" icon="check-circle">
//       Aqui é um toast galera!
//     </Toast>

//     <SafeAreaView
//       style={styles.safeArea}
//     >
//       <Routes
//         navigation={addNavigationHelpers({
//           dispatch,
//           state: nav,
//         })}
//       />
//     </SafeAreaView>
//   </View>
