import styled from 'styled-components';

const ModalContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 80%;
  height: 180;

  margin: auto;

  background-color: rgba(58, 119, 192, 0.8);
  border-radius: 18;
`;

const ModalTitle = styled.Text`
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

const ModalInput = styled.TextInput`
  background-color: #ffffff;
  height: 42;
  margin: 8px 8px;
  text-align: center;
`;

const ModalButton = styled.TouchableHighlight`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  margin: 4px 8px;
  border-radius: 6;
  height: 42;
  width: 120;
`;

const ModalButtonLabel = styled.Text`
  font-weight: 700;
  font-size: 16;
`;

const ModalButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export {
  ModalContainer,
  ModalTitle,
  ModalInput,
  ModalButton,
  ModalButtonLabel,
  ModalButtonContainer,
}