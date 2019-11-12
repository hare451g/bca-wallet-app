import styled from 'styled-components';

import {colors} from '../../configs/themes';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;
  width: 100%;
  background-color: ${colors.background};
`;

const Title = styled.Text`
  padding: 16px 12px;
  color: ${colors.textPrimary};
  font-size: 23;
  font-family: Lato;
  font-weight: bold;
`;

export {Container, Title};
