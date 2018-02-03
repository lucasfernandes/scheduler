/* Core */
import React from 'react';

/* Presentational */
import { View, Text } from 'react-native';

import Header from 'components/Header';

import styles from './styles';

const Scheduler = () => (
  <View style={styles.container}>
    <Header newEvent account />
    <Text style={styles.title}>PASSOU, UFA!</Text>
  </View>
);

export default Scheduler;
