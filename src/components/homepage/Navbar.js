import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from './COMPUTERFCRIT.png';

import "./Navbar.css";

function Navbar() {
  const[active, setActive] = useState(false);


  return (
    <nav className={`navbar ${active && ('active')}`}>
      {/* <div className="nav"> */}
      <Link to="/" className="no-underline">
        <img src={logo} alt="logo" className="logo" /></Link>
      <ul className="navbar__links" type="none">
        <Link to="/" className="no-underline"><li onClick={()=>(setActive(!active))}>HOME</li></Link>
        <Link to="/Team" className="no-underline"><li onClick={() => (setActive(!active))}>OUR TEAM</li></Link>
        <Link to="/Events" className="no-underline"><li onClick={() => (setActive(!active))}>EVENTS</li></Link>
        <Link to="/ContactUs" className="no-underline"><li onClick={() => (setActive(!active))}>CONTACT US</li></Link>
        </ul>
      {/* </div> */}
      <span className="hamburger material-symbols-outlined"  aria-hidden="true" onClick={() => (setActive(!active))}>
        {!active ? 'menu':'close'}
      </span>
    </nav>
  );
}

export default Navbar;



