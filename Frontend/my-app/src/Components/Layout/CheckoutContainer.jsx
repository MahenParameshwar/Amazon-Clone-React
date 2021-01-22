import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckOutItems from './CheckOutItems';


const useStyles = makeStyles(theme=>({
    border:{
        borderRadius: "4px",
        boxShadow: "0 0 0 4px rgba(0, 0, 0, .1)",
        border: "1px #ddd solid",
        padding:"20px",
        margin:"20px 0"
    },
    days:{
        color:"#007600",
        marginBottom:"5px"
    },
    addButton:{
        color:"#0066c0",
        fontSize:"14px"
    },
    headingTop:{
        display:"flex",
        alignItems:"center"
    },
    radio:{
        marginRight:"10px"
    },
    radioContainer:{
        display:"flex",
        marginTop:"10px"
    },
    billingInfo:{
        display:"flex",
        justifyContent:"space-between",
        fontSize:"14px",
       
    },
    total:{
        display:"flex",
        justifyContent:"space-between",
        color:"#B12704",
        marginTop:"30px"
    },
   
    
}))

function CheckoutContainer(props) {
    const classes = useStyles();
    const { cart,amount} = useSelector(state=>state.cart)
    const [days,setDays] = useState(7)
    const [shipCharge,setShipCharge] = useState(100)
    console.log(shipCharge)
    const handleChange = (e)=>{
       
        if(e.target.value === "7"){
        setDays(7)
        setShipCharge(100) 
        }
        else
        if(e.target.value === "3"){
        
            
                setDays(3)
                setShipCharge(500) 
                   
        }
        
    }

    return (
        <div style={{padding:'20px',flex:1}}>
            <Typography variant="h3">
                Review your order
            </Typography>
            <Grid container spacing={5}>
                <Grid container item lg={9} md={9} sm={12} xs={12}>
                    <Grid  className={classes.border} item container lg={12} md={12} sm={12} xs={12}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <div className={classes.headingTop} >
                                <Typography variant="h5">
                                    Shipping Address
                                </Typography>
                                <div className={classes.addButton}>
                                            Change
                                </div>
                            </div>
                            <div style={{fontSize:"14px"}}>
                                <p>#26,PMN Cross</p>
                                <p>Bellandur</p>
                                <p>Bangalore</p>
                                <p>Karnataka</p>
                                <p>India</p>
                            </div>
                            
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <div>
                                <div className={classes.headingTop} >
                                        <Typography variant="h5">
                                            Payment Method
                                        </Typography>
                                        <div className={classes.addButton}>
                                            Change
                                        </div>
                                </div>
                                <div style={{display:'flex',alignItems:"center"}}>
                                    <div><img src="./img/visa.gif"  alt=""/></div>
                                    <div style={{marginLeft:"10px"}}>
                                        ending in 6397
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className={classes.headingTop} >
                                    
                                        <Typography variant="h5">
                                         Billing Address
                                        </Typography>
                                        <div className={classes.addButton}>
                                            Change
                                        </div>
                                </div>
                                <div>
                                   same as shipping address
                                </div>
                            </div>
                        </Grid>
                        <Grid  item lg={4} md={4} sm={12} xs={12}>
                                <Typography variant="h5">
                                Gift cards & promotional codes
                                </Typography>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <TextField size="small" variant="outlined" placeholder="Enter Code"/>
                                    <Button style={{marginLeft:"10px"}}>
                                        Apply
                                    </Button>
                                </div>
                        </Grid>
                    </Grid>
                    <Grid className={classes.border} item container lg={12} md={12} sm={12} xs={12}>
                        <Grid  container item lg={12} md={12} sm={12} xs={12}>
                                <h3 style={{color:"rgb(196, 85, 0)",marginBottom:"10px"}} >
                                Estimated delivery: {new Date((new Date()).getTime() + 86400000 * days).toDateString()}

                                </h3>
                        </Grid >
                        <Grid spacing={4}   container item lg={6} md={6} sm={12} xs={12}>
                            {
                                cart.map(product=> <CheckOutItems {...product} key={product._id} />)
                            }
                            
                            
                     
                               
                        </Grid >
                        <Grid style={{flexDirection:"column"}} container item lg={6} md={6} sm={12} xs={12}>
                            
                            <Typography style={{marginTop:'20px'}} variant='h5'>
                                Choose a deliver option
                            </Typography>
                           
                            <div>
                                <div className={classes.radioContainer}>
                                    <input  className={classes.radio}  onChange={(e)=>handleChange(e)} type="radio"  name="days" value={7} />
                                    <label >
                                        <div>
                                            <h4 className={classes.days}>
                                                Average 7 business days
                                            </h4>
                                            <p>₹ 100 - Standard shipping charges</p>    
                                        </div>
                                    
                                    </label>
                                </div>
                                <div className={classes.radioContainer}>
                                    <input  className={classes.radio} type="radio" onChange={(e)=>handleChange(e)}  name="days" value={3}/>
                                    <label >
                                    <div>
                                            <h4 className={classes.days}>
                                                Averages 3 business days
                                            </h4>
                                            <p>₹ 500 - Shipping</p>    
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </Grid >
                    </Grid>

                </Grid>
                <Grid  className={classes.border} container item lg={3} md={3} sm={12} xs={12}>
                    <div>
                        <Button style={{width:"100%"}}>
                            Place your Order
                        </Button>
                        <div style={{fontSize:"12px",textAlign:"center",margin:"10px 0px"}}>
                        By placing your order, you agree to Amazon's privacy notice and conditions of use.
                        </div>
                        <div>
                            <div style={{marginBottom:"10px"}}>
                                Order Summary
                            </div>

                            <div>
                                <div className={classes.billingInfo} >
                                    <div>Items</div>
                                    <div>₹ {amount}</div>
                                </div>
                                <div className={classes.billingInfo}>
                                    <div>Shipping and handelling</div>
                                    <div>₹ {shipCharge}</div>
                                </div>
                            </div>

                            <div style={{marginTop:"40px"}}>
                                <div className={classes.billingInfo} >
                                        <div>Total Before Tax</div>
                                        <div>₹  ₹ {amount + shipCharge}</div>
                                    </div>
                                    <div className={classes.billingInfo}>
                                        <div>Estimated Tax to be collected</div>
                                        <div>₹ 0</div>
                                    </div>
                                </div>
                            
                            <div className={classes.total}>
                                <h3>
                                    Order Total
                                </h3>
                                <h3>
                                ₹ {amount + shipCharge}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default CheckoutContainer;