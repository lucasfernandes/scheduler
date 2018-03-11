/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import EventsByDateActions from 'store/ducks/eventsByDate';

/* Presentational */
import { View, ActivityIndicator, Text } from 'react-native';

import Event from 'pages/scheduler/components/Events/components/Event';
import I18n from 'i18n';
import moment from 'moment';

import styles from './styles';

class Events extends Component {
  static propTypes = {
    eventsByDateRequest: PropTypes.func.isRequired,
    eventsByDate: PropTypes.shape({
      loading: PropTypes.bool,
      // dataByDay: PropTypes.arrayOf(PropTypes.array),
    }).isRequired,
  };

  componentDidMount() {
    const today = moment().format('YYYYMMDD');
    this.props.eventsByDateRequest(today);
  }


  renderLoading = () => (
    <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
  )

  renderEmpty = () => (
    <Text style={styles.empty}>{I18n.t('label.noEvents')}</Text>
  );

  renderEvents = data => (
    Object.entries(data).map(([key, value]) => (
      <Event key={key} data={value} id={key} />
    ))
  );

  renderContent = data => (
    Object.keys(data).length === 0
      ? this.renderEmpty()
      : this.renderEvents(data)
  );

  render() {
    const { loading, data } = this.props.eventsByDate;

    // console.tron.log('DENTRO DO RENDER DOS EVENTOS');

    return (
      <View style={styles.container}>
        { loading && this.renderLoading() }
        { this.renderContent(data) }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  eventsByDate: state.eventsByDate,
});

const mapDispatchToProps = dispatch => ({
  eventsByDateRequest: date => dispatch(EventsByDateActions.eventsByDateRequest(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);

// É AQUI AGORA SAPORRA! O DUCKS TA PRONTO O SAGA TB!

// TEM QUE CHAMAR OS EVENTOS POR DATA AQUI DE ALGUMA FORMA!
