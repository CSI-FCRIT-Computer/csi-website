import React from 'react';
import { useState } from 'react';
import './style.css';
import TeamDetails from "./TeamDetails.js";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
  

function AboutUs() {

  return (
    <div className="team-main">
      <h1> CSI COUNCIL 2023-24</h1>
      <div className="container row">
        {TeamDetails.map((member)=>
        <div style={{ background: `url(${member.img}) no-repeat 50% / cover` }} key={member.id}>
        <div className="content  col">
          <h2>{member.name}</h2>
          <span>{member.post}</span>
          <p>{member.id} </p>
        </div>
      </div>
        )}
    
      </div>
    </div>
  )
}

export default AboutUs;
