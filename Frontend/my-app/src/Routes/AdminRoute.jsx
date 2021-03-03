import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

function AdminRoute({Component,...rest}) {
    const token = localStorage.getItem('token')
    const {customer} = useSelector(state=>state.customer)
    return (
        
        customer?.isAdmin && token ? <Route {...rest} render={()=><Component/>} />  : <Redirect to = "/login" />
        
         
        
    );
}

export default AdminRoute;