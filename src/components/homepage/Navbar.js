import React from "react";
import { Link } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar__brand">LOGO</span>
      <ul className="navbar__links" type="none">
        <Link to="/" className="no-underline"><li>HOME</li></Link>
        <Link to="/AboutUs" className="no-underline"><li>OUR TEAM</li></Link>
        <Link to="/Events" className="no-underline"><li>EVENTS</li></Link>
        <Link to="/Sponsors" className="no-underline"><li>SPONSORS</li></Link>
        <Link to="/ContactUs" className="no-underline"><li>CONTACT US</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;
