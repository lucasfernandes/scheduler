/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import EventsListActions from 'store/ducks/eventsList';
// import EventsByDateActions from 'store/ducks/eventsByDate';

/* Presentational */
import { ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import { colors } from 'styles';

import styles from './styles';
import theme from './theme';

class CustomCalendar extends Component {
  static propTypes = {
    eventsList: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    eventsNew: PropTypes.shape({
    }).isRequired,
  };

  static defaultProps = {
    markedDates: {},
  };

  state = {
    markedDates: null,
  }

  loadCalendar = () => {
    const { data } = this.props.eventsList;
    const markedDates = this.loadMarkedDates(data);

    return this.renderCalendar(markedDates);
  }

  dateToMark = (date) => {
    const { data } = this.props.eventsNew;

    const result = Object.values(data).length > 0
      ? Object.values(data)[0].shortDate === date
      : date === moment().format('YYYYMMDD');

    return result;
  };

  loadMarkedDates = (data, clear=false) => {
    const dates = {};

    Object.values(data).map((value) => {
      const date = moment(value.shortDate).format('YYYY-MM-DD');

      dates[date] = {
        selectedColor: colors.add,
        dotColor: colors.green,
        marked: true,
        selected: clear
          ? false
          : this.dateToMark(value.shortDate),
      };

      return dates;
    });

    return dates;
  };

  // when day is clicked
  selectDay = (day) => {
    const formatedDay = moment(day.dateString).format('YYYYMMDD');
    this.props.eventsListRequest(this.props.eventsList.data, formatedDay);

    const clear = true;
    const { data } = this.props.eventsList;
    const markedDates = this.loadMarkedDates(data, clear);

    let isScheduled = false;
    const scheduled = Object.keys(markedDates)
      .filter(key => key === day.dateString);

    if (Object.keys(scheduled).length !== 0) {
      isScheduled = true;
    }

    const newMarkedDates = { ...markedDates };

    if (isScheduled) {
      newMarkedDates[day.dateString].selected = true;
    } else {
      newMarkedDates[day.dateString] = {
        selectedColor: colors.add,
        dotColor: colors.green,
        marked: true,
        selected: true,
      };
    }

    this.setState({ markedDates: newMarkedDates });
  };

  renderCalendar = (dates) => {
    return (
      <Calendar
        style={styles.calendar}
        theme={theme}
        markedDates={dates}
        onDayPress={day => this.selectDay(day)}
      />
    );
  };

  renderLoading = () => (
    <ActivityIndicator size="small" color="#FFF" />
  );

  render() {
    const { markedDates } = this.state;

    return (
      markedDates
        ? this.renderCalendar(markedDates)
        : this.loadCalendar()
    );
  }
}

const mapStateToProps = state => ({
  eventsList: state.eventsList,
  eventsNew: state.eventsNew,
});

const mapDispatchToProps = dispatch => ({
  eventsListRequest: (events, date) => dispatch(EventsListActions.eventsListRequest(events, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar);

