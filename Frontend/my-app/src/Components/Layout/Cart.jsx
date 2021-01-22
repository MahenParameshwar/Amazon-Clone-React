import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Quantity from './Quantity';
import {makeStyles} from '@material-ui/core'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme=>({

    cartContainer:{
        '& .cartItem':{
            display:'none'
        }
    },
    price:{
        color:"#B12704",
        fontWeight:'bold'
    },
    subTotal:{
        borderTop:'1px solid #c4c4c4',
        paddingTop:'20px'
    },
    checkOutContainer:{
      
        padding:'0px 10px 10px 10px'
    },
    checkOut:{
        padding:"5px 15px 15px 15px",
        borderRadius: "4px",
        boxShadow: "0 0 0 4px rgba(0, 0, 0, .1)",
        border: "1px #ddd solid",
        "& >div":{
            margin:'10px 0'
        }
    }
}))
function Cart(props) {
    const classes = useStyles();
    const { noOfItems,cart,amount} = useSelector(state=>state.cart)
    const history = useHistory()
    
    
    
    return (
        <div style={{padding:'20px',flex:1}}>
            <Grid container>
                <Grid container item lg={9} md={9} sm={12} xs={12}>
                    <h2 style={{marginBottom:'20px'}}>
                        Shopping Cart
                    </h2>
           
                    <Grid className={classes.cartContainer} container item lg={12} md={12} sm={12} xs={12}>
                      {
                          cart.map(product=><CartItem key={product._id} product={product} />)
                      }  
                        <Grid className={classes.subTotal} style={{display:'flex',justifyContent:'flex-end',marginBottom:"20px"}} item lg={12} md={12} sm={12} xs={12}>
                            <div>
                                Subtotal ({noOfItems} items) <span className={classes.price}> ₹ {amount} </span>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid className={classes.checkOutContainer} item lg={3} md={3} sm={12} xs={12}>
                    <div className={classes.checkOut}>
                        <div>
                            Subtotal ({noOfItems} items) <span className={classes.price}> ₹ {amount} </span>
                        </div>
                        <div>
                            <input type="checkbox" name="" id=""/>
                            <label style={{marginLeft:'10px'}} htmlFor="">This order contains a gift</label>
                        </div>
                        <Button onClick={()=>history.push("/checkout")} style={{width:"100%",height:'auto'}}>
                            Proceed to Checkout
                        </Button>
                    </div>
                </Grid>
            </Grid>
           
               
                
           
        </div>
    );
}

export default Cart;