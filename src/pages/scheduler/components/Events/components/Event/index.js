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
  static propTypes = {};

  static defaultProps = {};

  static state = {}

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
            <Text style={styles.title}>Criar minha aplicação do desafio</Text>
            <Text style={styles.sub}>Trabalho</Text>
          </View>
          <Text style={styles.time}>7h</Text>
        </View>
      </Swipeout>
    );
  }
}
