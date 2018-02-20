/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';

import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, colors, fonts, StyleSheet } from 'styles';

import styles from './styles';

export default class DateTimePicker extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    datetime: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          {...this.props}
          style={styles.pickerContainer}
          // date={this.state.datetime}
          mode="datetime"
          placeholder="Selecione a data e horário"
          format="DD/MM/YYYY HH:mm"
          minDate="01-01-2018"
          maxDate="01-01-2032"
          minuteInterval={10}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateTouchBody: {
              borderWidth: 0,
              borderRadius: metrics.baseRadius,
            },
            dateInput: {
              borderWidth: this.props.errors
                ? 0.5
                : 0,
              borderColor: this.props.errors && colors.red,
              height: 54,
              borderRadius: metrics.baseRadius,
              backgroundColor: colors.grayPlaceholder,
              alignItems: 'flex-start',
              paddingLeft: metrics.baseSpace,
            },
            dateText: {
              fontSize: fonts.big,
              color: colors.gray,
              fontFamily: 'Helvetica',
              textAlign: 'left',
              marginLeft: 38,
            },
            placeholderText: {
              fontSize: fonts.big,
              color: colors.gray,
              fontFamily: 'Helvetica',
              textAlign: 'left',
              marginLeft: 38,
            },
          }}
        />
        <Icon name="calendar" size={20} style={styles.icon} />
      </View>
    );
  }
}
