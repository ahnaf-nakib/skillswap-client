// src/pages/Signup.jsx (100% Clean Code)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

// Google Icon
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path
            d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12,2C6.42,2 2.03,6.8 2.03,12C2.03,17.2 6.42,22 12,22C17.64,22 21.5,18.2 21.5,12.33C21.5,11.7 21.45,11.4 21.35,11.1Z"
        />
    </svg>
);
// "Eye" Icons (Show/Hide)
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const EyeSlashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
    </svg>
);


const Signup = () => {
    const { createUser, googleSignIn, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Password toggle state

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // Reset error
        setError('');

        // Password Validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        } else if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }

        // Create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                
                // Update profile (Name and PhotoURL)
                updateUserProfile(name, photoURL)
                    .then(() => {
                        toast.success("Signup Successful!");
                        // Navigate to home page on success
                        navigate('/'); 
                    })
                    .catch(err => {
                        setError(err.message);
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                toast.error(err.message);
            });
    };

    // Google Sign-in handler
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success("Google Sign-in Successful!");
                // Navigate to home page on success
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Join SkillSwap today to start learning and sharing skills in your local community.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        {/* Form Fields */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        
                        {/* --- Password Field (Updated) --- */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type={showPassword ? "text" : "password"} // Dynamic type
                                name="password" 
                                placeholder="password" 
                                className="input input-bordered" 
                                required 
                            />
                            {/* Toggle button */}
                            <button 
                                type="button" // Set type to "button" to prevent form submission
                                onClick={() => setShowPassword(!showPassword)} 
                                className="absolute top-12 right-4 cursor-pointer"
                            >
                                {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                            </button>
                        </div>
                        {/* --- End of Password Field --- */}
                        
                        
                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    
                    {/* Social Login */}
                    <div className="px-8 pb-4">
                        <p className="text-center text-sm">Or sign up with</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full mt-2">
                            <GoogleIcon />
                            Google
                        </button>
                    </div>
                    
                    {/* Link to Login */}
                    <p className="text-center mb-4">
                        Already have an account? <Link to="/login" className="link link-primary">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;