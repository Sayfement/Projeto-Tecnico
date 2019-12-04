import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/index';
import User from './pages/User/index';
import Infos from './pages/Info/index';
import Register from './pages/Register/index'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/user" component={User} />
                <Route path="/info" component={Infos} />
                <Route path="/register" component={Register} />
                
            </Switch>
        </BrowserRouter>
    )
}