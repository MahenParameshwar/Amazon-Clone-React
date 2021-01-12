import { Button, Container, Input, withStyles } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    container:{
        height:'60px',
        backgroundColor:'#131921',
    },
    header:{
        display: "flex",
        height:'inherit',
        alignItems: "center",
    },
    input_search:{
        maxWidth:'735px',
        height:"35px",
        width:'100%',
        padding:0,
        border:'0',
        outline:'none',
        borderRadius:'3px',
        paddingLeft:'5px'
    },
    search_button:{
        position:'absolute',
        top:'0',
        right:'0',
        height:'35px',
        borderTopLeftRadius:'unset',
        borderBottomLeftRadius:'unset',
        border:'none'
    },
    searchForm:{
        width:'100%',position:'relative',maxWidth:'735px',
        
    },
    nav_tools:{
        color:'white',
        display:'flex',
        alignItems:'center',
        width:'300px',
        justifyContent:"space-between"
    },
    cart_container:{
        display:'flex',
        '& img':{
            height:'35px'
        },   
    },
    total:{
        color:'#f08804'
    },
    locationContainer:{
        color:'white',
        width:'160px',
        display:'flex',
        flexDirection:"column",
        position:'relative',
        alignItems:'center',
        
        '& img':{
            position:'absolute',
            left:'20px',
            top:'3px',
            height:'30px'
        }
    },
    miniText:{display:'inline-block',fontSize:'12px',fontWeight:'400'}
}
function Navbar(props) {
    const {classes} = props
    return (
        <Container maxWidth={'xl'} className={classes.container}>
            <header className={classes.header}>
                
                    <img style={{width:'100px',marginTop:'10px'}} src="/img/logo.png" alt=""/>
                    <div className={classes.locationContainer}>
                        <span className={classes.miniText}>
                            Deleiver to
                        </span>
                        <div>
                            India
                        </div>
                        <img src="/img/location.png" alt=""/>
                    </div>
                    <div style={{flex:"1"}}>
                        <form className={classes.searchForm} >
                        <input  className={classes.input_search} type="text"/>
                            <Button 
                            className={classes.search_button}
                            >
                           <SearchIcon/>     
                            </Button>
                        </form>
                    </div>
                    <div>
                        <div className={classes.nav_tools}>
                    
                            <div>
                                <span className={classes.miniText} >
                                    Hello, Sign in
                                </span> 
                                <div>
                                    Accounts & lists
                                </div>
                            </div>
                            <div>
                                <span className={classes.miniText}>
                                    Returns
                                </span>
                                <div>
                                    & Orders
                                </div>
                                
                            </div>
                            <div className={classes.cart_container} style={{display:"flex"}}>
                                <img src="/img/cart.png"  alt=""/>
                                <div className={classes.total}>
                                    8
                                </div>
                            </div>
                        </div>
                    </div>
                  
                
            </header>
        </Container>
    );
}

export default withStyles(styles)(Navbar);