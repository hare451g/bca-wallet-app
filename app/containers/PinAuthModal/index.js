import React, {useCallback, useEffect} from 'react';
import {Modal, View, Text} from 'react-native';

import {useStoreState, useStoreActions} from 'easy-peasy';

import {
  ModalContainer,
  ModalButton,
  ModalButtonLabel,
  ModalButtonContainer,
  ModalTitle,
  ModalInput,
} from './styled';

import useInput from '../../hooks/useInput';

function PinAuthModal({isOpen = false, toggleModal}) {
  const {loading} = useStoreState(state => state.auth);
  const {submitLogin} = useStoreActions(actions => actions.auth);

  const [pin, setPin] = useInput(null);

  const handleSubmitButton = () => {
    submitLogin({
      pin,
      accountNumber: '9002418856235',
    });
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
              <ModalButton onPress={handleSubmitButton}>
                <ModalButtonLabel>Submit</ModalButtonLabel>
              </ModalButton>
            </ModalButtonContainer>
          </View>
        </ModalContainer>
      </Modal>
    </View>
  );
}

export default PinAuthModal;
