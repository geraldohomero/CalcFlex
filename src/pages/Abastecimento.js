import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, RadioButton, TextInput, Appbar } from 'react-native-paper';
import Input from '../components/Input';
import Header from './../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

    const navigation = useNavigation();
    const [tipo, setTipo] = useState('gas');
    const [preco, setPreco] = useState('');
    const [valor, setValor] = useState('');
    const [odometro, setOdometro] = useState('');
    const [data, setData] = useState('');

    const handleSave = () => {
        console.log('Salvando...');
    }

    const handleDelete = () => {
        console.log('Deletando...');
    }

    return (
        <Container>
            <Header
                title={'Abastecimento'} goBack={() => navigation.goBack()}>
                <Appbar.Action icon="content-save" onPress={handleSave} />
                <Appbar.Action icon="delete" onPress={handleDelete} />
                </Header>
            <Body>
                <View style={styles.containerRadio}>
                    <View style={styles.containerRadioItem}>
                        <RadioButton
                            value="first"
                            status={tipo === 'gas' ? 'checked' : 'unchecked'}
                            color={'red'}
                            onPress={() => setTipo('gas')}
                        />
                        <Text>Gasolina</Text>
                    </View>
                    <View style={styles.containerRadioItem}>
                        <RadioButton
                            value="first"
                            status={tipo === 'eta' ? 'checked' : 'unchecked'}
                            color={'green'}
                            onPress={() => setTipo('eta')}
                        />
                        <Text>Etanol</Text>
                    </View>
                </View>

                <Input
                    label="Data"
                    value={data}
                    onChangeText={text => setData(text)}
                    left={<TextInput.Icon name="calendar" />}
                />
                <Input
                    label="Preço"
                    value={preco}
                    onChangeText={text => setPreco(text)}
                    left={<TextInput.Icon name="currency-brl" />}
                />
                <Input
                    label="Valor"
                    value={valor}
                    onChangeText={text => setValor(text)}
                    left={<TextInput.Icon name="currency-brl" />}
                />
                <Input
                    label="Odomêtro"
                    value={odometro}
                    onChangeText={text => setOdometro(text)}
                    left={<TextInput.Icon name="speedometer" />}
                />  
                <Button 
                    icon="content-save" 
                    mode="contained" 
                    color={'green'}
                    style={styles.button}
                    onPress={handleSave}>
                    Salvar
                </Button>
                <Button 
                    icon="delete" 
                    mode="contained" 
                    color={'red'}
                    style={styles.button}
                    onPress={handleDelete}>
                    Excluir
                </Button>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    containerRadio: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    containerRadioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    button: {
        marginBottom: 8,
    }
});


export default Abastecimento;