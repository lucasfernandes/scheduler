/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import EventsActions from 'store/ducks/events';
import EventsAllActions from 'store/ducks/eventsAll';

/* Presentational */
import { ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import { colors } from 'styles';

import styles from './styles';
import theme from './theme';

class CustomCalendar extends Component {
  static propTypes = {
    markedDates: PropTypes.shape({}),
    eventGetByDateRequest: PropTypes.func.isRequired,
    eventsAllRequest: PropTypes.func.isRequired,
    eventsAll: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    eventsNew: PropTypes.shape({
      lastDateAdded: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    markedDates: {},
  };

  state = {
    markedDates: null,
  }

  componentDidMount() {
    this.props.eventsAllRequest();
  }

  componentDidUpdate() {
    // console.tron.log('DENTRO DO DID UPDATE DO CUSTOM CALENDAR');
  }

  loadCalendar = () => {
    const { loading, data } = this.props.eventsAll;

    if (loading) return this.renderLoading();

    const markedDates = this.loadMarkedDates(data);

    return this.renderCalendar(markedDates);
  }

  selectIfIsNewOrToday = date => (
    this.props.eventsNew.lastDateAdded
      ? this.props.eventsNew.lastDateAdded === date
      : moment().format('YYYY-MM-DD') === date
  );

  loadMarkedDates = (data, clear=false) => {
    const dates = {};

    Object.values(data).map((value) => {
      dates[value.shortDate] = {
        selectedColor: colors.add,
        dotColor: colors.green,
        marked: true,
        selected: clear
          ? false
          : this.selectIfIsNewOrToday(value.shortDate),
      };

      return dates;
    });

    return dates;
  };

  // when day is clicked
  selectDay = (day) => {
    const { data } = this.props.eventsAll;
    const clear = true;
    
    const markedDates = this.loadMarkedDates(data, clear);

    let isScheduled = false;

    const scheduled = Object.keys(markedDates)
      .filter(key => key === day.dateString);

    if (Object.keys(scheduled).length !== 0) {
      isScheduled = true;
    }

    const newMarkedDates = { ...markedDates };

    if (isScheduled) {
      // delete newMarkedDates[day.dateString];
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
    //   this.props.eventGetByDateRequest(day.dateString);
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
  events: state.events,
  eventsAll: state.eventsAll,
  eventsNew: state.eventsNew,
});

const mapDispatchToProps = dispatch => ({
  eventGetByDateRequest: date => dispatch(EventsActions.eventGetByDateRequest(date)),
  eventsAllRequest: () => dispatch(EventsAllActions.eventsAllRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar);

