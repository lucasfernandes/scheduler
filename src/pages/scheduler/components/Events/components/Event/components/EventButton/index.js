/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const EventButton = props => (
  <TouchableOpacity
    style={[
      styles.button,
      styles[`bg-color-${props.color}`],
      styles[`margin-${props.margin}`],
    ]}
    activeOpacity={0.6}
    {...props}
  >
    <Icon name={props.icon} size={20} color="#FFF" />
  </TouchableOpacity>
);

EventButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  margin: PropTypes.string,
};

EventButton.defaultProps = {
  color: 'share',
  icon: 'share',
  margin: '',
};

export default EventButton;
