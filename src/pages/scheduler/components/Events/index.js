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
    eventsList: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.shape({}),
      day: PropTypes.string,
    }).isRequired,
  };

  renderLoading = () => (
    <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
  )

  renderEmpty = () => (
    <Text style={styles.empty}>{I18n.t('label.noEvents')}</Text>
  );

  renderEvents = (data, day) => (
    Object.values(data).filter(value => value.shortDate === day).length > 0
      ? Object.entries(data).map(([key, value]) => value.shortDate === day &&
        <Event key={key} data={value} id={key} />)
      : this.renderEmpty()
  );

  renderContent = (data, day) => (
    Object.keys(data).length === 0
      ? this.renderEmpty()
      : this.renderEvents(data, day)
  );

  render() {
    const { loading, data, day } = this.props.eventsList;

    return (
      <View style={styles.container}>
        { loading && this.renderLoading() }
        { this.renderContent(data, day) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  eventsList: state.eventsList,
});

export default connect(mapStateToProps)(Events);
