

import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    
    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center mx-auto block my-20"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;