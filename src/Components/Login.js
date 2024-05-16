import React from 'react';
import "../styles/style.css";
import NoUserNavbar from './NoUserNavbar';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <NoUserNavbar />
            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <p className='newUser'>Don't have an account? <Link to="/register">Sign up.</Link></p>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
