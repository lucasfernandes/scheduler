/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { View, ActivityIndicator, Text } from 'react-native';

import Event from 'pages/scheduler/components/Events/components/Event';
import I18n from 'i18n';

import styles from './styles';

class Events extends Component {
  static propTypes = {
    events: PropTypes.shape({
      loading: PropTypes.bool,
      // dataByDay: PropTypes.arrayOf(PropTypes.array),
    }).isRequired,
  };


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
    const { loading, dataByDay: data } = this.props.events;

    return (
      <View style={styles.container}>
        { loading && this.renderLoading() }
        { this.renderContent(data) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(Events);
