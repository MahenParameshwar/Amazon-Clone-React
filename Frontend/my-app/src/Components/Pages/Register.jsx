import React, { useState } from 'react';
import '../../Styles/Register.css'
import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
  

    return (
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

                <form>
                    <h5>Your Name</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

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
    )
}

export default Register
