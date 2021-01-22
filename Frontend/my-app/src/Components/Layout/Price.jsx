import React from 'react';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    fullfiled:{
        backgroundColor:"#3e4650",
        color:'white',
        fontSize:'12px',
        width:'80px',
        padding:'2px',
        marginLeft:'10px'

    },
    small:{
        fontSize:'14px',
        position:'absolute'
    },
    price:{
        fontSize:'25px',
        margin:'0px 3px',
        marginLeft:'15px',
        
    },
    owner:{
        fontSize:'14px',
        color:"grey"
    },
    priceContainer:{
        position:'relative',
        marginRight:'10px',
        color: props => props.color,
    },
    details_bottom:{
        display:'flex',
        alignItems:'center',
        '@media (max-width: 600px)':{
            flexDirection:'column',
            alignItems:"flex-start",
            "& >div":{
                margin:'5px 0px'
            }
        }
    }
}))
function Price(props) {
    const classes = useStyles(props)
    const {price} = props
    return (
        <div className={classes.details_bottom} >
        <div className={classes.priceContainer}>
            <span className={classes.small}>₹</span>
            <span className={classes.price}>{price}</span> 
            <span className={classes.small}>00</span>
        </div>
        <div className={classes.fullfiled}>
            <img style={{width:'14px',marginRight:'7px'}} src="/img/Amazon-A-logo.png" alt=""/>
                <span >Fullfiled</span>
            </div>
        <div style={{fontSize:'14px',marginLeft:'5px',fontWeight:'bold'}}>FREE DELIVERY</div>
        </div>
    );
}

export default Price;