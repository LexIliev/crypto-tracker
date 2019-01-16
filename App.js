import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './src/components/';
import store from './src/store';

import styles from './styles';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
        </View>
      </Provider>
    );
  }
}

export default App;
