/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import EventsActions from 'store/ducks/events';

/* Presentational */
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';

import Header from 'components/Header';
import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import CalendarEmpty from 'pages/scheduler/components/CustomCalendar/empty';
import Events from 'pages/scheduler/components/Events';
import ModalBox from 'pages/scheduler/components/ModalBox';
import moment from 'moment';
import _ from 'lodash';

import { colors } from 'styles';

import styles from './styles';

const CustomCalendar2 = CustomCalendar;

class Scheduler extends Component {
  static propTypes = {
    eventGetRequest: PropTypes.func.isRequired,
    eventGetByDateRequest: PropTypes.func.isRequired,
    events: PropTypes.shape({
      // data: PropTypes.arrayOf(PropTypes.objectOf({
      //   name: PropTypes.string,
      //   place: PropTypes.string,
      // })),
    }).isRequired,
  };

  state = {
    today: moment().format('YYYY-MM-DD'),
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {

    // console.tron.log(this.props.events.lastDateAdded);
    this.props.eventGetRequest();
    this.props.eventGetByDateRequest(this.state.today);
    // console.tron.log('DENTRO DO GET EVENTS');
    // _.delay(() => this.props.eventGetByDateRequest(this.state.today), 1000);
  }

  loadCalendar = () => {
    const dates = {};
    const { data } = this.props.events;

    console.tron.log(data);

    this.loadMarkedDates(dates, data);

    if (Object.keys(dates).length !== 0) {
      return this.renderCalendar(dates);
    }

    return this.renderEmptyCalendar();
    // return null;
  }

  loadMarkedDates = (dates, data) => (
    Object.keys(data).map(key => this.loadDatesWithKey(dates, data, key))
  );

  loadDatesWithKey = (dates, data, key) => {
    dates[`${data[key].shortDate}`] = {
      selectedColor: colors.add,
      dotColor: colors.green,
      marked: true,
      selected: false,
      // selected: this.props.events.lastDateAdded
      //   ? true
      //   : false,
    };
  };

  renderCalendar = dates => (
    <CustomCalendar markedDates={dates} />
  );

  renderEmptyCalendar = () => (
    <CalendarEmpty />
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

const mapDispatchToProps = dispatch => ({
  eventGetRequest: () => dispatch(EventsActions.eventGetRequest()),
  eventGetByDateRequest: date => dispatch(EventsActions.eventGetByDateRequest(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
