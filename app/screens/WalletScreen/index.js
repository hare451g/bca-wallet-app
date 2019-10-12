import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';

import MenuButton from '../../components/MenuButton';
import Greeter from '../../components/Greeter';
import MenuDeck from '../../components/MenuDeck';
import HeaderTitle from '../../components/HeaderTitle';
import InternetIndicator from '../../components/InternetIndicator';

function WalletScreen({ navigation }) {
  const changeScreen = (screenName) => alert(screenName);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Greeter username={'Wallet !'} />
      </SafeAreaView>
    </>
  );
};

WalletScreen.navigationOptions = () => ({
  title: 'BCAmobile',
  headerTitle: (<HeaderTitle>BCAmobile</HeaderTitle>),
  headerRight: (<InternetIndicator />),
});

export default WalletScreen;
