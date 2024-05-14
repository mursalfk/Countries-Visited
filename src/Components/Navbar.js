// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Countries Visited</div>
      <ul className="navbar-menu">
        <li className="navbar-item">Login</li>
        <li className="navbar-item">Register</li>
        <li className="navbar-item">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
