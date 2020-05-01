/** @flow */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

const Row = (props: ViewProps): React$Node => (
  <View style={[styles.row, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Row;
