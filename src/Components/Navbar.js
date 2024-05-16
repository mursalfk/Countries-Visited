import React from "react";
import ImagesImported from "../Images/Images";
import { Link, useLocation } from "react-router-dom";

function Navbar({
  handleLogout,
  userLoggedIn,
  userData
}) {
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
      <div className="navbar-user">
        {userLoggedIn && (
          <div className="navbar-user-info">
            <div className="greetings">Welcome</div>
            <div className="navbar-user-name">{userData.displayName}</div>
          </div>
        )}
      </div>
      <ul className="navbar-menu">
        {
          userLoggedIn ? (
            <>
              <li className={`navbar-item ${location.pathname === "/home" ? "active" : ""}`}>
                <Link to="/home">Home</Link>
              </li>
              <li className="navbar-item" onClick={handleLogout}>Logout</li>
            </>
          ) : (
            <>
              <li className={`navbar-item ${location.pathname === "/login" ? "active" : ""}`}>
                <Link to="/login">Login</Link>
              </li>
              <li className={`navbar-item ${location.pathname === "/register" ? "active" : ""}`}>
                <Link to="/register">Register</Link>
              </li>
            </>
          )
        }

      </ul>
    </nav>
  );
}

export default Navbar;
