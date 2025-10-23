// src/components/Navbar.jsx (Full Updated Code)

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider'; 
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully!");
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    // স্টাইলিশ নেভিগেশন লিংক
    const navLinks = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive 
                            ? "font-bold text-primary border-b-2 border-primary" 
                            : "font-bold" 
                    }
                >
                    Home
                </NavLink>
            </li>
            
            {user && (
                <li>
                    <NavLink 
                        to="/my-profile"
                        className={({ isActive }) => 
                            isActive 
                                ? "font-bold text-primary border-b-2 border-primary"
                                : "font-bold"
                        }
                    >
                        My Profile
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-lg px-4">
            {/* মোবাইল ভিউ-এর জন্য ড্রপডাউন */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">SkillSwap</Link>
            </div>
            
            {/* ডেক্সটপ ভিউ-এর মেনু */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            {/* ডান পাশের অংশ (ইউজার ইনফো) */}
            <div className="navbar-end">
                {
                    user ? (
                        // ইউজার লগইন করা থাকলে
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" title={user.displayName}>
                                    <img 
                                        alt="User Avatar" 
                                        src={user.photoURL || "https://i.ibb.co/example.png"} 
                                    />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="px-4 py-2">
                                    {user.displayName}
                                </li>
                                <li>
                                    <button onClick={handleLogout} className="btn btn-ghost">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // --- লগইন বাটন (আপডেটেড) ---
                        <Link to="/login" className="btn btn-primary btn-outline">
                            Login
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;