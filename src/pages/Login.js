import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

const Login = () => {
    const [email, setEmail] = useState('geraldohomero@email.com');
    const [password, setPassword] = useState('123456');

    return (
        <Container>
            <Body>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    left={<TextInput.Icon name="account" />}
                />
                <Input
                    label="Senha"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon name="key" />}
                />
                <Button 
                    icon="login" 
                    mode="contained"
                    onPress={() => console.log('Pressed')}>
                        LOGIN
                </Button>
            </Body>
        </Container>
    )
}

export default Login;