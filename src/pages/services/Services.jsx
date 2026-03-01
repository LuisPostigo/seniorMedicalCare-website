import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, ClipboardList } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">Comprehensive medical care tailored for the senior community.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="text-center max-w-3xl mx-auto">
                    <h2>Everything You Need, Under One Roof</h2>
                    <p className="text-lg text-muted mb-8">
                        As we age, our healthcare needs evolve. Dr. Postigo provides a wide continuum of care designed to manage chronic conditions, prevent illness, and maintain your independence and quality of life.
                    </p>
                </div>

                <div className="services-grid">
                    <Link to="/services/provided" className="service-card">
                        <div className="service-card-icon"><Stethoscope size={40} /></div>
                        <h3>Medical Services</h3>
                        <p>From annual wellness exams to chronic disease management. We handle your primary care needs with expertise and patience.</p>
                        <span className="btn-secondary mt-auto" style={{ alignSelf: 'flex-start' }}>Explore Services</span>
                    </Link>

                    <Link to="/services/equipment" className="service-card">
                        <div className="service-card-icon"><Activity size={40} /></div>
                        <h3>Medicines & Equipment</h3>
                        <p>Assistance with medication management, prescription refills, and coordinating essential medical supplies for your home.</p>
                        <span className="btn-secondary mt-auto" style={{ alignSelf: 'flex-start' }}>Explore Support</span>
                    </Link>

                    <Link to="/services/labs" className="service-card">
                        <div className="service-card-icon"><ClipboardList size={40} /></div>
                        <h3>Lab Reviews</h3>
                        <p>We believe in transparent healthcare. Convenient ways to review your lab results online or in-person with the doctor.</p>
                        <span className="btn-secondary mt-auto" style={{ alignSelf: 'flex-start' }}>View Options</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
