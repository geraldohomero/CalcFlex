import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

import Header from './../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
    );

const Gastos = () => {

    const renderItem = ({ item }) => (
          <List.Item style={styles.ListItem}
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} icon="folder" />}
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
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    ListItem: {
      color: '#fff',
    },
    item: {
      color: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color: 'white',
    },
  });

export default Gastos;