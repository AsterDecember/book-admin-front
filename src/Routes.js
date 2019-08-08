import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/auth/Login'
import Home from './components/Home'
const Routes = () => (

    <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/home' component={Home} />
        <Redirect to={{
            pathname: "/home",
            state: { from: 'NOT FOUND PAGE' },
        }} />
    </Switch>
);

export default Routes;
