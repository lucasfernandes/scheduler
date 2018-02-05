/* Core */
import React from 'react';

/* Presentational */
import { View } from 'react-native';

import Event from 'pages/scheduler/components/Events/components/Event';

import { metrics } from 'styles';

// import styles from './styles';
const Events = () => (
  <View style={{ marginTop: metrics.smallSpace / 2, flex: 1 }}>
    <Event />
    <Event />
    <Event />
  </View>
);

export default Events;
