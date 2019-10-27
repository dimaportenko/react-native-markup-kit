import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const Row = props => (
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

Row.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Row;
