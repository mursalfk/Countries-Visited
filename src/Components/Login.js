import React, { useEffect, useState } from 'react';
import "../styles/style.css";
import NoUserNavbar from './NoUserNavbar';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Define useNavigate
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
                navigate('/home');
            } else {
                setUserLoggedIn(false);
            }
        });

        // Clean up the subscription when component unmounts
        return () => unsubscribe();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect user to another page after successful login
            navigate('/home');
        } catch (error) {
            setError(error.message);
        }
    };

    if (userLoggedIn) {
        return null; // Redirecting to /home, so no need to render login page
    }

    return (
        <>
            <NoUserNavbar userLoggedIn={userLoggedIn} />
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <p className='newUser'>Don't have an account? <Link to="/register">Sign up.</Link></p>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
