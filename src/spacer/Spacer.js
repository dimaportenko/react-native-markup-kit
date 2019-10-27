import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const Spacer = ({ size }) => (<View style={{ height: size, width: size }} />);

Spacer.propTypes = {
  size: PropTypes.number,
};

export default Spacer;
