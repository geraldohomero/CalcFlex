import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';

const App = () => {

  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  return (
    <Container>
      <Header title={'Calculadora Flex'}/>
        <Body>
          <TextInput
            style={styles.input}
            label="Preço da Gasolina"
            value={gas}
            onChangeText={text => setGas(text)}
          />
            <TextInput
            style={styles.input}
            label="Preço do Etanol"
            value={eta}
            onChangeText={text => setEta(text)}
          />
          <Button icon="gas-station" mode="contained" onPress={() => console.log('Pressed')}>
            Calcular
          </Button>
          <Text style={styles.text}>Resultado: {res}</Text>
        </Body>
  </Container>

  );
}

const styles = StyleSheet.create({
  body: {
    margin: 10,
  },
  input: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  }
});

export default App;
