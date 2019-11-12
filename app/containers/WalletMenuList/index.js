import React, {useEffect} from 'react';
import {SectionList} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListItem from '../../components/ListItem';
import PinAuthModal from '../PinAuthModal';
import useToggle from '../../hooks/useToggle';
import account from '../../configs/account';

import {publicMenu, privateMenu} from './constants';

import {
  WalletSettingContainer,
  SectionHeader,
  SectionHeaderTitle,
  MenuButtonIcon,
  Header,
  HeaderText,
} from './styled';
import useNavigation from '../../hooks/useNavigation';

function WalletMenuList(props) {
  const {navigation} = props;
  const navigate = useNavigation(navigation);

  const {token, loading} = useStoreState(state => state.auth);
  const {submitLogin, resetState} = useStoreActions(actions => actions.auth);

  const [isPinVisible, togglePinVisible] = useToggle(false);

  // handle list item pressed
  const handleListItemPress = value => {
    switch (value) {
      case 'activate_wallet':
        togglePinVisible();
        break;
      case 'transfer_wallet':
        navigate('TransferScreen');
        break;
    }
  };

  // handle pin auth to obtain token
  const handleSubmitButton = pin => {
    submitLogin({
      pin,
      accountNumber: account.number,
    });
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
        <PinAuthModal
          isOpen={isPinVisible}
          onSubmit={handleSubmitButton}
          loading={loading}
          toggleModal={togglePinVisible}
        />
      )}
    </WalletSettingContainer>
  );
}

export default WalletMenuList;
