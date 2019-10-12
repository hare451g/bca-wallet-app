import styled from 'styled-components';

const Indicator = styled.View`
  height: 18px;
  width: 18px;
  margin: 0px 16px;
  border-radius: 6px;
  background-color: ${props => props.isConnect ? '#2ED97A' : '#FF497A'};
`;

export { Indicator };