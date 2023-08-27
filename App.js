import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

const App = () => {

  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');

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
            onChangeText={text => setText(text)}
          />
            <TextInput
            style={styles.input}
            label="Preço do Etanol"
            value={eta}
            onChangeText={text => setEta(text)}
          />
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Calcular
          </Button>
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
  }
});

export default App;
