// src/pages/MyProfile.jsx

import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center mx-auto block my-20"></span>;
    }

    if (!user) {
        return <div className="text-center text-gray-400 my-20">Loading user data...</div>;
    }

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-gray-800 shadow-lg rounded-xl text-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 text-white">My Profile</h1>
            <div className="flex flex-col items-center">
                
                
                <div className="avatar mb-4">
                    <div className="w-24 h-24 rounded-full ring ring-indigo-500 ring-offset-gray-800 ring-offset-2 overflow-hidden">
                        <img src={user.photoURL} alt={user.displayName} className="object-cover w-full h-full" />
                    </div>
                </div>
                
               
                <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                
               
                <p className="text-gray-400 mt-1">{user.email}</p>

                
                <Link 
                    to="/update-profile" 
                    className="btn btn-indigo-500 bg-indigo-600 hover:bg-indigo-700 border-0 mt-6 text-white w-full sm:w-auto"
                >
                    Update Profile
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;
