import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Home from './components/Home'
import ListBooks from './components/books/ListBooks';
import CreateBooks from './components/books/CreateBooks';
const Routes = () => (

    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/books' component={ListBooks} />
        <Route exact path='/newBooks' component={CreateBooks} />
    </Switch>
);

export default Routes;