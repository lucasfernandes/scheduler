/* Core */
import React from 'react';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { View, ScrollView } from 'react-native';

import Header from 'components/Header';
import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import Events from 'pages/scheduler/components/Events';
import ModalBox from 'pages/scheduler/components/ModalBox';

import { colors } from 'styles';

import styles from './styles';

// this.loadMarkedDates = (data) => ({
//   '2018-02-16': { marked: true, selectedColor: colors.add },
//   '2018-02-12': { marked: true, selectedColor: colors.add },
// });

const dates = {};

const loadDatesWithKey = (data, key) => {
  dates[`${data[key].date}`] = {
    selectedColor: colors.green,
    dotColor: colors.green,
    marked: true,
  };
};

const loadMarkedDates = (data) => {
  Object.keys(data).map(key => loadDatesWithKey(data, key));

  console.tron.log(dates);
  return dates;
};

// <Event key={key} event={data[key]} />
// '2018-02-16': { marked: true, selectedColor: colors.add },
// '2018-02-12': { marked: true, selectedColor: colors.add },

const Scheduler = ({ events }) => (
  <View style={styles.container}>
    <Header newEvent account />
    <ScrollView style={styles.eventsContainer}>
      <CustomCalendar markedDates={loadMarkedDates(events.data)} />
      <View style={styles.eventsContainer}>
        <Events />
      </View>
    </ScrollView>
    <ModalBox />
  </View>
);

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(Scheduler);
