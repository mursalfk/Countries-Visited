import React, { useState } from "react";
import ImagesImported from "../Images/Images";
import { Link } from "react-router-dom";

function NoUserNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <div className="navbar-brand-name">Countries Visited</div>
                </div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                <li className="navbar-item"><Link to="/login">Login</Link></li>
                <li className="navbar-item"><Link to="/register">Register</Link></li>
                <li className="navbar-item">Logout</li>
            </ul>
        </nav>
    );
}

export default NoUserNavbar;
