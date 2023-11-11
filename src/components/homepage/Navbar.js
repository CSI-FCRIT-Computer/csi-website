import React from "react";
import { Link } from 'react-router-dom';
import logo from './COMPUTERFCRIT.png';

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="no-underline">
        <img src={logo} alt="logo" className="logo" /></Link>
      <ul className="navbar__links" type="none">
        <Link to="/" className="no-underline"><li>HOME</li></Link>
        <Link to="/Team" className="no-underline"><li>OUR TEAM</li></Link>
        <Link to="/Events" className="no-underline"><li>EVENTS</li></Link>
        <Link to="/ContactUs" className="no-underline"><li>CONTACT US</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;
