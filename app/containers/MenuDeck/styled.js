import styled from 'styled-components';

import { colors } from '../../configs/themes';

const MenuDeckContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  background-color: ${colors.background};
`;

export default MenuDeckContainer;