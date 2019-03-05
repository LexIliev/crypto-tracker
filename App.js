import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import StackNavigator from './src/config/routes';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator onNavigationStateChange={null} />
      </Provider>
    );
  }
}
