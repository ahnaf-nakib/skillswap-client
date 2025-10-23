

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Signup from "../pages/Signup"; 
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import MyProfile from "../pages/MyProfile"; 
import PrivateRoute from "./PrivateRoute"; 
import UpdateProfile from "../pages/UpdateProfile";
import SkillDetails from "../pages/SkillDetails"; 

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <ErrorPage />, 
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup", 
                element: <Signup />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                ),
            },
            { 
                path: "/update-profile", 
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                )
            },
            { 
                path: "/skill/:id", 
                element: (
                    <PrivateRoute> 
                        <SkillDetails />
                    </PrivateRoute>
                )
            }
        ]
    },
]);