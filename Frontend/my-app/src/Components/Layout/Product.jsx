import { Grid,Typography,makeStyles} from '@material-ui/core';
import React from 'react';
import Price from './Price';
import Rating from './Rating';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles(theme=>({
    item:{
        display:'flex',
        flexDirection:'column',
        cursor:"pointer",
        '@media (max-width: 600px)' : {
           flexDirection:'row',
          }
    },

    details:{
        flex:'1',
        marginTop:'20px',
        '& >div':{
            margin:'10px 20px 10px 0px'
        }
    }
}))

function Product({_id,title,photo,reviews,company,price}) {
    const history = useHistory()
    const classes = useStyles();
    const viewProduct = (_id)=>{
        history.push(`/viewProduct/${_id}`)
    }
    return (
        
            <Grid onClick={()=>viewProduct(_id)} className={classes.item} lg={4} md={6} sm={6} xs={12} item>
                    <div style={{width:'200px',height:'200px'}}>
                        <img style={{height:'100%'}} src={photo} alt=""/>
                    </div>
                    <div className={classes.details}>
                        <Typography variant="h2" >
                            {title}
                        </Typography>
                        <div className={classes.owner}>
                            by {company}
                        </div>
                        <div>
                            Ships to India
                        </div>
                        <Rating reviews={reviews} />
                       <Price price={price} color="black" /> 
                    </div>
                
                </Grid>
        
    );
}

export default Product;