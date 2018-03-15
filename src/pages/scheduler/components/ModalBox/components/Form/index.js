/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { compose } from 'redux';
import ModalActions from 'store/ducks/modal';
import ToastActions from 'store/ducks/toast';
import EventsNewActions from 'store/ducks/eventsNew';

/* Presentational */
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { withFormik, FormikContext } from 'formik';
import Yup from 'yup';
import Toast from 'components/Toast';

import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';
import DateTimePicker from 'pages/scheduler/components/ModalBox/components/DateTimePicker';

import I18n from 'i18n';

import { colors } from 'styles';

import styles from './styles';

class Form extends Component {
  static propTypes = {
    modalHide: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
    eventsNewRequest: PropTypes.func.isRequired,
    toastShow: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      date: PropTypes.string,
      name: PropTypes.string,
      place: PropTypes.string,
    }).isRequired,
    values: PropTypes.shape({
      date: PropTypes.string,
      name: PropTypes.string,
      place: PropTypes.string,
    }).isRequired,
    name: PropTypes.string,
    place: PropTypes.string,
    toast: PropTypes.shape({
      show: PropTypes.bool,
      modal: PropTypes.bool,
      color: PropTypes.string,
      icon: PropTypes.string,
      message: PropTypes.string,
    }).isRequired,
    eventsNew: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    datetime: '',
  }

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.handleForm()
  );

  handleForm = () => {
    this.props.submitForm();

    setTimeout(() => {
      const { errors, values, eventsNewRequest } = this.props;

      if (Object.keys(errors).length >= 1) {
        this.handleErrors();
      } else {
        eventsNewRequest(values);
      }
    }, 200);
  }

  handleErrors = () => {
    this.props.toastShow(I18n.t('message.validation'), 'times-circle', 'error', null, true);
  };

  render() {
    const { toast } = this.props;
    const { loading } = this.props.eventsNew;

    return (
      <View style={styles.container}>
        { toast.show && toast.modal &&
        <Toast color={toast.color} icon={toast.icon} style={styles.toast}>
          {toast.message}
        </Toast> }

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{I18n.t('label.addEvent')}</Text>
          </View>

          <View style={styles.inputsContainer}>
            <DateTimePicker
              date={this.state.datetime}
              onDateChange={
                (datetime) => {
                  this.setState({ datetime });
                  this.props.setFieldValue('date', datetime);
              }}
              errors={this.props.errors.date && true}
            />

            <CustomTextInput
              iconName="calendar"
              inputColor="dark"
              errors={this.props.errors.name && true}
              placeholder={I18n.t('placeholder.eventName')}
              placeholderTextColor={colors.gray}
              spaceBetween={10}
              disableIcon
              value={this.props.values.name}
              onChangeText={text => this.props.setFieldValue('name', text)}
              type="custom"
              options={{ mask: 'SSSSSSSSSSSSSSSSSSSSSSSSS'}}
            />
            <CustomTextInput
              iconName="calendar"
              inputColor="dark"
              errors={this.props.errors.place && true}
              placeholder={I18n.t('placeholder.eventPlace')}
              placeholderTextColor={colors.gray}
              spaceBetween={15}
              disableIcon
              value={this.props.values.place}
              onChangeText={text => this.props.setFieldValue('place', text)}
              type="custom"
              options={{ mask: 'SSSSSSSSSSSSSSSSSSSSSSSSS'}}
            />

            <Button text={I18n.t('button.eventCreate')} loading={loading} onPress={this.handleClick(loading)} />

            <TouchableOpacity
              style={styles.cancel}
              onPress={() => !loading
                ? this.props.modalHide()
                : {}
              }
            >
              <Text style={styles.cancelText}>{I18n.t('button.cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  toast: state.toast,
  eventsNew: state.eventsNew,
});

const mapDispatchToProps = dispatch => ({
  modalHide: () => dispatch(ModalActions.modalHide()),
  toastShow: (message, icon, color, style, modal) =>
    dispatch(ToastActions.toastShow(message, icon, color, style, modal)),
  eventsNewRequest: values => dispatch(EventsNewActions.eventsNewRequest(values)),
});

const mapFormikToProps = {
  mapPropsToValues: () => ({
    date: '',
    name: '',
    place: '',
  }),

  validationSchema: Yup.object().shape({
    date: Yup.string()
      .required('Selecione data e horário'),
    name: Yup.string()
      .required('Qual é o nome do evento?')
      .min(4, 'Min 4 characthers'),
    place: Yup.string()
      .required('Onde irá ocorrer?')
      .min(4, 'Min 4 characthers'),

  }),

  // for handle errors only
  handleSubmit: () => {},
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFormik(mapFormikToProps),
)(Form);
