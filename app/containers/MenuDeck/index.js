import React from 'react';

import MenuButton from '../../components/MenuButton';

import { Menu } from './constants';
import MenuDeckContainer from './styled';

function MenuDeck({ navigation }) {
  const changeScreen = (screenName) => {
    console.log(screenName);
    navigation.navigate(screenName);
  }
  return (
    <MenuDeckContainer>
      {Menu.map(({ text, icon, screenName }) => (
        <MenuButton
          key={`menu-${icon}`}
          text={text}
          icon={icon}
          screenName={screenName}
          onPress={() => { changeScreen(screenName) }}
        />
      ))}
      <MenuButton none />
    </MenuDeckContainer>
  );
}

export default MenuDeck;