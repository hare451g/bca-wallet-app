import styled from 'styled-components';
import { colors } from '../../configs/themes';

const MenuButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  flex-basis: 33%;

  margin-bottom: 24px;

  border-radius: 12;
`;

const MenuButtonIcon = styled.TouchableOpacity`
  margin: 4px;
  height: ${props => props.height || 72};
  width: ${props => props.width || 72};
  background-color: ${colors.primary};
  color: ${colors.textPrimary};
  border-radius: 12;
`

const MenuButtonText = styled.Text`
  color: ${colors.textPrimary};
  font-size: 14;
  text-align: center;
`;

export { MenuButtonWrapper, MenuButtonIcon, MenuButtonText };