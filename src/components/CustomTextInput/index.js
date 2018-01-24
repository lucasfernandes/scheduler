/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';

import styles from './styles';

const CustomTextInput = ({ iconName, ...props }) => (
  <View style={styles.container}>
    <View style={styles.SectionStyle}>
      <Icon name={iconName} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  </View>
);

CustomTextInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
};

CustomTextInput.defaultProps = {
  iconName: 'phone',
  placeholder: 'Digite um texto',
  placeholderTextColor: colors.whiteOpacity,
};

export default CustomTextInput;
