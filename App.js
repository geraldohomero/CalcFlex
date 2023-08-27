import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

const App = () => {

  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Calculadora Flex" subtitle="Etanol ou Gasolina?"/>
      </Appbar.Header>
        <View style={styles.body}>      
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
          <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
            Calcular
          </Button>
          <Text style={styles.text}>Resultado: {gas}</Text>
        </View>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
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
