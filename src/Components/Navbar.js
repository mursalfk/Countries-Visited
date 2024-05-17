import React from "react";
import ImagesImported from "../Images/Images";
import { Link, useLocation } from "react-router-dom";

function Navbar({
  handleLogout,
  userLoggedIn,
  userData,
  handleUpdate
}) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src={ImagesImported.logo}
            alt="logo"
            className="navbar-logo"
          />
        </Link>
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
              <li className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}>
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-item" onClick={handleLogout}>Logout</li>
              <li className="navbar-item" onClick={handleUpdate}>Update Record</li>
              <li className="navbar-item disabled"><a href="#">Profile</a></li>
              <li className="navbar-item disabled"><a href="#">Contact</a></li>
              <li className="navbar-item"><a href="https://forms.gle/RtSt3Ae1yjDeCPhv6" target="_blank" rel="noreferrer">Feedback</a></li>
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
