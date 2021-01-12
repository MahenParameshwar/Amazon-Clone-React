import React, { useState } from 'react';
import '../../Styles/Login.css'
import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

       
    }

    const register = e => {
        e.preventDefault();

       
    }

    return (
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

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Button type='submit' onClick={signIn} className='login__signInButton'>Continue</Button>
                </form>

                <p>
                By creating an account, you agree to  Amazon's <span className="blue_bold"> Conditions of use  </span> and <span className="blue_bold"> Privacy notice </span>
                </p>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <h4>Dont Have an Account? <Link className="blue_bold" to="/register"> Sign up </Link> </h4>
                </div>
                
            </div>
        </div>
    )
}

export default Login
