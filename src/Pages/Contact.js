import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { authUser } from '../Redux/actions';
import {useDispatch} from 'react-redux';
import './Contact.css';
import Footer from '../Component/Footer';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8 } from "react-icons/ri";

function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  console.log(firstName);
    console.log(lastName);
    console.log(companyName);
    console.log(phone);
    console.log(country);
    console.log(email);
    console.log(textArea);

    const handleSubmit = (e) => {
      e.preventDefault();
    }




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
        <div id='contact-image'>
          <img src='contactchecktwo.jpg' />
        </div>
  
        <div className='nav'>
            <img src='images1.jpg' />
            <div>
            <button id='home-button-two' onClick={()=>{navigate('/About')}}>About</button>
            <button id='home-button-two' onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
  
        <div className='inquiries'>
          <h6>
          For any inquiries or questions please contact in the following ways:
          <br /><br />
          P.O. Box AC 8981
          <br />
          Accra
          <br />
          GPS Code: AC-0134-1847
          <br /><br />
          E-mail: info@francislogisticscompany.com
          <br />
          Tel: *1801 - Internal Dial in Ghana
          <br/>
          Whatsapp: +233 248 6117
          <br /><br />
          +233-0-592486117 - External Dial outside of Ghana
          </h6>
        </div>
  
        <div className='logistics'>
          <h5>BOOK LOGISTIC EVALUATION</h5>
          <h6> <RiNumber1 id='number-icon'/> Warehouse construction</h6>
          <p>
          We shall examine the feasibility of erecting a storage facility in your business, 
          the building costs, adapting the infrastructure for such a facility, and more.  
          </p>
          <br />
          <h6> <RiNumber2 id='number-icon'/>Re-organization</h6>
          <p>
          Based on our accumulated know-how and experience 
          we shall propose ways of improving work processes in storing your equipment/items.
          </p>
          <br />
          <h6> <RiNumber3 id='number-icon'/>Information systems</h6>
          <p>
          We shall provide advice in the field of information systems and advanced computerization
          for inventory management in the warehouse.
          </p>
          <br />
          <h6> <RiNumber4 id='number-icon'/> Safety</h6>
          <p>
            We shall recommend ways of maintaining safety for the warehouse,
            the organization's staff and the inventory.
          </p>
          <br />
          <h6> <RiNumber5 id='number-icon'/>Defects</h6>
          <p>
          We shall identify the defects in the warehouse and propose solutions for improvement.
          </p>
          <br />
          <h6> <RiNumber6 id='number-icon'/>Logistics and operational systems</h6>
          <p>
          We shall examine how the logistics processes integrate into the business 
          operation and propose solutions for improving the operational chain in your organization.
          </p>
          <br />
          <h6> <RiNumber7 id='number-icon'/>Supply chain efficiency</h6>
          <p>
          We shall examine how to make the supply chain more efficient and to reduce your expenses by improving storage processes.
          </p>
          <br />
          <h6> <RiNumber8 id='number-icon'/>Familiarity with many market industries in the economy</h6>
          <p>
          FLC personnels are familiar with many industries and have accumulated many years of 
          experience in managing logistic processes.  This know-how is at your service
          </p>
        </div>
  
        <div id='bookings'>
          <h6>BOOKING</h6>
          <form onSubmit={handleSubmit} className='booking-forms'>
            <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} id='book-input' placeholder='First Name' type='text' />
            <input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} id='book-input' placeholder='Last Name' type='text'/>
            <br />
            <input onChange={(e)=>{setCompanyName(e.target.value)}} value={companyName} id='book-input' placeholder='Company Name' type='text' />
            <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} id='book-input' placeholder='Phone' type='phone' />
            <br />
            <input onChange={(e)=>{setCountry(e.target.value)}} value={country}  id='book-input-two' placeholder='Country' type='text' />
            <br />
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} id='book-input-three'  placeholder='Email' type='email'/>
          </form>
          <textarea onChange={(e)=>{setTextArea(e.target.value)}} value={textArea} placeholder='Message' className='booking-text'></textarea>
          <br />
  
          <button id='booking-submit'>Submit</button>
  
        </div>
  
        <Footer />
  
      </div>
    );

}


  

export default Contact;