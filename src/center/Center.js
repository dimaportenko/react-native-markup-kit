import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const Center = props => (
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

Center.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Center;
