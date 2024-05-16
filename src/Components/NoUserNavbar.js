import React, { useState } from "react";
import ImagesImported from "../Images/Images";
import { Link, useLocation } from "react-router-dom";

function NoUserNavbar({
    userLoggedIn
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`noUserNavbar ${menuOpen ? "show-menu" : ""}`}>
            <div className="navbar-header">
                <div className="navbar-brand">
                    <img
                        src={ImagesImported.logo}
                        alt="logo"
                        className="navbar-logo"
                    />
                    <div className="navbar-brand-name">Traveleeper</div>
                </div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
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
                {userLoggedIn !== false && (<li className="navbar-item">Logout</li>)
                }
            </ul>
        </nav>
    );
}

export default NoUserNavbar;
