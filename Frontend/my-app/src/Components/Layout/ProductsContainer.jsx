import { Grid, makeStyles,Container} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import {makefetchProductsRequest} from '../../Redux/Product/action'



function ProductsContainer() {
    const {products} = useSelector(state=>state.products) 
    
   

   
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    products.map(product=>{
                        return <Product key={product._id}  {...product} />
                    })
                }
               
            </Grid>
        </Container>
    );
}

export default ProductsContainer;