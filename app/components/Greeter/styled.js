import styled from 'styled-components';

import { colors } from '../../configs/themes';

const GreeterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 32px;

  background-color: ${colors.background};
`;

const GreeterContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const GreeterContent = styled.Text`
  font-size: 16;
  line-height: 22;
  margin-bottom: 16px;

  font-weight: 100;
  font-family: Lato;
  color: ${colors.textPrimary};
`;

const GreeterUserName = styled.Text`
  font-size: 20;
  line-height: 22;
  font-weight: bold;
  font-family: Lato;
  color: ${colors.textPrimary};

  margin-bottom: 8px;

`;

export {
  GreeterWrapper, GreeterContent, GreeterUserName, GreeterContentWrapper
};