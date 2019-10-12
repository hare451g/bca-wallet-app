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

function HomeScreen({ navigation }) {
  const changeScreen = (screenName) => navigation.navigate(screenName);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Greeter username={'Om Rilham'} />
        <MenuDeck>
          <MenuButton text="m-Info" onPress={() => changeScreen('info')} />
          <MenuButton text="m-Transfer" onPress={() => changeScreen('info')} />
          <MenuButton text="m-Payment" onPress={() => changeScreen('info')} />
          <MenuButton text="m-Commerce" onPress={() => changeScreen('info')} />
          <MenuButton text="Setor Tarik" onPress={() => changeScreen('info')} />
          <MenuButton text="QR" onPress={() => changeScreen('info')} />
          <MenuButton text="m-Admin" onPress={() => changeScreen('Home')} />
          <MenuButton text="Wallet" onPress={() => changeScreen('Wallet')} />
        </MenuDeck>
      </SafeAreaView>
    </>
  );
};

HomeScreen.navigationOptions = () => ({
  title: 'BCAmobile',
  headerTitle: <HeaderTitle>BCAmobile</HeaderTitle>
});

export default HomeScreen;
