import React, {useState} from 'react';
import { View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

const App = () => {

  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Calculadora Flex" subtitle="Etanol ou Gasolina?"/>
      </Appbar.Header>
      <TextInput
        label="Preço da Gasolina"
        value={gas}
        onChangeText={text => setText(text)}
      />
        <TextInput
        label="Preço do Etanol"
        value={eta}
        onChangeText={text => setEta(text)}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Calcular
      </Button>
  </>

  );
}

export default App;
