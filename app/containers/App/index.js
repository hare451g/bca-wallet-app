import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../../screens/HomeScreen';
import WalletScreen from '../../screens/WalletScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Wallet: { screen: WalletScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (<AppContainer />);
}

export default App;
