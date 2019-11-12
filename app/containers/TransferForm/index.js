import React from 'react';
import {Text, Button} from 'react-native';
import useInput from '../../hooks/useInput';
import {Title, Container, TextInput, FormContainer} from './styled';

function TransferForm(props) {
  const [accountNumber, setAccountNumber] = useInput(null);
  const [bankCode, setBankCode] = useInput(null);
  return (
    <Container
      style={{
        shadowOpacity: '0.75',
        shadowRadius: '6px',
        shadowColor: '#fefefe',
        shadowOffset: '0px 0px',
      }}>
      <Title>Transfer Ke Rekening Lain</Title>
      <FormContainer>
        <Text>Kode Bank Tujuan</Text>
        <TextInput
          keyboardType="number-pad"
          maxLength={3}
          onChangeText={setBankCode}
          value={bankCode}
        />
      </FormContainer>
      <FormContainer>
        <Text>Nomor Rekening Tujuan</Text>
        <TextInput
          keyboardType="number-pad"
          maxLength={16}
          onChangeText={setAccountNumber}
          value={accountNumber}
        />
      </FormContainer>

      <FormContainer>
        <Text>Jumlah Nominal</Text>
        <TextInput
          keyboardType="number-pad"
          maxLength={16}
          onChangeText={setAccountNumber}
          value={accountNumber}
        />
      </FormContainer>

      <FormContainer>
        <Button title="Kirim" />
      </FormContainer>
    </Container>
  );
}

export default TransferForm;
