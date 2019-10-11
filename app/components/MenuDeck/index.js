import styled from 'styled-components';

import { colors } from '../../configs/themes';

const MenuDeck = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  background-color: ${colors.background};
`;

export default MenuDeck;