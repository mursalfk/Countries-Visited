import React from 'react';
import "../styles/style.css";
import NoUserNavbar from './NoUserNavbar';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <NoUserNavbar />
            <div className="register-container">
                <form className="register-form">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" />
                    </div>
                    {/* Don't have an account */}
                    <p className='newUser'>Already have an account? <Link to="/login">Login</Link></p>
                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </>
    );
}

export default Register;
