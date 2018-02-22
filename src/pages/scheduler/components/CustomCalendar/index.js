/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import EventsActions from 'store/ducks/events';

/* Presentational */
import { Calendar } from 'react-native-calendars';

import { colors } from 'styles';

import styles from './styles';
import theme from './theme';

class CustomCalendar extends Component {
  static propTypes = {
    markedDates: PropTypes.shape({}),
  };

  static defaultProps = {
    markedDates: {},
  };

  state = {
    markedDates: this.props.markedDates,
  }

  selectDay = (day) => {
    const newMarkedDates = { ...this.props.markedDates };

    let isScheduled = false;

    const scheduled = Object.keys(newMarkedDates)
      .filter(key => key === day.dateString);

    if (Object.keys(scheduled).length !== 0) {
      isScheduled = true;
    }

    if (isScheduled) {
      delete newMarkedDates[day.dateString];
    }

    const date = {};

    date[day.dateString] = {
      selectedColor: colors.add,
      dotColor: colors.green,
      marked: true,
      selected: true,
    };

    this.setState({ markedDates: { ...date, ...newMarkedDates } });
    this.props.eventGetByDateRequest(day.dateString);

    console.tron.log(this.props);
  };

  renderCalendar = () => (
    <Calendar
      style={styles.calendar}
      theme={theme}
      markedDates={this.state.markedDates}
      onDayPress={day => this.selectDay(day)}
    />
  );

  render() {
    return (
      this.renderCalendar()
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventGetByDateRequest: date => dispatch(EventsActions.eventGetByDateRequest(date)),
});

export default connect(null, mapDispatchToProps)(CustomCalendar);
