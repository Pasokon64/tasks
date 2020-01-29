import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

function Login () {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ redirect, setRedirect ] = useState(false);

    async function login() {
        
        const response = await api.post('/user/auth/', {
            email,
            password
        })
        .catch(err => {
            return console.log(err.response.data.error);
        });

        if (response) {
            
            localStorage.setItem('token', response.data.token);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Redirect to="/"/>
    }

    return (
        <>
            <h1>Login</h1>
            <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/><br/>
            <input onChange={e => setPassword(e.target.value)} type="text" placeholder="Senha"/><br/>
            <button onClick={login}>Login</button>
        </>
    );
}

export default Login;