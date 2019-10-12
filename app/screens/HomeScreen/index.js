import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';

import MenuDeck from '../../containers/MenuDeck';
import Greeter from '../../components/Greeter';
import HeaderTitle from '../../components/HeaderTitle';
import InternetIndicator from '../../components/InternetIndicator';

function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Greeter username={'Om Rilham'} />
        <MenuDeck navigation={navigation} />
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
