import React, {useState} from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';

const Calculadora = () => {

  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  const handleCalc = () => {

    if(!gas || gas <= 0 || !eta || eta <= 0){
      Alert.alert('Erro!', 'Digite os valores corretamente');
    }else{
      let percentual = Math.round((eta / gas) * 100);
      if(percentual < 70){
        setRes(percentual + '% Recomenta-se o uso do ETANOL!');
      }else{
        setRes(percentual + '% Recomenta-se o uso da GASOLINA!');
      }
  }
}

  return (
    <Container>
      <Header title={'Calculadora Flex'}/>
        <Body>
          <Input
            label="Preço da Gasolina"
            value={gas}
            onChangeText={text => setGas(text)}
          />
          <Input
            label="Preço do Etanol"
            value={eta}
            onChangeText={text => setEta(text)}
          />
          <Button icon="gas-station" mode="contained" onPress={handleCalc}>
            Calcular
          </Button>
          <Text style={styles.text}>{res}</Text>
        </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  }
});

export default Calculadora;
