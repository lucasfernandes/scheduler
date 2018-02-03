/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { colors } from 'styles';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    backButton: PropTypes.bool,
    newEvent: PropTypes.bool,
    account: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    backButton: false,
    newEvent: false,
    account: false,
  };

  navigateBack = () => {
    const { dispatch } = this.props;

    return dispatch(NavigationActions.back());
  }

  renderBackButton = () => (
    <TouchableOpacity onPress={this.navigateBack} activeOpacity={0.6}>
      <Icon name="angle-left" size={20} color={colors.white} />
    </TouchableOpacity>
  );

  renderNewEventButton = () => (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
      <View style={styles.circle}>
        <FeatherIcon name="plus" size={14} color={colors.white} />
      </View>
    </TouchableOpacity>
  );

  renderAccountButton = () => (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
      <Icon name="user" size={22} color={colors.white} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftButton}>
          { this.props.backButton && this.renderBackButton() }
          { this.props.newEvent && this.renderNewEventButton()}
        </View>
        <Text style={styles.title}>SCHEDULER</Text>
        <View style={styles.rightButton}>
          { this.props.account && this.renderAccountButton()}
        </View>
      </View>
    );
  }
}

export default connect()(Header);
