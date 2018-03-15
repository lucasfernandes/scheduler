/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import VerifyActions from 'store/ducks/verify';

/* Presentational */
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';

import EntryHeader from 'components/EntryHeader';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';

import I18n from 'i18n';


import styles from './styles';

class Verify extends Component {
  static propTypes = {
    verifyRequest: PropTypes.func.isRequired,
    verify: PropTypes.shape({
      user: PropTypes.object,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    identify: PropTypes.shape({
      phone: PropTypes.string,
      verificationId: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    code: '',
    backLoading: false,
  }

  request = () => {
    const { code } = this.state;
    const { phone, verificationId } = this.props.identify;
    const { verifyRequest } = this.props;

    return verifyRequest(code, verificationId);
  };

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.request()
  );

  navigateBack = () => {
    this.setState({ backLoading: true });
    this.props.navigation
      .dispatch(NavigationActions.back());
  }

  renderButtonBack = () => (
    <TouchableOpacity
      onPress={() => this.navigateBack()}
      activeOpacity={0.6}
    >
      <Text style={styles.haveAccountButton}>
        {I18n.t('button.updateNumber')}
      </Text>

      { this.state.backLoading && <ActivityIndicator size="small" color="white" style={styles.loading} />}
    </TouchableOpacity>
  );

  renderContent = () => {
    const { loading, error } = this.props.verify;

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[styles.container, styles.pageContainer]}>
          <EntryHeader />
          <CustomTextInput
            id="code"
            iconName="code"
            placeholder={I18n.t('placeholder.code')}
            keyboardType="numeric"
            maxLength={6}
            secureTextEntry
            onChangeText={code => this.setState({ code })}
            value={this.state.code}
            type="only-numbers"
          />
          <View style={styles.dividerButton} />

          <Button text={I18n.t('button.verify')} loading={loading} onPress={this.handleClick(loading)} />

          { this.renderButtonBack() }
          {/* {error && Toast.showWithGravity('Número não confirmado, tente novamente.', Toast.LONG, Toast.TOP)} */}
        </View>
        

      </TouchableWithoutFeedback>
    );
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  identify: state.identify,
  verify: state.verify,
});

const mapDispatchToProps = dispatch => ({
  verifyRequest: (code, confirmation) => dispatch(VerifyActions.verifyRequest(code, confirmation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
