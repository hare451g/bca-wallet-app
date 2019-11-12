import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../../screens/HomeScreen';
import WalletScreen from '../../screens/WalletScreen';
import TransferScreen from '../../screens/TransferScreen';
import {StoreProvider} from 'easy-peasy';
import store from '../../store';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Wallet: {screen: WalletScreen},
    TransferScreen: {screen: TransferScreen},
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <StoreProvider store={store}>
      <AppContainer />
    </StoreProvider>
  );
}

export default App;
