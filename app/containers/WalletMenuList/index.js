import React, { useState } from 'react';
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
import PinAuthModal from '../PinAuthModal';
import useToggle from '../../hooks/useToggle';


function WalletMenuList(props) {
  const [isPinVisible, togglePinVisible] = useToggle(false);

  const handleListItemPress = (value) => {
    if (value === 'activate_wallet') {
      togglePinVisible();
    }
  }

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
            data: [
              { text: 'Activation', value: 'activate_wallet' },
              { text: 'Wallet Address', value: 'show_wallet' },
            ]
          }
        ]}
        renderItem={({ item: { text, value } }) => (
          <ListItem text={text} value={value} onPress={handleListItemPress} />
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader>
            <SectionHeaderTitle> {section.title} </SectionHeaderTitle>
          </SectionHeader>
        )}
        keyExtractor={(item, index) => `wallet-config-${index}`}
      />
      <PinAuthModal
        isOpen={isPinVisible} toggleModal={togglePinVisible}
      />
    </WalletSettingContainer>
  );
}

export default WalletMenuList;