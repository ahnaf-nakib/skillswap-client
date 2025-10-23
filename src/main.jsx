
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import './App.css' 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import AuthProvider from './contexts/AuthProvider' 
import { Toaster } from 'react-hot-toast'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider> 
        <Toaster /> 
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)