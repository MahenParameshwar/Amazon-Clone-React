import { Button, Container, withStyles,Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {styles} from '../../Styles/navbar.js'
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeGetCustomerDataRequest } from '../../Redux/Customer/action.js';
import Popover from '@material-ui/core/Popover';



function Navbar(props) {

    const {classes} = props
    
    
    const {customer} = useSelector(state=>state.customer)
    const history = useHistory();
    const { noOfItems} = useSelector(state=>state.cart)
    const dispatch =   useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(()=>{
        const token =  localStorage.getItem('token')
        if(token){
        
        
          dispatch(makeGetCustomerDataRequest(token))
        
        }
       },[])
    
       useEffect(()=>{
           
       
       },[noOfItems])
    
    
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
                    <div className="searchBar" style={{flex:"1"}}>
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
                        <div  onClick={handleClick} className={classes.nav_tools}>
                    
                            <div className={classes.signIn}>
                                {
                                    customer ? <span className={classes.miniText} >
                                                Hello, {customer.name}
                                    </span> :  <span onClick={()=>history.push('/login')} className={classes.miniText} >
                                                Hello, Sign in
                                    </span>
                                }
                                
                                <div>
                                    Accounts & lists
                                </div>
                               
                            </div>
                            <div onClick={()=>history.push("/orders")}>
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
                  
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        >
                            <div className={classes.menu}>
                            <Button onClick={()=>{
                                history.push('/login')
                                localStorage.removeItem('token')}} >SignOut</Button>
                            </div>
                                    
                                </Popover>
            </header>
        </Container>
    );
}

export default withStyles(styles)(Navbar);