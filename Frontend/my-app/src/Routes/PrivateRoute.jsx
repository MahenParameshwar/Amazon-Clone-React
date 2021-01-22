import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
    const {isAuth} = useSelector(state=>state.login)
    return (
        
            isAuth ? <Route {...rest} render={()=><Component/>} />  : <Redirect to = "/login" />
        
         
        
    );
}

export default PrivateRoute;