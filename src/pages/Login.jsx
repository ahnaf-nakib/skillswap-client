// src/pages/Login.jsx (Dark Theme Version)

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12,2C6.42,2 2.03,6.8 2.03,12C2.03,17.2 6.42,22 12,22C17.64,22 21.5,18.2 21.5,12.33C21.5,11.7 21.45,11.4 21.35,11.1Z" />
    </svg>
);

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

const Login = () => {
    const { signIn, googleSignIn } = useAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        setError('');

        signIn(email, password)
            .then(result => {
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
                toast.error(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success("Google Sign-in Successful!");
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-gray-900 text-gray-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-white">Login now!</h1>
                    <p className="py-6 text-gray-300">Welcome back to SkillSwap. Access your account to continue your skill exchange journey.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-800 border border-gray-700">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered bg-gray-700 text-gray-100 border-gray-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-gray-200">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered bg-gray-700 text-gray-100 border-gray-600"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-12 right-4 text-gray-300 hover:text-white"
                            >
                                {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                            </button>
                            <label className="label">
                                <Link
                                    to="/forgot-password"
                                    state={{ email: email }}
                                    className="label-text-alt link link-hover text-gray-400 hover:text-gray-200"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-indigo-600 hover:bg-indigo-700 border-0 text-white">Login</button>
                        </div>
                    </form>

                    <div className="px-8 pb-4 mt-2">
                        <p className="text-center text-gray-400 text-sm">Or sign in with</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-indigo-500 w-full mt-2 hover:bg-indigo-600 hover:text-white">
                            <GoogleIcon />
                            <span className="ml-2">Google</span>
                        </button>
                    </div>

                    <p className="text-center text-gray-400 mb-4 mt-2">
                        New to SkillSwap? <Link to="/signup" className="link link-indigo-500 hover:text-indigo-400">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
