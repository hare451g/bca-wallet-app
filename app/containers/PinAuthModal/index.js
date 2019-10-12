import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';

import {
  ModalContainer,
  ModalButton,
  ModalButtonLabel,
  ModalButtonContainer,
  ModalTitle,
  ModalInput
} from './styled';

function PinAuthModal({ isOpen = false, toggleModal }) {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={toggleModal}>
        <ModalContainer>
          <View>
            <ModalTitle>Pin m-BCA:</ModalTitle>
            <ModalInput
              keyboardType="number-pad"
              maxLength={6}
              secureTextEntry
            />
            <ModalButtonContainer>
              <ModalButton onPress={toggleModal} >
                <ModalButtonLabel>Cancel</ModalButtonLabel>
              </ModalButton>
              <ModalButton onPress={toggleModal} >
                <ModalButtonLabel>Submit</ModalButtonLabel>
              </ModalButton>
            </ModalButtonContainer>
          </View>
        </ModalContainer>
      </Modal>
    </View>
  );
};

export default PinAuthModal;
