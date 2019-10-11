import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Header,
} from 'react-native';

import MenuButton from '../../components/MenuButton';
import Greeter from '../../components/Greeter';
import MenuDeck from '../../components/MenuDeck';

function HomeScreen(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Greeter username={'om rilham'} />
        <MenuDeck>
          <MenuButton text="m-Info" onPress={() => alert('hello')} />
          <MenuButton text="m-Transfer" onPress={() => alert('hello')} />
          <MenuButton text="m-Payment" onPress={() => alert('hello')} />
          <MenuButton text="m-Commerce" onPress={() => alert('hello')} />
          <MenuButton text="Setor Tarik" onPress={() => alert('hello')} />
          <MenuButton text="QR" onPress={() => alert('hello')} />
          <MenuButton text="m-Admin" onPress={() => alert('hello')} />
          <MenuButton text="Wallet" onPress={() => alert('hello')} />
        </MenuDeck>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
