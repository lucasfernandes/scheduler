/* Core */
import React from 'react';

/* Presentational */
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

import Header from 'components/Header';

import styles from './styles';

const Scheduler = () => (
  <View style={styles.container}>
    <Header newEvent account />
    {/* <Text style={styles.title}>PASSOU, UFA!</Text> */}
    <Calendar />
  </View>
);

export default Scheduler;
