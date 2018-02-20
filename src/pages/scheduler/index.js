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
import I18n from 'i18n';

import { colors } from 'styles';

import styles from './styles';

// this.loadMarkedDates = (data) => ({
//   '2018-02-16': { marked: true, selectedColor: colors.add },
//   '2018-02-12': { marked: true, selectedColor: colors.add },
// });

const dates = {};

const loadDatesWithKey = (data, key) => {
  // const formatedDate = data[key].date;
  // const formatedDate = new Date().parseExact(data[key].date, 'yyyy-mm-dd hh-mm');
  // console.tron.log(formatedDate);
  // console.tron.l
  // console.tron.log(I18n.strftime(data[key].date, '%d/%m/%Y'));

  dates[`${data[key].shortDate}`] = {
    selectedColor: colors.green,
    dotColor: colors.green,
    marked: true,
  };

  // console.tron.log(dates);
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

    {/* { console.tron.log('EVENTOS')}
    { console.tron.log(events)} */}
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
