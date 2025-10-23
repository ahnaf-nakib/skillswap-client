// src/pages/MyProfile.jsx

import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom'; // Update Profile বাটনের জন্য

const MyProfile = () => {
    // AuthContext থেকে ইউজার তথ্য নিলাম
    const { user, loading } = useAuth();

    // যদি লোডিং হয়, স্পিনার দেখাও
    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center mx-auto block my-20"></span>;
    }

    // যদি ইউজার লোড না হয় (যদিও PrivateRoute এটা হ্যান্ডেল করবে, তাও সেফটির জন্য)
    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>
            <div className="flex flex-col items-center">
                
                {/* ইউজার ইমেজ */}
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt={user.displayName} />
                    </div>
                </div>
                
                {/* ইউজার নেম */}
                <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                
                {/* ইউজার ইমেইল */}
                <p className="text-gray-500 mt-1">{user.email}</p>

                {/* আপডেট প্রোফাইল বাটন */}
                <Link to="/update-profile" className="btn btn-primary mt-6">
                    Update Profile
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;