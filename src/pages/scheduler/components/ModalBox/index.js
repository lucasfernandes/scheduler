/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import ModalActions from 'store/ducks/modal';

/* Presentational */
import { View, Text, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';

import { colors, metrics } from 'styles';

import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';
import DateTimePicker from 'pages/scheduler/components/ModalBox/components/DateTimePicker';

import styles from './styles';

class ModalBox extends Component {
  static propTypes = {
    modalHide: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      show: PropTypes.bool,
    }).isRequired,
  };

  state = {
    loading: false,
  }

  renderContent = () => (

    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => this.props.modalHide()}
        style={styles.close}
      >
        <View style={styles.contentContainer}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Adicionar Evento</Text>
          </View>

          <View style={styles.inputsContainer}>
            <DateTimePicker />

            <CustomTextInput
              iconName="calendar"
              inputColor="dark"
              placeholder="Qual o nome do evento?"
              placeholderTextColor={colors.gray}
              spaceBetween={10}
              disableIcon
            />
            <CustomTextInput
              iconName="calendar"
              inputColor="dark"
              placeholder="Onde irá ocorrer?"
              placeholderTextColor={colors.gray}
              spaceBetween={15}
              disableIcon
            />

            <Button
              text="Criar evento"
              onPress={() => {}}
            />

            <TouchableOpacity
              style={styles.cancel}
              onPress={() => this.props.modalHide()}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </TouchableOpacity>
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
    return (
      <Modal
        style={styles.container}
        animationType="none"
        transparent
        visible={this.props.modal.show}
      >
        { this.renderContent()}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  modalHide: () => dispatch(ModalActions.modalHide()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);

