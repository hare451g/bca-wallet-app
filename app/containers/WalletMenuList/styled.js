import styled from 'styled-components';
import { colors } from '../../configs/themes';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  justify-content: flex-start;
`;

const HeaderText = styled.Text`
  font-size: 24;
  font-weight: 700;
  padding: 0px 32px;
  color: ${colors.primary};
`;

const MenuButtonIcon = styled.View`
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
`;

const WalletSettingContainer = styled.View`
  background-color: ${colors.backgroundSecondary};
  height: 100%;
  padding: 0px 16px;
`;

const SectionHeader = styled.View`
  background-color: ${colors.backgroundSecondary};
`;

const SectionHeaderTitle = styled.Text`
  color: ${colors.primary};
  font-size: 18;
  font-weight: 700;
  padding: 8px 16px;
`;

export {
  Header,
  HeaderText,
  MenuButtonIcon,
  WalletSettingContainer,
  SectionHeader,
  SectionHeaderTitle,
};