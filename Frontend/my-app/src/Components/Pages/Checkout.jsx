import React from 'react';
import CheckoutContainer from '../Layout/CheckoutContainer';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function Checkout(props) {
    return (
        <>
           <Navbar/>
           <CheckoutContainer/>
           <Footer/>
        </>
    );
}

export default Checkout;