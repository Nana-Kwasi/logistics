import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import { authUser } from '../Redux/actions';
import {useDispatch} from 'react-redux';
import './Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async(e) => {
    e.preventDefault();
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('signed in successfully');
    navigate('/home',{replace: true});
    dispatch(authUser(true));
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };




  return (
    <div>
      <div id='login-image'>
        <img src='borderpolar-photographer-AMXFr97d00c-unsplash.jpg' />
      </div>

      <div className='login-text'>
        <h5>FRANCIS LOGISTICS COMPANY</h5>
        <span>Welcome to Francis Logistics Company</span>
      </div>
      
        <form className='forms' onSubmit={handleSignIn}>
          
          <input id='forms-input' type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />

          <br/>

          <input id='forms-input' type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password} />

          <br/>

        <button id='forms-button' variant="primary" type="submit">  SignIn  </button>

        <br/><br/><br/>

        <span className='forms-span'>Signup if you don't have an account</span>
        
        <br/>

        <button id='forms-button-two' onClick={()=>{navigate('/SignUp')}} variant="primary" type="submit">  SignUp </button>
    </form>

    </div>
  );
};

export default Login;