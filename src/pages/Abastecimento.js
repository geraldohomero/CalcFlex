import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, RadioButton, TextInput, Appbar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Input from '../components/Input';
import Header from './../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';
import {
    insertGastos,
    updateGastos,
    deleteGastos,
  } from '../services/GastosServicesDb';
const Abastecimento = ({route}) => {

    const navigation = useNavigation();
    const {item} = route.params ? route.params : {};

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [tipo, setTipo] = useState('gas');
    const [preco, setPreco] = useState('');
    const [valor, setValor] = useState('');
    const [odometro, setOdometro] = useState('');
    const [data, setData] = useState(moment(new Date).format('DD/MM/YYYY'));

    useEffect(() => {
        if(item){
            setTipo(item.tipo == 0 ? 'gas' : 'eta');
            setPreco(item.preco.toFixed(2));
            setValor(item.valor.toFixed(2));
            setOdometro(item.odometro.toFixed(0));
            setData(item.data);
        }
    }, [item]);


    const handleSave  = () => {
        if (item) {
          updateGastos({
            tipo: tipo == 'gas' ? 0 : 1,
            data: data,
            preco: preco,
            valor: valor,
            odometro: odometro,
            id: item.id
          }).then();
        } else {
          insertGastos({
            tipo: tipo == 'gas' ? 0 : 1,
            data: data,
            valor: valor,
            preco: preco,
            odometro: odometro
          }).then();
        }
    
        navigation.goBack(); //volta para a tela anterior
      };
    

      const handleDelete = () => {
        deleteGastos(item.id).then();
        navigation.goBack();
      };
    

    return (
        <Container>
            <Header
                title={'Abastecimento'} goBack={() => navigation.goBack()}>
                <Appbar.Action icon="content-save" onPress={handleSave} />
                {
                item && 
                <Appbar.Action icon="delete" onPress={handleDelete} />
                }
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

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onTouchCancel={() => setShow(false)}
                        onChange={(event, date) => {
                            setShow(false);
                            setData(moment(date).format('DD/MM/YYYY'));
                        }}

                    />
                )}
                <TouchableOpacity onPress={() => setShow(true)}>
                <Input
                    label="Data"
                    value={data}
                    left={<TextInput.Icon name="calendar" />}
                    editable={false}
                />
                </TouchableOpacity>
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
                    style={styles.button}
                    onPress={handleSave}>
                    Salvar
                </Button>
                
                {
                    item && 
                <Button 
                    icon="delete" 
                    mode="contained" 
                    color={'red'}
                    style={styles.button}
                    onPress={handleDelete}>
                    Excluir
                </Button>
                }


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