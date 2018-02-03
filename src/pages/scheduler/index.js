/* Core */
import React from 'react';

/* Presentational */
import { View, Text, ScrollView } from 'react-native';

import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import Header from 'components/Header';

import { colors } from 'styles';

import styles from './styles';

this.loadMarkedDates = () => ({
  '2018-02-16': { selected: true, selectedColor: colors.add },
});

const Scheduler = () => (
  <View style={styles.container}>
    <Header newEvent account />
    <ScrollView style={styles.eventsContainer}>
      <CustomCalendar markedDates={this.loadMarkedDates()} />
      <Text style={styles.title}>PASSOU, UFA!</Text>
    </ScrollView>
  </View>
);

export default Scheduler;
