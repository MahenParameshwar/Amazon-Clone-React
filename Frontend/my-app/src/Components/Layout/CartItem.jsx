import { Grid } from '@material-ui/core';
import React from 'react';
import Quantity from './Quantity';
import {makeStyles} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { handleAddToCart, handleDeleteFromCart } from '../../Redux/Cart/action';

const useStyles = makeStyles(theme=>({
    fullfiled:{
        backgroundColor:"#3e4650",
        color:'white',
        fontSize:'12px',
        width:'80px',
        padding:'2px'

    },
    cartContainer:{
    
    },
    cartItem:{
        borderTop:'1px solid #c4c4c4',
        padding:'10px'
    },
    cartInfo:{
        '& >div':{
            margin:'8px 0'
        }
    },
    price:{
        color:"#B12704",
        fontWeight:'bold'
    }
}))
function CartItem({product}) {

    const dispatch = useDispatch()
    
   const {cart} = useSelector(state=>state.cart)
   const {customer} = useSelector(state=>state.customer)

    const updateCartQuantity = (quantity)=>{
        const {_id : userId} = customer
        dispatch(handleAddToCart({product,cart,quantity,userId}))
    }

    const handleDelete = ()=>{
        const {_id : userId} = customer
        dispatch(handleDeleteFromCart({id:product._id,cart,userId}))
    }

    const {quantity,price,title,company,photo} = product
    const classes = useStyles();
    return (
        <Grid className={classes.cartItem} item container lg={12} md={12} sm={12} xs={12} >
                        <Grid item lg={2} md={2} sm={2} xs={2}>
                        <img style={{width:'100%'}} src={photo} alt=""/>
                        </Grid>
                        <Grid className={classes.cartInfo}  item lg={8} md={8} sm={8} xs={8}>
                            <div>
                                <h2 style={{fontSize:'20px',color:'#0066c0',fontWeight:'500'}}>
                                    {title}
                                    <span style={{fontSize:'16px',color:'grey',fontWeight:'500'}}> By {company} </span>
                                </h2>
                            </div>
                            <div style={{color:'green'}}>
                                In stock
                            </div>
                            <div className={classes.fullfiled}>
                                <img style={{width:'14px',marginRight:'7px'}} src="/img/Amazon-A-logo.png" alt=""/>
                                    <span >Fullfiled</span>
                            </div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label style={{margin:'0px 10px'}} htmlFor="">This is a Gift</label>
                                <span style={{color:'#0066c0',fontSize:'14px'}}>Learn more</span>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <Quantity updateCartQuantity={updateCartQuantity} quantity={quantity} />
                                
                                <div style={{cursor:"pointer"}} onClick={handleDelete}>Delete</div>
                            </div>
                            
                        </Grid>
                        <Grid style={{display:'flex',justifyContent:'flex-end'}}  item lg={2} md={2} sm={2} xs={2}>
                            <div className={classes.price}> ₹ {quantity*price} </div>
                        </Grid>
                    </Grid>
    );
}

export default CartItem;