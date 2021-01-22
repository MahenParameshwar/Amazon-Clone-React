import React from 'react';
import Cart from '../Layout/Cart';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function CartPage(props) {
    return (
        <>
          <Navbar/>
            <Cart/>
          <Footer/>  
        </>
    );
}

export default CartPage;