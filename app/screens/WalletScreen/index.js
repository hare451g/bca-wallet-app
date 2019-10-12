import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';

import HeaderTitle from '../../components/HeaderTitle';
import InternetIndicator from '../../components/InternetIndicator';
import WalletMenuList from '../../containers/WalletMenuList';


function WalletScreen(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WalletMenuList />
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
