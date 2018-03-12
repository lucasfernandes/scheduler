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
  };

  renderLoading = () => (
    <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
  )

  renderEmpty = () => (
    <Text style={styles.empty}>{I18n.t('label.noEvents')}</Text>
  );

  renderEvents = (data, date) => (
    Object.values(data).filter(value => value.shortDate === date).length > 0
      ? Object.entries(data).map(([key, value]) => value.shortDate === date &&
        <Event key={key} data={value} id={key} />)
      : this.renderEmpty()
  );

  renderContent = (data, date) => (
    Object.keys(data).length === 0
      ? this.renderEmpty()
      : this.renderEvents(data, date)
  );

  render() {
    const { loading, data, date } = this.props.eventsList;

    return (
      <View style={styles.container}>
        { loading && this.renderLoading() }
        { this.renderContent(data, date) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  eventsList: state.eventsList,
});

export default connect(mapStateToProps)(Events);
