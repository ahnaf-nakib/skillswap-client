// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // বা App.css, যেটা তুমি ব্যবহার করছো
import './App.css' // (যদি App.css ব্যবহার করো)

// --- Swiper CSS ইম্পোর্ট ---
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// --------------------------

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import AuthProvider from './contexts/AuthProvider' 
import { Toaster } from 'react-hot-toast'; // Toaster এখানে থাকলে ভালো

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider> 
        <Toaster /> {/* Toaster এখানে নিয়ে আসলাম */}
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)