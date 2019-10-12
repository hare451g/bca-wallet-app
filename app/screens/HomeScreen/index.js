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

function HomeScreen({ navigation }) {
  const changeScreen = (screenName) => alert(screenName);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Greeter username={'Om Rilham'} />
        <MenuDeck>
          <MenuButton text="m-Info" icon="money-bill-alt" />
          <MenuButton text="m-Transfer" icon="arrows-alt-h" />
          <MenuButton text="m-Payment" icon="cash-register" />
          <MenuButton text="m-Commerce" icon="shopping-cart" />
          <MenuButton text="Setor Tarik" icon="money-bill-wave" />
          <MenuButton text="QR" icon="qrcode" />
          <MenuButton text="m-Admin" icon="cogs" />
          <MenuButton text="Wallet" icon="wallet" />
          <MenuButton none />
        </MenuDeck>
      </SafeAreaView>
    </>
  );
};

HomeScreen.navigationOptions = () => ({
  title: 'BCAmobile',
  headerTitle: (<HeaderTitle>BCAmobile</HeaderTitle>),
  headerRight: (<InternetIndicator />),
});

export default HomeScreen;
