/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
// import IdentifyActions from 'store/ducks/identify';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

import EntryHeader from 'components/EntryHeader';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';


import styles from './styles';

class Register extends Component {
  state = {
    phone: '',
    name: '',
    password: '',
  }

  request = () => {
    // const { phone } = this.state;
    // const { identifyRequest } = this.props;

    // return identifyRequest(phone);
  };

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.request()
  );

  renderContent = () => {
    // const { loading } = this.props.identify;
    const loading = false;
    const { phone, name, password } = this.state;

    // console.log(`phone - ${phone}`);
    return (
      <View style={[styles.container, styles.pageContainer]}>
        <EntryHeader />
        <CustomTextInput
          id="phone"
          iconName="phone"
          placeholder="Seu número de telefone"
          keyboardType="phone-pad"
          onChangeText={phone => this.setState({ phone })}
        />
        <View style={styles.dividerForm} />

        <CustomTextInput
          id="name"
          iconName="user"
          placeholder="Seu nome"
          onChangeText={name => this.setState({ name })}
        />
        <View style={styles.dividerForm} />

        <CustomTextInput
          id="password"
          iconName="lock"
          placeholder="Sua senha"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <View style={styles.dividerButton} />

        <Button text="Criar conta grátis" loading={loading} onPress={this.handleClick(loading)} />
        
        <TouchableOpacity
          onPress={() => {}}
        >
          <Text style={styles.haveAccountButton}>
            Já tenho conta
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    return this.renderContent();
  }
}

// const mapStateToProps = state => ({
//   identify: state.identify,
// });

// const mapDispatchToProps = dispatch => ({
//   identifyRequest: phone => dispatch(IdentifyActions.identifyRequest(phone)),
// });

// export default connect()(Register);
export default Register;
