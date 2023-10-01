import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({title, goBack}) => {
    return (
    <Appbar.Header>
        {
          goBack && 
          <Appbar.BackAction onPress={()=>goBack()}/> 
        }
        <Appbar.Content title={title} subtitle="Etanol ou Gasolina?"/>
    </Appbar.Header>
    )
};

export default Header;