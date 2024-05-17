import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../firebase.config';
import { collection, setDoc, doc } from "firebase/firestore";
import NoUserNavbar from './NoUserNavbar';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (userLoggedIn) {
            navigate('/home');
        }
    }, [userLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                displayName: name,
                email: email,
                uid: user.uid
            });

            alert('User registered successfully');
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <NoUserNavbar userLoggedIn={userLoggedIn} />
            {!userLoggedIn && (
                <div className="register-container">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="text" name="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <p className='newUser'>Already have an account? <Link to="/login">Login</Link></p>
                        <button type="submit" className="register-btn">Register</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Register;
