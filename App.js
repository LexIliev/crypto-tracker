import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import TabNavigator from './src/config/routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator onNavigationStateChange={null} />
      </Provider>
    );
  }
}
