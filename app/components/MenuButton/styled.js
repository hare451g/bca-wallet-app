import styled from 'styled-components';
import { colors } from '../../configs/themes';

const MenuButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  flex-basis: 33%;

  margin-bottom: 42px;

  border-radius: 12;
`;

const MenuButtonIcon = styled.TouchableOpacity`
  color: ${colors.textPrimary};
  font-size: 24px;

  margin: 4px;
  margin-bottom: 8px;
  height: ${props => props.height || 72};
  width: ${props => props.width || 72};
  background-color: ${props => props.none ? colors.background : colors.primary};
  border-radius: 16;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const MenuButtonText = styled.Text`
  color: ${colors.textPrimary};
  font-size: 14;
  font-weight: 300;
  font-family: Lato;
  text-align: center;
`;

export { MenuButtonWrapper, MenuButtonIcon, MenuButtonText };