import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MenuButtonWrapper, MenuButtonText, MenuButtonIcon } from './styled';

function MenuButton({ text, icon, onPress, none }) {
  return (
    <MenuButtonWrapper>
      <MenuButtonIcon onPress={onPress} none={none}>
        <Icon name={icon} color="#ffffff" size={32} />
      </MenuButtonIcon>

      <MenuButtonText>{text}</MenuButtonText>
    </MenuButtonWrapper>
  );
}

export default MenuButton;