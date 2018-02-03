/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { Calendar } from 'react-native-calendars';

import styles from './styles';
import theme from './theme';

const CustomCalendar = ({ markedDates }) => (
  <Calendar
    style={styles.calendar}
    theme={theme}
    markedDates={markedDates}
  />
);

CustomCalendar.propTypes = {
  markedDates: (PropTypes.shape({})),
};

CustomCalendar.defaultProps = {
  markedDates: {},
};

export default CustomCalendar;
