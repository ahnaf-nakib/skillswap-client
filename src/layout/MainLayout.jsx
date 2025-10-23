// src/layout/MainLayout.jsx (UPDATED)

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast'; // <-- ১. ইম্পোর্ট করো

const MainLayout = () => {
    return (
        <div>
            {/* Navbar সেকশন */}
            <Navbar />
            
            {/* এখানে রাউট-ভিত্তিক কন্টেন্ট লোড হবে */}
            <div className='min-h-[calc(100vh-200px)]'>
                 <Outlet />
            </div>

            {/* Footer সেকশন */}
            <Footer />

            {/* Toaster কম্পোনেন্ট (যেকোনো জায়গায় রাখা যায়) */}
            <Toaster /> {/* <-- ২. এটি যোগ করো */}
        </div>
    );
};

export default MainLayout;