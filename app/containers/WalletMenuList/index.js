import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useStoreState} from 'easy-peasy';

import {SectionList} from 'react-native';

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
import {publicMenu, privateMenu} from './constants';

function WalletMenuList(props) {
  const {token} = useStoreState(state => state.auth);
  const [isPinVisible, togglePinVisible] = useToggle(false);

  const handleListItemPress = value => {
    if (value === 'activate_wallet') {
      togglePinVisible();
    }
  };

  // component did mount
  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  let data = publicMenu;
  if (token) {
    data = privateMenu;
  }

  return (
    <WalletSettingContainer>
      <Header>
        <MenuButtonIcon>
          <Icon name="wallet" color="#ffffff" size={32} />
        </MenuButtonIcon>
        <HeaderText>BCA Smart Wallet</HeaderText>
      </Header>
      <SectionList
        sections={[
          {
            title: '',
            data,
          },
        ]}
        renderItem={({item: {text, value}}) => (
          <ListItem text={text} value={value} onPress={handleListItemPress} />
        )}
        renderSectionHeader={({section}) => (
          <SectionHeader>
            <SectionHeaderTitle> {section.title} </SectionHeaderTitle>
          </SectionHeader>
        )}
        keyExtractor={(item, index) => `wallet-config-${index}`}
      />
      {!token && (
        <PinAuthModal isOpen={isPinVisible} toggleModal={togglePinVisible} />
      )}
    </WalletSettingContainer>
  );
}

export default WalletMenuList;
