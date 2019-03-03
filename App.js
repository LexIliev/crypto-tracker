import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header, CryptoContainer } from './src/components/';
import store from './src/store';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
