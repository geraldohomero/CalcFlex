import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from './../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

const DATA = [
    {
      id: 1,
      tipo: 0,
      preco: 4.77,
      data: '01/02/2023',
      valor: 100,
      odometro: 22234,
    },
    {
      id: 2,
      tipo: 1,
      preco: 4.57,
      data: '23/02/2023',
      valor: 167,
      odometro: 22876,
    },
    {
      id: 3,
      tipo: 0,
      preco: 4.65,
      data: '26/04/2023',
      valor: 200,
      odometro: 23786,
    },
  ];

const Gastos = () => {

    const renderItem = ({ item }) => (
          <List.Item style={styles.ListItem}
              title={"R$ " + item.valor.toFixed(2) + " (R$" + item.preco.toFixed(2)+")"}
              description={item.odometro + " km"}
              left={props => <List.Icon {...props} color={ item.tipo == 0 ? 'red' : 'green'} icon="gas-station" />}
              right={props => <Text {...props} style={{alignSelf:'center'}} > {item.data}</Text>}
            />
      );

    return (
        <Container>
            <Header title={'Fuel Manager'}/>
            <Body>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    ListItem: {
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 2,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
  });

export default Gastos;