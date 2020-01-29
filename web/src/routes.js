import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated, authenticate } from './services/auth';

import Application from './components/application';
import Login from './components/login';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => 
        isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
        )
    } />
);

const Routes = () => {

    const [ authenticated, setAuthenticated ] = useState(false);

    async function auth() {
        await authenticate();
        setAuthenticated(true);
    }

    auth();

    if (!authenticated) {
        return <h1>Loading</h1>
    } 

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={() => <Application/>} />
                <Route exact path="/login" component={() => <Login/>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;