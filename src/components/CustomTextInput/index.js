/* Core */
import PropTypes from 'prop-types';
import React from 'react';

/* Presentational */
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';

import styles from './styles';

const CustomTextInput = ({
  iconName, inputColor, disableIcon, spaceBetween, errors, ...props
}) => (
  <View style={[
    styles.container,
    { marginBottom: spaceBetween },
  ]}
  >
    <View style={[
        styles.SectionStyle,
        inputColor === 'dark' ? styles.sectionDark : {},
      ]}
    >
      { !disableIcon &&
        <Icon
          name={iconName}
          size={20}
          style={[
            styles.icon,
            inputColor === 'dark'
              ? styles.iconDark
              : {},
            ]}
        />}
      <TextInput
        style={[
          styles.input,
          inputColor === 'dark' ? styles.dark : {},
          disableIcon ? styles.spaceLeftInside : {},
          errors ? styles['input-error'] : {},
        ]}
        underlineColorAndroid="transparent"
        keyboardAppearance="dark"
        clearButtonMode="always"
        autoCorrect={false}
        autoCapitalize="none"
        {...props}
      />
    </View>
  </View>
);

CustomTextInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  inputColor: PropTypes.string,
  disableIcon: PropTypes.bool,
  spaceBetween: PropTypes.number,
  errors: PropTypes.bool,
};

CustomTextInput.defaultProps = {
  iconName: 'phone',
  placeholder: 'Digite um texto',
  placeholderTextColor: colors.whiteOpacity,
  inputColor: 'purple',
  disableIcon: false,
  spaceBetween: 0,
  errors: false,
};

export default CustomTextInput;
