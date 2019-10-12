import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';

import Greeter from '../../components/Greeter';
import HeaderTitle from '../../components/HeaderTitle';
import InternetIndicator from '../../components/InternetIndicator';
import ListItem from '../../components/ListItem';

function WalletScreen(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Greeter username={'Wallet !'} />
        <ListItem text="Activation" />
        <ListItem text="Wallet Address" />
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
