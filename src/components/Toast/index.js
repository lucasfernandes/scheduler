/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Presentational */
import { Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { metrics } from 'styles';

import styles from './styles';


class Toast extends Component {
  static propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.node,
    style: Text.propTypes.style,
  };

  static defaultProps = {
    color: 'success',
    icon: 'check-circle',
    children: 'Este é um toastie!',
    style: {},
  };

  state = {
    offset: new Animated.ValueXY({ x: 0, y: 0 }),
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.offset.y, {
        toValue: 62 + metrics.statusBarHeight,
        duration: 300,
      }),

      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 200,
      }),

      Animated.delay(5000),

      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 150,
      }),

      Animated.timing(this.state.offset.y, {
        toValue: 0,
        duration: 200,
      }),
    ]).start();
  }

  render() {
    const {
      color, icon, children, style,
    } = this.props;

    return (
      <Animated.View
        {...this.props}
        style={[
          styles.container,
          styles[`bg-color-${color}`],
          style,
          { height: this.state.offset.y },
          { opacity: this.state.opacity },
        ]}
      >
        <Icon name={icon} size={20} color="white" />
        <Text style={styles.message}>
          { children }
        </Text>
      </Animated.View>

    );
  }
}

export default Toast;
