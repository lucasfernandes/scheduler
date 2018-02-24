/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Calendar } from 'react-native-calendars';

import styles from './styles';
import theme from './theme';

class CalendarEmpty extends Component {
  renderCalendar = () => (
    <Calendar
      style={styles.calendar}
      theme={theme}
    />
  );

  render() {
    return (
      this.renderCalendar()
    );
  }
}

export default CalendarEmpty;

