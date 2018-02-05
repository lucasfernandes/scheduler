/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const EventButton = ({ color, icon, margin }) => (
  <TouchableOpacity
    style={[
      styles.button,
      styles[`bg-color-${color}`],
      styles[`margin-${margin}`],
    ]}
    onPress={() => {}}
    activeOpacity={0.6}
  >
    <Icon name={icon} size={20} color="#FFF" />
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
