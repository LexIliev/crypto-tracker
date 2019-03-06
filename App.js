import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import TabNavigator from './src/config/routes';

export const App = () => (
  <Provider store={store}>
    <TabNavigator onNavigationStateChange={null} />
  </Provider>
);

export default App;
