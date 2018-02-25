/* Core */
import React from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';

import Header from 'components/Header';
import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import Events from 'pages/scheduler/components/Events';
import ModalBox from 'pages/scheduler/components/ModalBox';

import styles from './styles';

// const CustomCalendar2 = CustomCalendar;

const Scheduler = () => (
  <View style={styles.container}>
    <Header newEvent account />
    <ScrollView style={styles.eventsContainer}>
      <CustomCalendar />
      <View style={styles.eventsContainer}>
        <Events />
      </View>
    </ScrollView>
    <ModalBox />
  </View>
);

export default Scheduler;
