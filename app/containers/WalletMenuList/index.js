import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text, SectionList } from 'react-native';

import ListItem from '../../components/ListItem';

import {
  WalletSettingContainer,
  SectionHeader,
  SectionHeaderTitle,
  MenuButtonIcon,
  Header,
  HeaderText,
} from './styled';


function WalletMenuList(props) {
  return (
    <WalletSettingContainer>
      <Header>
        <MenuButtonIcon>
          <Icon name="wallet" color="#ffffff" size={32} />
        </MenuButtonIcon>
        <HeaderText>Wallet</HeaderText>
      </Header>
      <SectionList
        sections={[
          {
            title: 'Wallet Settings',
            data: ['Activation', 'Wallet Address']
          }
        ]}
        renderItem={({ item }) => <ListItem text={item} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader>
            <SectionHeaderTitle>
              {section.title}
            </SectionHeaderTitle>
          </SectionHeader>
        )}
        keyExtractor={(item, index) => `wallet-config-${index}`}
      />
    </WalletSettingContainer>
  );
}

export default WalletMenuList;