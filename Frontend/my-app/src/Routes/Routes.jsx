import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';

function Routes(props) {
    return (
        <Switch>
            <Route path="/login" exact render={()=><Login/>} />
            <Route path="/register" exact render={()=><Register/>} />
        </Switch>
    );
}

export default Routes;