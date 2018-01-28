/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import IdentifyActions from 'store/ducks/identify';

/* Presentational */
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import EntryHeader from 'components/EntryHeader';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';

// import firebase from 'react-native-firebase';

import styles from './styles';

class Identify extends Component {
  state = {
    phone: '',
  }

  // async componentDidMount() {
  //   try {
  //     const confirmResult = await firebase.auth().signInWithPhoneNumber('+551992654828');
  //     console.tron.log(confirmResult)


  //   } catch (error) {
  //     console.tron.log(error.message);
  //   }
  //   // .then(confirmResult => console.tron.log(confirmResult)
  //   // .catch(error => console.tron.log(error)
  // }

  request = () => {
    const { phone } = this.state;
    const { identifyRequest } = this.props;

    return identifyRequest(phone);
  };

  handleClick = loading => (
    loading
      ? () => {}
      : () => this.request()
  );

  navigateToVerify = () => {
    const { confirmation } = this.props.identify;
    const { dispatch } = this.props.navigation;

    return dispatch(NavigationActions.navigate({
      routeName: 'Verify',
      params: { confirmation },
    }));
  }

  renderContent = () => {
    const { loading, confirmation, error } = this.props.identify;
    const { phone } = this.state;

    if (confirmation) {
      this.navigateToVerify();
    }

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
        <View style={styles.divider} />

        <Button text="Entrar" loading={loading} onPress={this.handleClick(loading)} />

        { error && <Text>ERRO!</Text>}
      </View>
    );
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  identify: state.identify,
});

const mapDispatchToProps = dispatch => ({
  identifyRequest: phone => dispatch(IdentifyActions.identifyRequest(phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Identify);
