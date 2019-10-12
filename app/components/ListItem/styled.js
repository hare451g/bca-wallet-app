import styled from 'styled-components';
import { colors } from '../../configs/themes';

const ListItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 8px 16px;

  background-color: #ffffff;
`;

const ListItemText = styled.Text`
  font-size: 24;
  font-weight: 700;
  color: ${colors.primary}
`;

export { ListItemContainer, ListItemText };