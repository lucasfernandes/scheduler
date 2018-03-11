/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import EventsRemoveActions from 'store/ducks/eventsRemove';

/* Presentational */
import { View, Text, Share } from 'react-native';
import Swipeout from 'react-native-swipeout';
import EventButton from 'pages/scheduler/components/Events/components/Event/components/EventButton';

import { colors } from 'styles';

import styles from './styles';

class Event extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      place: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
  };

  leftButtons = () => (
    [{
      component: <EventButton color="share" icon="share" margin="left" onPress={() => this.shareEvent(this.props.data)} />,
      backgroundColor: colors.transparent,
    }]
  );

  rightButtons = () => (
    [{
      component: <EventButton color="delete" icon="times" margin="right" onPress={() => this.removeEvent(this.props.data)} />,
      backgroundColor: colors.transparent,
    }]
  );

  removeEvent = () => this.props.eventsRemoveRequest(this.props.id);
  shareEvent = ({ name, place, date }) => Share.share({
    title: name,
    message:
    `Evento: ${name}
Local: ${place}
${date}`,
    url: undefined,
  }, {
    // Android only:
    dialogTitle: name,
    // iOS only:
    excludedActivityTypes: [
      'com.apple.UIKit.activity.PostToTwitter',
    ],
  })

  render() {
    const { id, data } = this.props;
    // console.tron.log(this.props);
    return (
      <Swipeout
        style={styles.swipeout}
        left={this.leftButtons()}
        right={this.rightButtons(id)}
        buttonWidth={100}
        sensitivity={30}
      >
        <View style={styles.eventContainer}>
          <View style={styles.eventText}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.sub}>{data.place}</Text>
          </View>
          <Text style={styles.time}>{data.shortTime}</Text>
        </View>
      </Swipeout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventsRemoveRequest: key => dispatch(EventsRemoveActions.eventsRemoveRequest(key)),
});

export default connect(null, mapDispatchToProps)(Event);
