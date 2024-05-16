import React from "react";
import ImagesImported from "../Images/Images";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={ImagesImported.logo}
          alt="logo"
          className="navbar-logo"
        />
        <div className="navbar-brand-name">Traveleeper</div>
      </div>
      <ul className="navbar-menu">
        <li className={`navbar-item ${location.pathname === "/home" ? "active" : ""}`}>
          <Link to="/home">Home</Link>
        </li>
        <li className={`navbar-item ${location.pathname === "/login" ? "active" : ""}`}>
          <Link to="/login">Login</Link>
        </li>
        <li className={`navbar-item ${location.pathname === "/register" ? "active" : ""}`}>
          <Link to="/register">Register</Link>
        </li>
        <li className="navbar-item">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
