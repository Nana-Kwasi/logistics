import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import { authUser } from '../Redux/actions';
import './Signup.css';

function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async(e) => {
    e.preventDefault();
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('signed up successfully');
    navigate('/home',{replace: true});
    dispatch(authUser(true));
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  };




  return (
    <div id='signup'>

      <div id='login-image'>
        <img src='newcroptwotwo.jpg' />
      </div>
      
        <form className='forms' onSubmit={handleSignUp}>

          <input id='forms-input'
          type="text" placeholder="Enter first name" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} />
          <br/>

          <input id='forms-input'
          type="text" placeholder="Enter last name" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} />

          <br/>

          <input id='forms-input'
          type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
          <br/>

          <input id='forms-input'
          type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
          <br/>

        <button id='signup-button-two' variant="primary" type="submit">Submit</button>
    </form>

    </div>
  );
};

export default SignUp;