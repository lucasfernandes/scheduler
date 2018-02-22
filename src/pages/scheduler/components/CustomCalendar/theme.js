import { colors, fonts, metrics } from 'styles';

export default {
  // backgroundColor: colors.darkPurple,
  calendarBackground: colors.darkPurple,
  // textSectionTitleColor: '#b6c1cd',
  // selectedDayBackgroundColor: colors.add,
  // selectedDayTextColor: colors.white,
  todayTextColor: colors.add,
  // dayTextColor: colors.lighterWhiteOpacity,
  textDisabledColor: colors.disabledDays,
  // dotColor: '#00adf5',
  selectedDotColor: colors.lighterWhiteOpacity,
  arrowColor: colors.arrow,
  // monthTextColor: colors.white,
  textDayFontFamily: 'Helvetica Neue',
  // textMonthFontFamily: 'monospace',
  // textDayHeaderFontFamily: 'monospace',
  textDayFontSize: fonts.regular,
  // textMonthFontSize: 22,
  // textDayHeaderFontSize: 16,

  'stylesheet.calendar.header': {
    monthText: {
      fontSize: fonts.huge,
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      color: colors.white,
      paddingTop: 30,
      height: 82,
    },
    dayHeader: {
      color: colors.white,
      fontSize: fonts.regular,
      fontWeight: 'bold',
      fontFamily: 'Helvetica Neue',
      textAlign: 'center',
      marginBottom: metrics.baseSpace,
      marginTop: 2,
      width: 32,
    },
  },

  'stylesheet.day.basic': {
    text: {
      marginTop: 4,
      fontSize: fonts.regular,
      fontFamily: 'Helvetica Neue',
      color: colors.white,
    },
  },

};
