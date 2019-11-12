import React from 'react';
import {View, Text} from 'react-native';
import TransferForm from '../../containers/TransferForm';
import HeaderTitle from '../../components/HeaderTitle';
import InternetIndicator from '../../components/InternetIndicator';
import {Container, Title} from './styled';

function TransferScreen(props) {
  return (
    <Container>
      <TransferForm />
    </Container>
  );
}

TransferScreen.navigationOptions = () => ({
  title: 'BCAmobile',
  headerTitle: <HeaderTitle>BCAmobile</HeaderTitle>,
  headerRight: <InternetIndicator />,
});

export default TransferScreen;
