import React from 'react';
import "../styles/style.css";
import NoUserNavbar from './NoUserNavbar';

function Register() {
    return (
        <>
            <NoUserNavbar />
            <div className="register-container">
                <form className="register-form">
                    <h2>Register</h2>
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
                    <button type="submit" className="register-btn">Login</button>
                </form>
            </div>
        </>
    );
}

export default Register;
