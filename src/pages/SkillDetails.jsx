// src/pages/SkillDetails.jsx

import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SkillDetails = () => {
    const { id } = useParams(); 
    const { user } = useAuth(); 
    const [skill, setSkill] = useState(null);
    const navigate = useNavigate();

    
    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => {
                
                const foundSkill = data.find(item => item.skillId === parseInt(id));
                setSkill(foundSkill);
            });
    }, [id]);

    
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        
        
        toast.success("Session booked successfully!");
        
        
        e.target.reset();
        
        // navigate('/');
    };

    
    if (!skill) {
        return <span className="loading loading-spinner loading-lg text-center mx-auto block my-20"></span>;
    }

    
    const { skillName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = skill;

    return (
        <div className="container mx-auto p-4 my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2">
                    <img src={image} alt={skillName} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body lg:w-1/2">
                    
                    <h1 className="card-title text-4xl font-bold">{skillName}</h1>
                    <p className="text-xl text-gray-600">Category: {category}</p>
                    <p className="text-lg mt-4">{description}</p>
                    <div className="divider"></div>
                    <p><strong>Provider:</strong> {providerName} ({providerEmail})</p>
                    <p><strong>Rating:</strong> {rating} ★</p>
                    <p><strong>Available Slots:</strong> {slotsAvailable}</p>
                    <h2 className="text-3xl font-semibold text-primary mt-2">${price} / session</h2>
                </div>
            </div>

           
            <div className="card w-full max-w-lg mx-auto shadow-2xl bg-base-200 my-10">
                <form onSubmit={handleBookingSubmit} className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-4">Book This Session</h2>
                    
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            defaultValue={user?.displayName} 
                            className="input input-bordered" 
                            readOnly 
                        />
                    </div>
                    
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                         <input 
                            type="email" 
                            name="email"
                            defaultValue={user?.email} 
                            className="input input-bordered" 
                            readOnly 
                        />
                    </div>
                    
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SkillDetails;