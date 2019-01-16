import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => {
  // out of curiosity
  const { container, header } = styles;

  return (
    <View style={container}>
      <Text style={header}>Cryptocurrency App</Text>
    </View>
  );
};

export default Header;
