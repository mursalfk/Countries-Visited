// Navbar.js
import React from "react";
import ImagesImported from "../Images/Images";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={ImagesImported.logo}
          alt="logo"
          className="navbar-logo"
        />
        <div className="navbar-brand-name">Countries Visited</div>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li>
        <li className="navbar-item">Register</li>
        <li className="navbar-item">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
