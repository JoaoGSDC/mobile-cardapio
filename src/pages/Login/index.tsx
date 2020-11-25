import React from 'react';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FieldContainer, LoginContainer, TitleContainer } from './styles';

function Login() {
    return (
        <>
            <LoginContainer>
                <FieldContainer>
                    <TitleContainer>Cardápio Mobile</TitleContainer>
                    <div>
                        <TextField label="Nome" type="text" variant="outlined" />
                        <TextField label="CPF" type="number" variant="outlined" />
                        <Link to="/cardapio"><button>Entrar</button></Link>
                    </div>
                </FieldContainer>
            </LoginContainer>
        </>
    );
}

export default Login;