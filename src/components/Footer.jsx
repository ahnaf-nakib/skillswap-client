// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
    // [cite: 30] অনুযায়ী এখানে কন্টাক্ট ইনফো, লিঙ্ক ইত্যাদি থাকবে
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Guitar Lessons</a>
                <a className="link link-hover">Language Exchange</a>
                <a className="link link-hover">Coding Help</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy Policy</a> {/* [cite: 30] */}
            </nav>
            <nav>
                <header className="footer-title">Social</header> {/* [cite: 30] */}
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="..."></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="..."></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="..."></path></svg></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;