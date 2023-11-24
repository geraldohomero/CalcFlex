import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/navigations/Main';
import Login from './src/pages/Login';

const App = () => {

  return (
    <NavigationContainer>
    <Login/>
    </NavigationContainer>
  )
}

export default App;
