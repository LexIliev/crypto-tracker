import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const { container, header } = styles;

const Header = () => (
  <View style={container}>
    <Text style={header}>Cryptocurrency App</Text>
  </View>
);

export default Header;
