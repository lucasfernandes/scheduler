import { colors, fonts, metrics } from 'styles';

export default {
  // backgroundColor: colors.darkPurple,
  calendarBackground: colors.darkPurple,
  // textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: colors.add,
  selectedDayTextColor: colors.white,
  // todayTextColor: colors.white,
  // dayTextColor: colors.lighterWhiteOpacity,
  textDisabledColor: colors.disabledDays,
  // dotColor: '#00adf5',
  // selectedDotColor: '#ffffff',
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
      // borderWidth: 1,
    },
    // week: {
    //   marginTop: 5,
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    // },
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
      // fontWeight: '300',
      color: colors.white,
      // backgroundColor: 'rgba(255, 255, 255, 0)'
    },
  },

};
