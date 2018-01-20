/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

// console.tron.log(styles.container[1]);

export default class Identify extends Component {
  static propTypes = {};

  static defaultProps = {};

  static state = {}

  render() {
    return (
      <View style={styles.container}>
        <Text>IDENTIFY</Text>
      </View>
    );
  }
}
