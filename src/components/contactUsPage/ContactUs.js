import React from 'react'
import './contactUs.css';
import Contact from './Contact.jsx';
import Footer from '../Footer.js';
function ContactUs() {
  return (
    <>
    <div className='containercontactus' >
       <h1 className='heading'>Contact Us</h1>
      <div className='contactus'> 
     
      <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25449204' className='insta' frameBorder='0' width='1000vw' height='1000vw' allowFullScreen></iframe>
      </div>
      <div>
      </div>    
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default ContactUs
