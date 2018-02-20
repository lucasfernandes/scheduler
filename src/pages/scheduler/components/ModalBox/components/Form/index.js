/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { compose } from 'redux';
import ModalActions from 'store/ducks/modal';
import ToastActions from 'store/ducks/toast';
import EventsActions from 'store/ducks/events';

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
    eventRequest: PropTypes.func.isRequired,
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
      message: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    events: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
  };

  static defaultProps = {
    // name: this.props.name,
    // place: this.props.place,
  };

  state = {
    datetime: '',
  }


  // getErrors = () => {
  //   const arr = Object.values(this.props.errors);

  //   return arr.map(err => `
  //   - ${err}`);
  // }

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.handleForm()
  );

  handleForm = () => {
    this.props.submitForm();

    setTimeout(() => {
      const { errors, values, eventRequest } = this.props;

      if (Object.keys(errors).length >= 1) {
        this.handleErrors();
      } else {
        eventRequest(values);
      }
    }, 200);
  }

  handleErrors = () => {
    // setTimeout(() => {
    //   const errors = this.getErrors();
    //   if (errors.length) {
    //     this.props.toastShow(errors, 'times-circle', 'error', null, true);
    //   }
    // }, 500);

    this.props.toastShow(['Todos os campos devem ser preenchidos'], 'times-circle', 'error', null, true);
  };

  render() {
    const { toast } = this.props;
    const { loading } = this.props.events;

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
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  modalHide: () => dispatch(ModalActions.modalHide()),
  toastShow: (message, icon, color, style, modal) =>
    dispatch(ToastActions.toastShow(message, icon, color, style, modal)),
  eventRequest: values => dispatch(EventsActions.eventRequest(values)),
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
