import styled from 'styled-components';
import { colors } from '../../configs/themes';

const HeaderTitleContainer = styled.Text`
  padding: 0px 12px;
  color: ${colors.primary};
  font-size: 18;
  font-family: Lato;
`;

const BCALogo = styled.Text`
  color: ${colors.primary};
  font-family: 'Lato';
  font-weight: 700;
  font-size: 24;
  font-style: italic;
`;

export { HeaderTitleContainer, BCALogo };