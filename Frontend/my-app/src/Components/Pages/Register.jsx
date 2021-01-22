import React, { useState,useEffect } from 'react';
import '../../Styles/Register.css'
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'
import { makeRegisterRequest, registerReset } from '../../Redux/Register/action';
import LoadingBar from 'react-redux-loading-bar'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Register() {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {success,error,isLoading,message} = useSelector(state=>state.register)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state=>state.login)
    const [severity,setSeverity] = useState("success")
    const handleRegister = (e)=>{
    
      e.preventDefault();
      dispatch(makeRegisterRequest({name,email,password}));
      setPassword('');
      setEmail('');
      setName('');
  }

  useEffect(()=>{
     
    if(isLoading){
        dispatch(showLoading())
    }
    else{
        dispatch(hideLoading())
    }
  },[isLoading])

  useEffect(()=>{
      if(success){
        setSeverity("success")
        setOpen(true)
        dispatch(registerReset())
      }
      else if(error){
        setSeverity("error")
        setOpen(true)
        dispatch(registerReset())
      }
  },[success,error])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
      isAuth ? <Redirect to="/" /> :
        <>
        <LoadingBar style={{backgroundColor:'#f0c14b'}} />
        <div className='register'>
            
            <Link to='/'>
                <img
                    className="register__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="logo"
                />
            </Link>

            <div className='register__container'>
                <h1>Create account</h1>

                <form onSubmit={handleRegister}>
                    <h5>Name</h5>
                    <input required type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input required type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input required type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Button type='submit'  className='register__signInButton'>Create your Amazon account</Button>
                </form>

                <p>
                By creating an account, you agree to <span className="blue_bold"> Amazon's Conditions </span> of use and <span className="blue_bold"> Privacy notice </span>
                </p>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <h4>Already Have an Account? <Link className="blue_bold" to="/login"> Sign in </Link> </h4>
                </div>
                
            </div>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
        </>
    )
}

export default Register
