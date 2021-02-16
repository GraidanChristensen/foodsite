import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Dice from './components/Dice/Dice';
export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/dice' component={Dice}/>
    </Switch>
)