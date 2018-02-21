/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
    markedDates: {},
  };

  // componentWillMount() {
  //   this.setState({ markedDates: this.props.markedDates });
  // }

  selectDay = (day) => {
    const date = { [day.dateString]: { selected: true, selectedColor: colors.add } };

    this.setState({ markedDates: { ...date, ...this.props.markedDates } });
  };

  renderCalendar = (markedDates) => {
    // console.tron.log(markedDates);

    return (
      <Calendar
        style={styles.calendar}
        theme={theme}
        markedDates={markedDates}
        onDayPress={day => this.selectDay(day)}
      />
    );
  }

  render() {
    const { markedDates } = this.props;
    // console.tron.log('RENDERIZANDO');

    return (
      markedDates && this.renderCalendar(markedDates)
    );
  }
}

export default CustomCalendar;
