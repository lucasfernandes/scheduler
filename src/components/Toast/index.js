/* Core */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import ToastActions from 'store/ducks/toast';

/* Presentational */
import { Text, Animated, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { metrics } from 'styles';

import styles from './styles';

class Toast extends Component {
  static propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.node,
    style: Text.propTypes.style,
    toastHide: PropTypes.func.isRequired,
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
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 150,
        }),
        Animated.timing(this.state.offset.y, {
          toValue: 62 + metrics.statusBarHeight,
          duration: 150,
        }),
      ]),

      Animated.delay(5000),

      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 150,
        }),

        Animated.timing(this.state.offset.y, {
          toValue: 0,
          duration: 150,
        }),
      ]),
    ]).start(() => {
      this.props.toastHide();
    });
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
          { minHeight: this.state.offset.y },
          { opacity: this.state.opacity },
        ]}
      >
        <View style={styles.messageContainer}>
          <Icon name={icon} size={20} color="white" />
          <Text style={styles.message}>
            Alguns erros foram encontrados:
            {/* { children } */}
          </Text>
        </View>
        <Text style={styles.errors}>
          { children }
        </Text>
      </Animated.View>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  toastHide: () => dispatch(ToastActions.toastHide()),
});

export default connect(null, mapDispatchToProps)(Toast);
