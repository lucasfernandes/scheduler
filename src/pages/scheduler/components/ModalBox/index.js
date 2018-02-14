/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import { colors } from 'styles';

import Toast from 'components/Toast';
import Form from './components/Form';


import styles from './styles';

class ModalBox extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      show: PropTypes.bool,
    }).isRequired,
  };

  state = {
    // loading: false,
  }

  renderContent = () => (
    <View style={styles.container}>
      <Form />
    </View>
  );

  renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator color={colors.black} size="large" />
      <Text style={styles.text}>
        Aguarde...
      </Text>
    </View>
  );

  render() {
    const { toast } = this.props;

    return (
      <Modal
        style={styles.container}
        animationType="none"
        transparent
        visible={this.props.modal.show}
      >
        {/* { toast.show && toast.modal &&
        <Toast color={toast.color} icon={toast.icon} style={styles.toast}>
          {toast.message}
        </Toast> } */}
        { this.renderContent()}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  toast: state.toast,
});

export default connect(mapStateToProps)(ModalBox);

