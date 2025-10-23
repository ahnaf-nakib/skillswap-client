// src/layout/MainLayout.jsx (UPDATED)

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast'; 

const MainLayout = () => {
    return (
        <div>
            
            <Navbar />
            
            
            <div className='min-h-[calc(100vh-200px)]'>
                 <Outlet />
            </div>

            
            <Footer />

           
            <Toaster /> 
        </div>
    );
};

export default MainLayout;