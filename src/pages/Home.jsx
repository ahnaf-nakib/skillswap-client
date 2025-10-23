

import React, { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';


import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    const [skills, setSkills] = useState([]);

    
    useEffect(() => {
        fetch('/skills.json') 
            .then(res => res.json())
            .then(data => setSkills(data));
    }, []);

    return (
        <div>
            {/* === Hero Slider === */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mySwiper h-[350px] rounded-lg"
            >
                <SwiperSlide className="relative">
                    <img src="https://www.ensembleschools.com/grace-music/wp-content/uploads/sites/26/2021/03/guitar-lessons-1.jpg" />
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Learn Guitar Today!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://skywinitacademy.com/wp-content/uploads/2023/03/Mastrer-in-ReactJS.webp" alt="Coding Help" className="w-full h-full object-cover" />
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Master React JS</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://www.shutterstock.com/image-photo/find-your-inner-peace-health-260nw-423586960.jpg" alt="Yoga" className="w-full h-full object-cover" />
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Find Your Inner Peace</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* === Popular Skills Section === */}
            <div className="my-20">
                <h1 className="text-4xl font-bold text-center mb-10">Popular Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map(skill => (
                        <SkillCard key={skill.skillId} skill={skill} />
                    ))}
                </div>
            </div>

            {/* === How It Works Section === */}
            <div className="my-20 p-10 bg-base-200 rounded-lg">
                <h1 className="text-4xl font-bold text-center mb-10">How It Works</h1>
                <div className="flex flex-col md:flex-row justify-around items-center text-center">
                    <div className="mb-6 md:mb-0" data-aos="fade-right">
                        <div className="text-5xl text-primary mb-2">🔎</div>
                        <h3 className="text-xl font-semibold">1. Find a Skill</h3>
                        <p>Browse listings from talented locals.</p>
                    </div>
                    <div className="mb-6 md:mb-0" data-aos="fade-up">
                        <div className="text-5xl text-primary mb-2">📅</div>
                        <h3 className="text-xl font-semibold">2. Book a Session</h3>
                        <p>Connect and schedule your session.</p>
                    </div>
                    <div data-aos="fade-left">
                        <div className="text-5xl text-primary mb-2">🌟</div>
                        <h3 className="text-xl font-semibold">3. Learn & Grow</h3>
                        <p>Enjoy your new skill and rate the provider.</p>
                    </div>
                </div>
            </div>

            {/* === Top Rated Providers Section (Static) === */}
<div className="my-20">
    <h1 className="text-4xl font-bold text-center mb-10 text-white">Top Rated Providers</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Provider 1 */}
        <div className="card bg-gray-800 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105" data-aos="zoom-in">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyES_GAHghsJlKWa4N02zJeB2wmSMHRvGhw&s" alt="Sara Hossain" />
                    </div>
                </div>
                <h2 className="card-title mt-4 text-white">Sara Hossain</h2>
                <p className="text-gray-300">Spoken English Practice</p>
                <p className="font-bold text-yellow-500">Rating: 4.6 ★</p>
            </div>
        </div>

        {/* Provider 2 */}
        <div className="card bg-gray-800 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                        <img src="data:image/jpeg;base64,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" alt="David Chen" />
                    </div>
                </div>
                <h2 className="card-title mt-4 text-white">David Chen</h2>
                <p className="text-gray-300">React JS Coding Help</p>
                <p className="font-bold text-yellow-500">Rating: 4.9 ★</p>
            </div>
        </div>

        {/* Provider 3 */}
        <div className="card bg-gray-800 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                        <img src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/03/11/b9f95052-a87b-4a13-9d90-8a6bbd618012_a67a8ee8.png?itok=j09MTFLq&v=1615455584" alt="Priya Sharma" />
                    </div>
                </div>
                <h2 className="card-title mt-4 text-white">Priya Sharma</h2>
                <p className="text-gray-300">Yoga & Meditation Basics</p>
                <p className="font-bold text-yellow-500">Rating: 4.7 ★</p>
            </div>
        </div>
    </div>
</div>


        </div>
    );
};

export default Home;