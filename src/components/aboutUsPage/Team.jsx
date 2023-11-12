import React from 'react';
import { useState } from 'react';
import './style.css';
import TeamDetails from "./TeamDetails.js";
import ig from "./images/instagram.png";
import li from "./images/linkedin.png"
import twit from "./images/twitter.png" 
import git from "./images/github.png" 
import { Link } from 'react-router-dom';
import Footer from '../Footer.js';


function AboutUs() {

  




  return (
    <>
    <div className="team-main">
      <h1> CSI COUNCIL 2023-24</h1>
      {/* <div className="container row"> */}
        <div className="grid">
          <ul id="hexGrid">
        {TeamDetails.map((member)=>   
          
          <li className="hex" key={member.id}>
                <div className="hexIn">
                  <div className="hexLink">
                <div className='img' style={{ backgroundImage: `url(${member.img})` }} >
                    <h1 id="demo1">{member.name}</h1>
                <p id="demo2">{member.post}</p>
                  <div className='socials row'>
                    {member.ig && (
                      <a href={member.ig} target='_blank' >
                        <img className='social-img' src={ig} alt='instagram' />
                      </a>
                    )}
                    {member.git && (
                      <a href={member.git} target='_blank' >
                        <img className='social-img' src={git} alt='gtihub' />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target='_blank'>
                        <img className='social-img' src={li} alt='linkedin' />
                      </a>
                    )}
                         {member.twit &&
                    <a href={member.twit} target='_blank' >
                    <img className='social-img'  src={twit} alt='twitter' />
                    </a>
                  }
                  </div>
                </div>

                  </div>
                </div>
              </li>
        )}
    </ul>
      </div>
      

    </div>
    <Footer/>
    </>
  )
}

export default AboutUs;
