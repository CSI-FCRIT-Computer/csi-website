import React from 'react';
import './Team.css';

function card(props) {
  return (
    <div className="card">
    <div className="imgBx">
      <img src={props.img} alt="" />
    </div>
    <div className="textBx">
      <h2>{props.name}<br /><span>{props.post}</span></h2>
      <ul className="sci">
        <li><a href={props.insta}><i className="fa-brands fa-instagram" /></a></li>
        <li><a href={props.linkedin}><i className="fa-brands fa-linkedin" /></a></li>
        <li><a href={props.github}><i className="fa-brands fa-github" /></a></li>
      </ul>
    </div>
  </div>
  )
}

export default card;