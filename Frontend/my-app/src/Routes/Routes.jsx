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
import AdminRoute from './AdminRoute';
import Home from '../Components/Pages/Home';
import ContactPage from '../Components/Pages/ContactPage';
import Checkout from '../Components/Pages/Checkout';
import Order from '../Components/Pages/Order';

function Routes(props) {
    return (
        <Switch>
            <Route path="/login" exact render={()=><Login/>} />
            <Route path="/register" exact render={()=><Register/>} />
            <Route path="/contact" exact render={()=><ContactPage/>} />
            <PrivateRoute path="/" exact Component={Home} />
            <AdminRoute path="/admin" exact Component={Admin}/>
            <AdminRoute path="/admin/addProduct" exact Component={AddProduct}/>
            <AdminRoute path="/admin/addCategory" exact Component={AddCategory}/>
            <PrivateRoute path="/viewProduct/:_id" exact Component={ViewProductPage}/>
            <PrivateRoute path="/cart" exact Component={CartPage} />
            <PrivateRoute path="/checkout" exact Component={Checkout} />
            <PrivateRoute path="/orders" exact Component={Order} />
        </Switch>
    );
}

export default Routes;