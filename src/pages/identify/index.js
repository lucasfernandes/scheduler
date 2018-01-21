/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';

import EntryHeader from 'components/EntryHeader';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';


import styles from './styles';

export default class Identify extends Component {
  static propTypes = {};

  static defaultProps = {};

  static state = {}

  render() {
    return (
      <View style={[styles.container, styles.pageContainer]}>
        <EntryHeader />
        <CustomTextInput placeholder="Seu número de telefone" />
        <View style={styles.divider} />

        <Button text="Entrar" />

      </View>
    );
  }
}
