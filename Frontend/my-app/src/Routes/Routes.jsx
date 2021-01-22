import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CartPage from '../Components/Pages/CartPage';
import Login from '../Components/Pages/Login';

import Register from '../Components/Pages/Register';
import ViewProductPage from '../Components/Pages/ViewProductPage';

import Admin from '../Components/Pages/Admin';
import AddProduct from '../Components/Pages/AddProduct';
import AddCategory from '../Components/Pages/AddCategory';
import PrivateRoute from './PrivateRoute';
import Home from '../Components/Pages/Home';
import ContactPage from '../Components/Pages/ContactPage';
import Checkout from '../Components/Pages/Checkout';

function Routes(props) {
    return (
        <Switch>
            <Route path="/login" exact render={()=><Login/>} />
            <Route path="/register" exact render={()=><Register/>} />
            <Route path="/contact" exact render={()=><ContactPage/>} />
            <PrivateRoute path="/" exact Component={Home} />
            <PrivateRoute path="/admin" exact Component={Admin}/>
            <PrivateRoute path="/admin/addProduct" exact Component={AddProduct}/>
            <PrivateRoute path="/admin/addCategory" exact Component={AddCategory}/>
            <PrivateRoute path="/viewProduct/:_id" exact Component={ViewProductPage}/>
            <PrivateRoute path="/cart" exact Component={CartPage} />
            <PrivateRoute path="/checkout" exact Component={Checkout} />
        </Switch>
    );
}

export default Routes;