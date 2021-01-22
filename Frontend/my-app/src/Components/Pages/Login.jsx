import React, { useState,useEffect } from 'react';
import '../../Styles/Login.css'
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import { loginErrorReset, makeLoginRequest } from '../../Redux/Login/action';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isAuth,error,message} = useSelector(state=>state.login) 
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    
    useEffect(()=>{
        if(error){
            setOpen(true)
            dispatch(loginErrorReset())
        }
    },[error])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const handleLogin = e => {
        e.preventDefault();
        console.log(email,password)
        dispatch(makeLoginRequest({
            email,
            password
        }))
        
       
    }

   

    return (
        isAuth ? <Redirect to="/" /> :
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={handleLogin}>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Button type='submit'  className='login__signInButton'>Continue</Button>
                </form>

                <p>
                By creating an account, you agree to  Amazon's <span className="blue_bold"> Conditions of use  </span> and <span className="blue_bold"> Privacy notice </span>
                </p>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <h4>Dont Have an Account? <Link className="blue_bold" to="/register"> Sign up </Link> </h4>
                </div>
                
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
        </div>
    )
}

export default Login
