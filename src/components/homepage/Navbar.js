import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar__brand">LOGO</span>
      <ul className="navbar__links" type="none">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li> EVENTS</li>
        <li>SPONSORS</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  );
}

export default Navbar;
