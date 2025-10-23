// src/pages/ForgotPassword.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Get email from login page's state
    const [email, setEmail] = useState(location.state?.email || '');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password Reset Email Sent!");
                // As per requirement, redirect to Gmail
                window.location.href = "https://mail.google.com/"; 
            })
            .catch((err) => {
                setError(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleSubmit} className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center">Reset Password</h2>
                    <p className='text-center text-sm'>Enter your email to receive a password reset link.</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Send Reset Link</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;