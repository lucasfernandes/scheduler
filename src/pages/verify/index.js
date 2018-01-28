/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import VerifyActions from 'store/ducks/verify';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

import EntryHeader from 'components/EntryHeader';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';


import styles from './styles';

class Verify extends Component {
  state = {
    code: '',
  }

  request = () => {
    const { code } = this.state;
    const { confirmation } = this.props.identify;
    const { verifyRequest } = this.props;

    return verifyRequest(code, confirmation);
  };

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.request()
  );

  renderContent = () => {
    const { loading } = this.props.verify;

    return (
      <View style={[styles.container, styles.pageContainer]}>
        <EntryHeader />
        <CustomTextInput
          id="code"
          iconName="code"
          placeholder="Código recebido por SMS"
          keyboardType="numeric"
          maxLength={6}
          onChangeText={code => this.setState({ code })}
        />
        <View style={styles.dividerButton} />

        <Button text="Verificar Número" loading={loading} onPress={this.handleClick(loading)} />

        <TouchableOpacity
          onPress={() => {}}
        >
          <Text style={styles.haveAccountButton}>
            Alterar número de telefone
          </Text>
        </TouchableOpacity>

      </View>
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
