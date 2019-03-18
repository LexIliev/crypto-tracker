import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import {
  CoinsListContainer,
  CoinDetailsContainer,
  AboutContainer,
} from '../containers';

// Home Screen Stack
const HomeStack = createStackNavigator({
  Home: { screen: CoinsListContainer },
  Details: { screen: CoinDetailsContainer },
});

// About Screen Stack
const AboutStack = createStackNavigator({
  About: { screen: AboutContainer },
});

// Bottom Tab Navigator
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'About') {
          iconName = 'ios-options';
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#009CB4',
      inactiveTintColor: '#c3c3c3',
      style: {
        backgroundColor: '#1B242F',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
