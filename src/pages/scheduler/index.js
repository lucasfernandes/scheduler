/* Core */
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { View, ScrollView, ActivityIndicator } from 'react-native';

import Header from 'components/Header';
import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import Events from 'pages/scheduler/components/Events';
import ModalBox from 'pages/scheduler/components/ModalBox';

import { colors } from 'styles';

import styles from './styles';

class Scheduler extends Component {

  loadCalendar = () => {
    const dates = {};
    const { data } = this.props.events;

    this.loadMarkedDates(dates, data);

    if (dates !== {}) {
      return this.renderCalendar(dates);
    }

    return null;
  }

  loadMarkedDates = (dates, data) => (
    Object.keys(data).map(key => this.loadDatesWithKey(dates, data, key))
  );

  loadDatesWithKey = (dates, data, key) => {
    dates[`${data[key].shortDate}`] = {
      selectedColor: colors.green,
      dotColor: colors.green,
      marked: true,
    };
  };

  renderCalendar = dates => (
    <CustomCalendar markedDates={dates} />
  );

  render() {
    return (
      <View style={styles.container}>
        <Header newEvent account />
        <ScrollView style={styles.eventsContainer}>
          { this.loadCalendar() }
          <View style={styles.eventsContainer}>
            <Events />
          </View>
        </ScrollView>
        <ModalBox />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(Scheduler);
