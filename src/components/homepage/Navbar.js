import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <input type="radio" id="ham" name="sidebar" />
      <label className="ham buttons" for="ham">
        <i className="fas fa-bars"></i>
      </label>

      <div className="navbar">
        <span className="navbar__brand">
          <input type="radio" id="close" name="sidebar" />
          <label className="close buttons" for="close">
            <i className="fas fa-times"></i>
          </label>
          LOGO
        </span>
        <ul className="navbar__links" type="none">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li> EVENTS</li>
          <li>SPONSORS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
