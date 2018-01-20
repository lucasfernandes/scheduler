/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import EntryHeader from 'components/EntryHeader';


import styles from './styles';

export default class Identify extends Component {
  static propTypes = {};

  static defaultProps = {};

  static state = {}

  render() {
    return (
      <View style={styles.container}>
        <EntryHeader />
      </View>
    );
  }
}
