/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import HelloWorld from '../../components/HelloWorld';

function App(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HelloWorld>Hello world 💅</HelloWorld>
      </SafeAreaView>
    </>
  );
};

export default App;
