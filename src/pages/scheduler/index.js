/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Firebase */
import firebase from 'react-native-firebase';

/* Redux */
import { connect } from 'react-redux';
import EventsListActions from 'store/ducks/eventsList';

/* Presentational */
import { View, ScrollView } from 'react-native';

import Header from 'components/Header';
import CustomCalendar from 'pages/scheduler/components/CustomCalendar';
import Events from 'pages/scheduler/components/Events';
import ModalBox from 'pages/scheduler/components/ModalBox';
import moment from 'moment';

import styles from './styles';


class Scheduler extends Component {
  static propTypes = {
    eventsListRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const eventsRef = this.mountLoggedRef();
    const today = moment().format('YYYYMMDD');


    if (eventsRef !== null) {
      eventsRef.on('value', snap => (
        snap.val() !== null &&
          this.props.eventsListRequest(snap.val(), today)
      ));
    }
  }

  mountLoggedRef = () => {
    const auth = firebase.auth();
    const rootRef = firebase.database().ref();
    let isLogged = false;

    auth.onAuthStateChanged((user) => {
      isLogged = user;
    });

    const { phoneNumber } = isLogged;
    let eventsRef = null;

    if (phoneNumber) {
      eventsRef = rootRef.child(phoneNumber).child('events');
    }

    return eventsRef;
  }


  render() {
    return (
      <View style={styles.container}>
        <Header newEvent account />
        <ScrollView style={styles.eventsContainer}>
          <CustomCalendar />
          <View style={styles.eventsContainer}>
            <Events />
          </View>
        </ScrollView>
        <ModalBox />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventsListRequest: (events, date) => dispatch(EventsListActions.eventsListRequest(events, date)),
});

export default connect(null, mapDispatchToProps)(Scheduler);
