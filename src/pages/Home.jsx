// src/pages/Home.jsx (UPDATED)

import React, { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';

// Swiper React কম্পোনেন্ট ইম্পোর্ট
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper মডিউল ইম্পোর্ট
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper স্টাইল ইম্পোর্ট
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    const [skills, setSkills] = useState([]);

    // JSON ডেটা লোড করা
    useEffect(() => {
        fetch('/skills.json') // public ফোল্ডার থেকে fetch
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
                className="mySwiper h-[500px] rounded-lg"
            >
                <SwiperSlide className="relative">
                    <img src="https://i.ibb.co/b3bXSsB/guitar-lesson.jpg" alt="Guitar Lessons" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Learn Guitar Today!</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://i.ibb.co/d0DFvS3/react-coding.jpg" alt="Coding Help" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Master React JS</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://i.ibb.co/ZJ4dF3y/yoga-meditation.jpg" alt="Yoga" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
                <h1 className="text-4xl font-bold text-center mb-10">Top Rated Providers</h1>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Provider 1 */}
                    <div className="card shadow-lg" data-aos="zoom-in">
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                                    <img src="https://i.ibb.co/CKVq5j2/provider1.jpg" alt="Sara Hossain" />
                                </div>
                            </div>
                            <h2 className="card-title mt-4">Sara Hossain</h2>
                            <p>Spoken English Practice</p>
                            <p className="font-bold text-yellow-500">Rating: 4.6 ★</p>
                        </div>
                    </div>
                    {/* Provider 2 */}
                    <div className="card shadow-lg" data-aos="zoom-in" data-aos-delay="200">
                        <div className="card-body items-center text-center">
                             <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                                    <img src="https://i.ibb.co/dKqY74M/provider2.jpg" alt="David Chen" />
                                </div>
                            </div>
                            <h2 className="card-title mt-4">David Chen</h2>
                            <p>React JS Coding Help</p>
                            <p className="font-bold text-yellow-500">Rating: 4.9 ★</p>
                        </div>
                    </div>
                    {/* Provider 3 */}
                    <div className="card shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                        <div className="card-body items-center text-center">
                             <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                                    <img src="https://i.ibb.co/GvxYk1q/provider3.jpg" alt="Priya Sharma" />
                                </div>
                            </div>
                            <h2 className="card-title mt-4">Priya Sharma</h2>
                            <p>Yoga & Meditation Basics</p>
                            <p className="font-bold text-yellow-500">Rating: 4.7 ★</p>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
    );
};

export default Home;