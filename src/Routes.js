import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Home from './components/Home'
const Routes = () => (

    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />

    </Switch>
);

export default Routes;