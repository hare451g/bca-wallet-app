import React from 'react';

import { MenuButtonWrapper, MenuButtonText, MenuButtonIcon } from './styled';

function MenuButton({ text, onPress }) {
  return (
    <MenuButtonWrapper>
      <MenuButtonIcon onPress={onPress} />
      <MenuButtonText>{text}</MenuButtonText>
    </MenuButtonWrapper>
  );
}

export default MenuButton;