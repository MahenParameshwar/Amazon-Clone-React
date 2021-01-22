import { Button, Container, Grid, Typography, withStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makefetchProductsRequest } from '../../Redux/Product/action';
import StackGrid from "react-stack-grid";



const styles = {
   button:{
    borderRadius: "3px",
    borderColor: "#ADB1B8 #A2A6AC #8D9096",
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: "pointer",
    height: "22px",
    background: "linear-gradient(to bottom,#f7f8fa,#e7e9ec)",
    boxShadow: "0 1px 0 rgba(255,255,255,.6) inset",
    fontSize: "11px",
    lineHeight: "22px",
    padding: "0 6px 0 7px",
    color: "#111",
    margin:'0px 0px 0px 10px'
   }
}
function Admin(props) {
    const {classes} = props
    const history = useHistory();
    const dispatch = useDispatch();
    const {products} = useSelector(state=>state.products)
    console.log(products)
    useEffect(()=>{
        // dispatch(makefetchProductsRequest())
    },[])
    return (
        <main>
                <Container>
                    <Grid container>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Typography variant="h1">
                                All Products
                            </Typography>
            
                            <Button onClick={()=>history.push('/admin/addProduct')}>
                                Add a new Product
                            </Button>
                            <Button onClick={()=>history.push('/admin/addCategory')} className={classes.button}>
                                Add a new Category
                            </Button>
                        </Grid>
                    </Grid>
                    <StackGrid
                    gutterWidth='0'
                    >
      </StackGrid>

                </Container>
        </main>
    );
}

export default withStyles(styles)(Admin);