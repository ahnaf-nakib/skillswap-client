// src/components/SkillCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// AOS অ্যানিমেশন প্যাকেজ ইম্পোর্ট (এটি আমরা পরে ইন্সটল করবো বা করেছি)
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS এর CSS
AOS.init(); // AOS ইনিশিয়ালাইজ করা

const SkillCard = ({ skill }) => {
    const { skillId, skillName, image, price, rating } = skill;

    return (
        <div 
            className="card card-compact bg-base-100 shadow-xl"
            data-aos="fade-up" // AOS অ্যানিমেশন
            data-aos-duration="1000"
        >
            <figure className='h-52'>
                <img src={image} alt={skillName} className='w-full h-full object-cover' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{skillName}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-primary">${price}/session</p>
                    <p className="text-lg font-medium">Rating: {rating} ★</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/skill/${skillId}`} className="btn btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;