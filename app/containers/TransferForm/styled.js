import styled from 'styled-components';

import {colors} from '../../configs/themes';

const Title = styled.Text`
  padding: 16px 12px;
  color: ${colors.textSecondary};
  font-size: 23;
  font-family: Lato;
  font-weight: bold;
`;

const Container = styled.View`
  margin: 12px 12px;
  background-color: #fff;
  border-radius: 8px;
`;

const FormContainer = styled.View`
  padding: 16px 8px;
`;

const TextInput = styled.TextInput`
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  height: 42px;
  min-width: 100%;
  font-size: 16;
`;

export {Title, Container, FormContainer, TextInput};
