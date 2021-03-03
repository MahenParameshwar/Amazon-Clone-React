import { Grid, Container} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';




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