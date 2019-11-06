import React from 'react';
import {Modal, View, Text} from 'react-native';

import {
  ModalContainer,
  ModalButton,
  ModalButtonLabel,
  ModalButtonContainer,
  ModalTitle,
  ModalInput,
} from './styled';

import useInput from '../../hooks/useInput';

function PinAuthModal({isOpen = false, toggleModal, loading, onSubmit}) {
  const [pin, setPin] = useInput(null);

  const handleSubmit = () => {
    onSubmit(pin);
  };

  if (loading) {
    return (
      <View>
        <Text>Loading . . . </Text>
      </View>
    );
  }

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
            {loading ? (
              <View>
                <Text>Loading . . . </Text>
              </View>
            ) : (
              <>
                <ModalInput
                  keyboardType="number-pad"
                  maxLength={6}
                  secureTextEntry
                  onChangeText={setPin}
                  value={pin}
                />
                <ModalButtonContainer>
                  <ModalButton onPress={toggleModal}>
                    <ModalButtonLabel>Cancel</ModalButtonLabel>
                  </ModalButton>
                  <ModalButton onPress={handleSubmit}>
                    <ModalButtonLabel>Submit</ModalButtonLabel>
                  </ModalButton>
                </ModalButtonContainer>
              </>
            )}
          </View>
        </ModalContainer>
      </Modal>
    </View>
  );
}

export default PinAuthModal;
