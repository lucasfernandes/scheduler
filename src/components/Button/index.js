/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { Platform, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native';

import styles from './styles';

const Element = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const Button = ({ text, onPress }) => (
  <Element
    onPress={onPress}
    style={styles.buttonContainer}
    activeOpacity={0.6}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </Element>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: 'Button',
  onPress: () => {},
};

export default Button;
