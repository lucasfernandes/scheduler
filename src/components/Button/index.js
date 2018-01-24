/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { Platform, TouchableOpacity, TouchableNativeFeedback, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

const Element = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const Button = ({ text, loading, ...props }) => (
  <Element
    style={styles.buttonContainer}
    activeOpacity={0.6}
    {...props}
  >
    { loading
        ? <ActivityIndicator size="small" color="white" />
        : <Text style={styles.buttonText}>{text}</Text>}
  </Element>
);

Button.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Button',
  loading: false,
};

export default Button;
