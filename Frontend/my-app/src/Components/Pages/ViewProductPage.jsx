import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Price from '../Layout/Price';
import Rating from '../Layout/Rating';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makefetchViewProductRequest } from '../../Redux/Product/action';
import { handleAddToCart } from '../../Redux/Cart/action';




const useStyles = makeStyles((theme)=>({
    description:{
        paddingTop:'30px',
        '& >div':{
            margin:'10px'
        }
    },
    description_text:{
        lineHeight:'1.5rem'
    },
    container:{
        
        padding:"50px 10px 10px 10px"
    },
    add_buy_container:{
        
        padding:"15px",
        borderRadius: "4px",
        boxShadow: "0 0 0 4px rgba(0, 0, 0, .1)",
        border: "1px #ddd solid",
        "& >div":{
            margin:'10px 0'
        }
        
    },
    buttonContainer:{
        position:'relative',
        '& >img':{
            position:'absolute',
            zIndex:'1',
            height:'55%',
            top:'12px',
            left:'5px'
        },
        '& >button':{
            width:'100%',
            height:'40px',
            margin:'5px 0px'
        }
    },
    root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
      label:{
          "& >span":{
              fontWeight:'bold',
              fontSize:"14px"
          }
      },
      margin: {
        margin: theme.spacing(1),
      },
}))

function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }


  function findQuantity(cart,_id) {
      const item = cart.find(item=>item._id === _id)
    if(item){
        return item.quantity
    }
    return 0

  }

function ViewProductPage(props) {
    
    const classes = useStyles();
    const {viewProduct,isLoading} = useSelector(state=>state.products)
    const {cart} = useSelector(state=>state.cart)
    const {customer} = useSelector(state=>state.customer)
    const {_id} = useParams();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(findQuantity(cart,_id));



  
    useEffect(()=>{
        
        dispatch(makefetchViewProductRequest(_id))
    },[])

    const updateCartQuantity = (quantity)=>{
        dispatch(handleAddToCart({product:viewProduct,cart,quantity}))
    }
    
    const addToCart = ()=>{
        const {_id : userId} = customer
        dispatch(handleAddToCart({product:viewProduct,cart,userId,quantity:quantity+1}))
        setQuantity(prev=>prev+1)
    }
    return (
        <>
        <Navbar />
        { isLoading ? <div>...Loading</div> :
        viewProduct ?
        <Grid  container>
            <Grid style={{minHeight:"497px",display:"flex",alignItems:"center"}} item lg={3} md={3} sm={12} xs={12}>
                <img style={{width:'100%'}} src={viewProduct.photo} alt=""/>
            </Grid >
            
            <Grid className={classes.description}  item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h1" component='div'>
                   {viewProduct.title}
                </Typography>
                <div>
                    by {viewProduct.company}
                </div>
                <div>
                <Rating reviews={viewProduct.reviews}/>
                </div>
                
               <Price price={viewProduct.price} color="#B12704" />
               <div>
                   Delivery by <span style={{fontWeight:'bold'}}>16th Jan,Monday</span>
               </div>
                <div className={classes.description_text}>
                    {viewProduct.description}
                </div>
            </Grid >
            <Grid className={classes.container} item lg={3} md={3} sm={12} xs={12}>
                <div className={classes.add_buy_container}>
                    
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <FormControlLabel className={classes.label}  control={<StyledRadio />} label="Buy Now" />
                        <div style={{color:"rgb(177, 39, 4)",fontSize:"20px",fontWeight:'bolder'}}>
                            ₹ {viewProduct.price}
                        </div>
                    </div>
                   {/* <Quantity updateCartQuantity={updateCartQuantity} /> */}
                   
                    
                    <div style={{color:'green',fontSize:'20px'}}>
                        In Stock
                    </div>
                    <div>
                        Ships from and sold by Amazon.com
                    </div>
                    <div className={classes.buttonContainer} >
                        <img src="/img/cartButton.png"  alt=""/>
                        <Button onClick={()=>addToCart()}>Add to Cart</Button>
                    </div>
                    <div className={classes.buttonContainer}>
                        <img src="/img/buyButton.png" alt=""/>
                        <Button >Buy Now</Button>
                    </div>
                    <div>
                        <span><img src="/img/secure.png" height="15px" alt=""/></span>
                        <span style={{marginLeft:'10px'}}>
                            Secure Transaction
                        </span>
                    </div>
                    <div>
                        This item ships to India Get it by Monday, Sep 23 - Monday, Sept. 30 Choose this date at checkout
                    </div>
                </div>
            </Grid >
        </Grid > : <></>
        }
        <Footer />
        </>
    );
}

export default ViewProductPage;