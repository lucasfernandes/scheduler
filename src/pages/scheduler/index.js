/* Core */
import React from 'react';

/* Presentational */
import { View, Text, ScrollView } from 'react-native';

import Header from 'components/Header';
import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import Events from 'pages/scheduler/components/Events';
import ModalBox from 'pages/scheduler/components/ModalBox';

import { colors } from 'styles';

import styles from './styles';

this.loadMarkedDates = () => ({
  '2018-02-16': { marked: true, selectedColor: colors.add },
  '2018-02-12': { marked: true, selectedColor: colors.add },
});

const Scheduler = () => (
  <View style={styles.container}>
    <Header newEvent account />
    <ScrollView style={styles.eventsContainer}>
      <CustomCalendar markedDates={this.loadMarkedDates()} />
      <View style={styles.eventsContainer}>
        <Events />
      </View>
    </ScrollView>
    <ModalBox />
  </View>
);

export default Scheduler;
