import React from 'react';
import { Link } from 'react-router-dom';
import { Video, CalendarCheck, HelpCircle } from 'lucide-react';
import './About.css';

const VirtualMeet = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Virtual Meet & Greet</h1>
                    <p className="page-subtitle">Get to know us from the comfort of your home before committing to an appointment.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="about-grid">
                    <div className="text-content">
                        <h2>A Great Way to Meet the Doctor BEFORE Your First Appointment</h2>
                        <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--primary)', marginTop: '1rem' }}>Hello, I'm Dr. Postigo.</h3>
                        <p className="mb-4 text-lg">
                            I am not able to have a meet-and-greet appointment with potential patients because of time constraints. However, I want to introduce myself and tell you a little bit about myself and my practice.
                        </p>
                        <p className="mb-8 text-lg">
                            The video below and my website provides a lot of information about my practice. Please take a moment to review them to help you make your decision if my practice is a good fit for you.
                        </p>

                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', marginBottom: '3rem' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/U79_ITmJ2GM?si=nIQpXwZXYT5i67o_"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Explore More</h3>
                            <ul className="sidebar-links">
                                <li><Link to="/about">About Us Overview</Link></li>
                                <li><Link to="/about/provider">Meet Dr. Postigo</Link></li>
                                <li><Link to="/about/staff">Our Office Staff</Link></li>
                            </ul>
                        </div>

                        <img
                            src="/luisPostigo/luisGPostigo_standing.jpg"
                            alt="Dr. Luis G. Postigo standing"
                            className="rounded-image shadow-md mt-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualMeet;
