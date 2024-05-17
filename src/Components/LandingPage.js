import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/style.css";

function LandingPage() {
    return (
        <div className="landing-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Traveleeper</h1>
                    <p>Track and share your travel experiences with ease.</p>
                    <div className="hero-buttons">
                        <Link to="/login" className="login-btn">Login</Link>
                        <Link to="/register" className="get-started-btn">Get Started</Link>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="feature">
                    <h2>Discover New Places</h2>
                    <p>Explore new destinations and add them to your travel list.</p>
                </div>
                <div className="feature">
                    <h2>Share Your Journey</h2>
                    <p>Share your travel experiences with friends and family.</p>
                </div>
                <div className="feature">
                    <h2>Track Your Travels</h2>
                    <p>Keep track of the places you've visited and plan your next adventure.</p>
                </div>
            </section>

            <footer className="footer-section">
                <p>&copy; 2024 Traveleeper. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
