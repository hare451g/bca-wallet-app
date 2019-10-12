import React from 'react';

import MenuButton from '../../components/MenuButton';

import { Menu } from './constants';
import MenuDeckContainer from './styled';
import useNavigation from '../../hooks/useNavigation';

function MenuDeck({ navigation }) {
  const navigate = useNavigation(navigation);

  return (
    <MenuDeckContainer>
      {Menu.map(({ text, icon, screenName }) => (
        <MenuButton
          key={`menu-${icon}`}
          text={text}
          icon={icon}
          screenName={screenName}
          onPress={() => { navigate(screenName) }}
        />
      ))}
      <MenuButton none />
    </MenuDeckContainer>
  );
}

export default MenuDeck;