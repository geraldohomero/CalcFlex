import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import Header from './../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

    const navigation = useNavigation();
    const [tipo, setTipo] = useState('gas');

    return (
        <Container>
            <Header
                title={'Abastecimento'}
                goBack={() => navigation.goBack()}
            />
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
});


export default Abastecimento;