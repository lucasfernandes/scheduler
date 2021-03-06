/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import IdentifyActions from 'store/ducks/identify';
import ToastActions from 'store/ducks/toast';

/* Presentational */
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

import EntryHeader from 'components/EntryHeader';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';
import I18n from 'i18n';

import styles from './styles';

class Identify extends Component {
  static propTypes = {
    identifyRequest: PropTypes.func.isRequired,
    identifyPhoneNumber: PropTypes.func.isRequired,
    identify: PropTypes.shape({
      confirmation: PropTypes.string,
      loading: PropTypes.bool,
      error: PropTypes.bool,
      phone: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  request = () => {
    const { phone } = this.props.identify;
    const { dispatch } = this.props.navigation;

    if (phone !== '') {
      return this.props.identifyRequest(phone, dispatch);
    }

    return false;
  };

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.request()
  );

  renderContent = () => {
    const { loading } = this.props.identify;

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[styles.container, styles.pageContainer]}>
          <EntryHeader />
          <CustomTextInput
            id="phone"
            iconName="phone"
            placeholder={I18n.t('placeholder.phone')}
            keyboardType="phone-pad"
            value={this.props.identify.phone}
            onChangeText={phone => this.props.identifyPhoneNumber(phone)}
            type="cel-phone"
            options={{ dddMask: '+99 (99) ' }}
          />
          <View style={styles.divider} />

          <Button text={I18n.t('button.enter')} loading={loading} onPress={this.handleClick(loading)} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    // console.tron.log('asdfasd');
    // console.tron.log(I18n.currentLocale());
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  identify: state.identify,
});

const mapDispatchToProps = dispatch => ({
  identifyRequest: (phone, navigation) =>
    dispatch(IdentifyActions.identifyRequest(phone, navigation)),
  identifyPhoneNumber: phone => dispatch(IdentifyActions.identifyPhoneNumber(phone)),
  toastShow: (message, icon, color, style) =>
    dispatch(ToastActions.toastShow(message, icon, color, style)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Identify);

