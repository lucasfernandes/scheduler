/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';

/* Redux */
import { connect } from 'react-redux';
import EventsActions from 'store/ducks/events';

/* Presentational */
import { View, Text } from 'react-native';
import _ from 'lodash';

import Event from 'pages/scheduler/components/Events/components/Event';

import { metrics } from 'styles';

// import styles from './styles';

class Events extends Component {
  state = {
    //
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    this.props.eventGetRequest();

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     console.tron.log('TA LOGADO');
    //     const ref = firebase.database().ref('events');

    //     ref.once('value', (events) => {
    //       const results = _.values(events.val());
    //       results.map(result => console.tron.log(result.place));

    //     }, (err) => {
    //       console.tron.log(err);
    //     });
    //   } else {
    //     console.tron.log('DESLOGADO');
    //   }
    // });
  }

  render() {
    const { data } = this.props.events;

    return (
      <View style={{ marginTop: metrics.smallSpace / 2, flex: 1 }}>
        {
          Object.keys(data).map(key => (
            <Event key={key} event={data[key]} />
          ))
        }
      </View>
    );
  }
}

// Events.propTypes = {
//   events: PropTypes.shape({
//     data: PropTypes.objectOf(PropTypes.shape({})),
//   })
// };

// Events.defaultProps = {
//   data: [],
// };


const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  eventGetRequest: () => dispatch(EventsActions.eventGetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
