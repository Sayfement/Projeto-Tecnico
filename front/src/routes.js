import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import UserModel from './Model/UserModel';
import { isAuthenticated } from './Controller/auth'

import Home from './pages/home/index';
import User from './pages/User/index';
import Infos from './pages/Info/index';
import Register from './pages/Register/index';
//import NotFound from './pages/Notfound';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         isAuthenticated() ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         )
//     )} />
// )


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/user/:userEmail" component={User} />
                <Route path="/info" component={Infos} />
                <Route path="/register" component={Register} />
                <Route path="*" component={()=> <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}