

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
                <h1 className="text-4xl font-bold text-center mb-10">Top Rated Providers</h1>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Provider 1 */}
                    <div className="card shadow-lg" data-aos="zoom-in">
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyES_GAHghsJlKWa4N02zJeB2wmSMHRvGhw&s" alt="Sara Hossain" />
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
                                    <img src="data:image/jpeg;base64,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" alt="David Chen" />
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
                                    <img src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/03/11/b9f95052-a87b-4a13-9d90-8a6bbd618012_a67a8ee8.png?itok=j09MTFLq&v=1615455584" alt="Priya Sharma" />
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