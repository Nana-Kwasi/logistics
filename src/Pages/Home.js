import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import { authUser } from '../Redux/actions';
import './Home.css';
import Footertwo from '../Component/Footertwo';


function Home() {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async(e)=>{
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/',{replace: true});
    dispatch(authUser(false));
    }).catch((error) => {
      // An error happened.
    });
    };


  return (
    <div>
      <div id='home-image'>
        <img src='latestnext.jpg' />
      </div>

      <div className='nav'>
          <img src='images1.jpg' />
          <div>
          <button id='home-button-two' onClick={()=>{navigate('/Contact')}}>Contact</button>
          <button id='home-button-two' onClick={()=>{navigate('/About')}}>About</button>
          <button id='home-button-two' onClick={handleSignOut}>Sign Out</button>
          </div>
      </div>

      <div className='home-text'>
        <h1>Outsource Logistic Functions in Highest Standards</h1>
      </div>

      <Footertwo />


    </div>
  );
};


export default Home;