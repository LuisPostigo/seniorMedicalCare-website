import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Heart, Clock, Users } from 'lucide-react';
import './About.css';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">About Our Practice</h1>
                    <p className="page-subtitle">Dedicated to the health, dignity, and longevity of our local seniors.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="about-image-container">
                    <img
                        src="/about/holdinghands.jpg"
                        alt="Doctor holding patient's hands"
                    />
                </div>

                <div className="about-grid">
                    <div className="text-content">
                        <h2>Our Mission</h2>
                        <p className="mb-4 text-lg" style={{ color: 'var(--text-main)', lineHeight: 1.7 }}>
                            Senior Medical Care understands how difficult it is for seniors to get to a doctor's office and then wait in a traditional waiting room. Seniors on a fixed income have a need for quality, affordable care. Sometimes it is also a burden for the families and caregivers to take off work or coordinate transportation to get their parents or loved ones to a medical appointment.
                        </p>
                        <p className="mb-4 text-lg" style={{ color: 'var(--text-main)', lineHeight: 1.7 }}>
                            Thanks to advances in medical technology our practice is able to provide many of the same medical services during a home visit as those offered in a traditional office setting. Dr. Postigo brings his expertise as a Geriatrician directly to patients, serving as their primary care provider in the comfort and convenience of their own home.
                        </p>
                        <p className="mb-8 text-lg" style={{ color: 'var(--text-main)', lineHeight: 1.7 }}>
                            Our dedicated office staff handles your questions, appointments and insurance billing. <Link to="/services" style={{ textDecoration: 'underline' }}>Click here</Link> or 'services' on the navigation bar above to see what services we are able to provide at your home for no extra cost.
                        </p>

                        <h3>Why Choose Us?</h3>
                        <ul className="value-list">
                            <li>
                                <div className="value-icon" style={{ backgroundColor: 'var(--secondary)' }}><Heart size={24} color="white" /></div>
                                <div>
                                    <strong>Compassionate Care</strong>
                                    <p>We treat every patient like family, prioritizing your comfort, dignity, and individual needs.</p>
                                </div>
                            </li>
                            <li>
                                <div className="value-icon" style={{ backgroundColor: 'var(--secondary)' }}><Clock size={24} color="white" /></div>
                                <div>
                                    <strong>Time for You</strong>
                                    <p>We schedule longer appointments so we can answer all your questions without rushing.</p>
                                </div>
                            </li>
                            <li>
                                <div className="value-icon" style={{ backgroundColor: 'var(--secondary)' }}><Navigation size={24} color="white" /></div>
                                <div>
                                    <strong>Care Coordination</strong>
                                    <p>We assist in navigating the healthcare system, from specialist referrals to medical supplies.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Meet Our Team</h3>
                            <p className="mb-4">Get to know the dedicated professionals providing your care.</p>
                            <ul className="sidebar-links">
                                <li><Link to="/about/provider">Dr. Luis G. Postigo, MD</Link></li>
                                <li><Link to="/about/virtual-meet">Virtual Meet & Greet</Link></li>
                                <li><Link to="/about/staff">Our Office Staff</Link></li>
                            </ul>
                        </div>

                        <img
                            src="/luisPostigo/luisGPostigo_standing.jpg"
                            alt="Dr. Luis G. Postigo standing"
                            className="rounded-image shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
