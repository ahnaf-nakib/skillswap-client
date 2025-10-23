// src/routes/PrivateRoute.jsx

import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // যদি লোডিং অবস্থায় থাকে, তবে একটি লোডিং স্পিনার দেখাও
    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center mx-auto block my-20"></span>;
    }

    // যদি ইউজার লগইন করা থাকে, তবে তাকে কাঙ্ক্ষিত পেইজে যেতে দাও
    if (user) {
        return children;
    }

    // যদি ইউজার লগইন করা না থাকে, তবে তাকে লগইন পেইজে পাঠাও
    // 'state' ব্যবহার করা হচ্ছে যাতে লগইন করার পর সে আবার এই পেইজে ফেরত আসতে পারে
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;