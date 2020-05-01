/** @flow */
import React from 'react';
import { View } from 'react-native';

type Props = {
  size: number
};

const Spacer = ({ size }: Props): React$Node => (<View style={{ height: size, width: size }} />);

export default Spacer;
