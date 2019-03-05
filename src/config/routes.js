import { createStackNavigator, createAppContainer } from 'react-navigation';
import { CryptoContainer, CoinDetailsContainer } from '../containers';

const StackNavigator = createStackNavigator({
  Home: { screen: CryptoContainer },
  Details: { screen: CoinDetailsContainer },
});

export default createAppContainer(StackNavigator);
