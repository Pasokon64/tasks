import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Application from './components/application';
import Login from './components/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Application/>} />
            <Route exact path="/login" component={() => <Login/>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;