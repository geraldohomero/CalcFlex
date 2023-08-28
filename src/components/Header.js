import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({title}) => {
    return (
    <Appbar.Header>
        <Appbar.Content title={title} subtitle="Etanol ou Gasolina?"/>
    </Appbar.Header>
    )
};

export default Header;