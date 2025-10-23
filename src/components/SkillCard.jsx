import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SkillCard = ({ skill }) => {
    const { skillId, skillName, image, price, rating } = skill;

    return (
        <div 
            className="card card-compact bg-gray-800 border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <figure className='h-52'>
                <img src={image} alt={skillName} className='w-full h-full object-cover rounded-t-xl' />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{skillName}</h2>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-semibold text-yellow-400">${price}/session</p>
                    <p className="text-lg font-medium text-yellow-400">Rating: {rating} ★</p>
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link 
                        to={`/skill/${skillId}`} 
                        className="btn btn-yellow text-black font-bold hover:bg-yellow-500"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
