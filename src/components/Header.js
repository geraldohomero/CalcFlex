import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({title, goBack, ...props }) => {
    return (
    <Appbar.Header>
        {
          goBack && 
          <Appbar.BackAction onPress={()=>goBack()}/> 
        }
        <Appbar.Content title={title} subtitle="Etanol ou Gasolina?"/>
        {props.children}
    </Appbar.Header>
    )
};

export default Header;