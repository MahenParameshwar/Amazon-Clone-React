import React from 'react';
import {Grid, makeStyles} from "@material-ui/core"
import { theme } from '../../Styles/theme';


const useStyles = makeStyles(theme=>({
    orderCartInfo:{
        fontSize:"14px",
        "& > div":{
            margin:"5px 0"
        }
    }
}))
function CheckOutItems({company,photo,price,quantity,title}) {
    const classes = useStyles()
    return (
        <Grid style={{marginTop:"15px"}} container item lg={12} md={12} sm={12} xs={12}>
                                <Grid item style={{width:"100px"}}>
                                        <img style={{width:"100%"}} src={photo} alt=""/>
                                    </Grid>
                                    <Grid style={{paddingLeft:"10px"}} item lg={8} md={8} sm={8} xs={8}>
                                        <h4>
                                       {title}
                                    
                                        </h4>
                                        <div className={classes.orderCartInfo} >
                                            <div>
                                                By {company}
                                            </div>
                                            <div style={{color:"#B12704",fontWeight:"bold"}}>
                                            ₹ {price * quantity}
                                            </div>
                                            <div style={{color:"green"}}>
                                                In Stock
                                            </div>
                                            <div>
                                                <h4>Quantity : {quantity}</h4>
                                            </div>
                                        </div>
                                    
                                        <p style={{fontSize:"12px"}}>Sold by Amazon.com Services, Inc</p>
                                    </Grid>

                            </Grid>
    );
}

export default CheckOutItems;