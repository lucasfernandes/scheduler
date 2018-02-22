/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';

/* Redux */
import { connect } from 'react-redux';
import EventsActions from 'store/ducks/events';

/* Presentational */
import { View, ActivityIndicator, Text } from 'react-native';

import Event from 'pages/scheduler/components/Events/components/Event';
import I18n from 'i18n';
import moment from 'moment';

import styles from './styles';

class Events extends Component {
  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    const date = moment().format('YYYY-MM-DD');

    console.tron.log(this.props);
    this.props.eventGetRequest();
    this.props.eventGetByDateRequest(date);
  }

  renderLoading = () => (
    <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
  )

  renderEmpty = () => (
    <Text style={styles.empty}>{I18n.t('label.noEvents')}</Text>
  );

  renderEvents = data => (
    Object.keys(data).map(key => (
      <Event key={key} event={data[key]} />
    ))
  );

  renderContent = data => (
    Object.keys(data).length === 0
      ? this.renderEmpty()
      : this.renderEvents(data)
  );

  render() {
    const { loading, dataByDay } = this.props.events;

    console.tron.log(this.props.events);

    return (
      <View style={styles.container}>
        { loading && this.renderLoading() }
        { this.renderContent(dataByDay) }
      </View>
    );
  }
}

Events.propTypes = {
  eventGetRequest: PropTypes.func.isRequired,
//   events: PropTypes.shape({
//     data: PropTypes.objectOf(PropTypes.shape({})),
//   })
};

// Events.defaultProps = {
//   data: [],
// };


const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  eventGetRequest: () => dispatch(EventsActions.eventGetRequest()),
  eventGetByDateRequest: date => dispatch(EventsActions.eventGetByDateRequest(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
