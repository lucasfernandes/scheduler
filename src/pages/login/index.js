/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

export default class Login extends Component {
  static propTypes = {};

  static defaultProps = {};

  static state = {}

  render() {
    return (
      <View style={styles.container}>
        <Text>LOGIN</Text>
      </View>
    );
  }
}