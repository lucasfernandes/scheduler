/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import EventButton from 'pages/scheduler/components/Events/components/Event/components/EventButton';

import { colors } from 'styles';

import styles from './styles';

export default class Event extends Component {
  static propTypes = {
    event: PropTypes.shape({
      name: PropTypes.string,
      place: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
  };

  leftButtons = () => (
    [{
      component: <EventButton color="share" icon="share" margin="left" />,
      backgroundColor: colors.transparent,
    }]
  );

  rightButtons = () => (
    [{
      component: <EventButton color="delete" icon="times" margin="right" />,
      backgroundColor: colors.transparent,
    }]
  );

  render() {
    const { event } = this.props;

    return (
      <Swipeout
        style={styles.swipeout}
        left={this.leftButtons()}
        right={this.rightButtons()}
        buttonWidth={100}
        sensitivity={30}
      >
        <View style={styles.eventContainer}>
          <View style={styles.eventText}>
            <Text style={styles.title}>{event.name}</Text>
            <Text style={styles.sub}>{event.place}</Text>
          </View>
          <Text style={styles.time}>{event.shortTime}</Text>
        </View>
      </Swipeout>
    );
  }
}
