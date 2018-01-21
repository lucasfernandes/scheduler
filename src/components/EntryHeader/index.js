/* Core */
import React from 'react';

/* Presentational */
import { View, Image } from 'react-native';
import schedulerImg from 'assets/images/scheduler.png';

import styles from './styles';

const EntryHeader = () => (
  <View style={styles.entryHeaderContainer}>
    <Image
      style={styles.image}
      source={schedulerImg}
    />
  </View>
);

export default EntryHeader;
