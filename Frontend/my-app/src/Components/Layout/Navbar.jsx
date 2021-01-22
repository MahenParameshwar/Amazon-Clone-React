import { Button, Container, withStyles } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {styles} from '../../Styles/navbar.js'
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

function Navbar(props) {
    const {classes} = props
    const {loggedUser} = useSelector(state=>state.login)
    const history = useHistory();
    const { noOfItems} = useSelector(state=>state.cart)
    
    
    
    return (
        <Container maxWidth={'xl'} className={classes.container}>
            <header className={classes.header}>
            <NavLink to="/">
                    <img style={{width:'100px',marginTop:'10px'}} src="/img/logo.png" alt=""/>
                    </NavLink>
                    <div className={classes.locationContainer}>
                        <span className={classes.miniText}>
                            Deleiver to
                        </span>
                        <div>
                            India
                        </div>
                        
                        <img  src="/img/location.png" alt=""/>
                        
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
                    
                            <div className={classes.signIn}>
                                <span className={classes.miniText} >
                                    Hello, {loggedUser.name}
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
                            <div onClick={()=>history.push("/cart")} className={classes.cart_container} style={{display:"flex"}}>
                                <img src="/img/cart.png"  alt=""/>
                                <div className={classes.total}>
                                    {noOfItems}
                                </div>
                            </div>
                        </div>
                    </div>
                  
                
            </header>
        </Container>
    );
}

export default withStyles(styles)(Navbar);