import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { authUser } from '../Redux/actions';
import {useDispatch} from 'react-redux';
import './About.css';

function About() {

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
        <img src='warmtwo.jpg' />
      </div>

      <div className='nav'>
            <img src='images1.jpg' />
            <div>
            <button id='home-button-two' onClick={()=>{navigate('/Home')}}>Home</button>
            <button id='home-button-two' onClick={()=>{navigate('/Contact')}}>Contact</button>
            <button id='home-button-two' onClick={()=>{navigate('/About')}}>About</button>
            <button id='home-button-two' onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>

        <div className='main'>
          <h1>ABOUT US</h1>
        </div>

        <div className='text-one'>
          <p>
            FLC was incorporated in Ghana in 2012, in order to offer innovative technology
            and a professional staff that is dedicated, highly skilled, and keeps abreast with new developments.
            As a third-party logistics (3PL) company, we handle all outsourced logistic functions such as warehousing, 
            transportation, loading and unloading, door-to-door distribution, inventory management, packing and re-branding, 
            clearing and forwarding, as well as other services. 
          </p>
        </div>

        <div className='art'>
          <div id='numberone'>
            <img src='barrett-ward-5WQJ_ejZ7y8-unsplash.jpg'/>
            <h6>Freight and Loading</h6>
          </div>

          <div id='numberone'>
            <img src='timelab-pro-yx20mpDyr2I-unsplash.jpg'/>
            <h6>Flexible Storage Solutions</h6>
          </div>

          <div id='numberone'>
            <img src='ian-taylor-jOqJbvo1P9g-unsplash.jpg'/>
            <h6>Inventory Management Control</h6>
          </div>

        </div>

        <div className='text-one'>
          <p>
          <strong>What makes FLC stand out from other logistics companies?</strong> 
          <br/>
          FLC practices the highest logistics standards, and is equipped with
          a 8,000 m2 secured warehouse, with state of the art inventory management software, 
          headed by a professional team with the expertise to enable you to reduce operational costs, 
          and allow you to focus on your core business.
          </p>
        </div>

        <div className='art'>
          <div id='numberone'>
            <img src='marcin-jozwiak-kGoPcmpPT7c-unsplash.jpg'/>
            <h6>Packaging and Re-Branding</h6>
          </div>

          <div id='numberone'>
            <img src='teng-yuhong-qMehmIyaXvY-unsplash.jpg'/>
            <h6>Door to Door distribution</h6>
          </div>

          <div id='numberone'>
            <img src='rinson-chory-2vPGGOU-wLA-unsplash.jpg'/>
            <h6>Clearing annd Forwarding</h6>
          </div>

        </div>

        <div className='text-one'>
          <p>
          <strong>
          Over the years, Avni has established itself as the leading provider of physical logistics 
          services solutions in Ghana. This is due to the following key advantages of the company:
          </strong> 
          <br/>
          <hr/>
          We significantly cut operational running costs, by optimizing movement of inventory such as FIFO/LIFO, maintaining minimum/maximum levels of inventory, and close monitoring of valuable inventory.
          <hr/>
          We implement state of the art solutions that upgrade your level of security, and streamline your inventory management techniques.
          <hr/>
          Our extensive logistics capabilities enable us to cover the countries in which we operate in their entirety, and not only the local cities in which we are based.
          <hr/>
          We provide initial collection, packing, handling, bar-coding, inventory management, dispatch to the end clients and more.
          </p>
        </div>

        <div className='art'>
          <div id='numberone'>
            <img src='frank-mckenna-tjX_sniNzgQ-unsplash.jpg'/>
            <h6>Tracking and Tracing</h6>
          </div>

          <div id='numberone'>
            <img src='barrett-ward-5WQJ_ejZ7y8-unsplash.jpg'/>
            <h6>Transportation</h6>
          </div>

          <div id='numberone'>
            <img src='william-william-NndKt2kF1L4-unsplash.jpg'/>
            <h6>Customer Service</h6>
          </div>

        </div>


        
    </div>
  );
};

export default About;