/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import EventsListActions from 'store/ducks/eventsList';

/* Presentational */
import { ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import styles from './styles';
import theme from './theme';

class CustomCalendar extends Component {
  static propTypes = {
    eventsList: PropTypes.shape({
      data: PropTypes.shape({}),
      markedDates: PropTypes.shape({}),
    }).isRequired,

    eventsListRequest: PropTypes.func.isRequired,
  };

  selectDay = (day) => {
    const { data } = this.props.eventsList;
    const formatedDay = moment(day.dateString).format('YYYYMMDD');

    this.props.eventsListRequest(data, formatedDay);
  }

  renderCalendar = dates => (
    <Calendar
      style={styles.calendar}
      theme={theme}
      markedDates={dates}
      onDayPress={day => this.selectDay(day)}
    />
  );

  renderLoading = () => (
    <ActivityIndicator size="small" color="#FFF" />
  );

  render() {
    const { markedDates } = this.props.eventsList;

    return (
      this.renderCalendar(markedDates)
    );
  }
}

const mapStateToProps = state => ({
  eventsList: state.eventsList,
});

const mapDispatchToProps = dispatch => ({
  eventsListRequest: (events, day) => dispatch(EventsListActions.eventsListRequest(events, day)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar);

