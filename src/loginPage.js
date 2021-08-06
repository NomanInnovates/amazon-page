import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginPage.css';

const signIn = e => {
    e.preventDefault();
}
const register = e =>{
    e.preventDefault();
  
}

export default function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <Link to='/'>
            <img className="login_logo" 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="LoginPage_Sigin_btn" type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
               <div className='login_divider'> <span >New to Amazon?</span></div>
                <button onClick={register} className="login_registerButton">Create Your Amazon account</button>
        </div>
    )
}
