// src/pages/UpdateProfile.jsx

import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

       
        updateUserProfile(name, photoURL)
            .then(() => {
                toast.success("Profile Updated Successfully!");
                
                navigate('/my-profile');
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Update Your Profile</h1>
            <form onSubmit={handleUpdate} className="card-body">
                {/* Name Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input input-bordered"
                        defaultValue={user?.displayName} 
                        required
                    />
                </div>
                
                {/* Photo URL Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        defaultValue={user?.photoURL} 
                        required
                    />
                </div>

                {/* Email Field (Read Only) */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        value={user?.email} 
                        className="input input-bordered"
                        readOnly 
                    />
                </div>
                
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;