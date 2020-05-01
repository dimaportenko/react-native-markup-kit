/** @flow */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

const Center = (props: ViewProps): React$Node => (
  <View style={[styles.center, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Center;
