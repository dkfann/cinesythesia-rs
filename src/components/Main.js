import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import '../styles/Main.css';

const Main = () => (
    <div className="main">
        <div className="main-title">Cinesythesia</div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/test' component={Navigation} />
        </Switch>
    </div>
);

export default Main;