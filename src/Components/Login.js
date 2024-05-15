import React from 'react';
import "../styles/style.css";
import NoUserNavbar from './NoUserNavbar';

function Login() {
    return (
        <>
            <NoUserNavbar />
            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    {/* Don't have an account */}
                    <p className='newUser'>Don't have an account? <a href="#">Sign up</a></p>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;