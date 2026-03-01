import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap } from 'lucide-react';
import './About.css';

const Provider = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Meet Dr. Luis G. Postigo, MD</h1>
                    <p className="page-subtitle">Your dedicated partner in senior healthcare.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="about-grid">
                    <div className="text-content">
                        <h2 className="text-3xl color-primary mb-6">A Legacy of Care</h2>
                        <p className="mb-4 text-lg" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
                            Dr. Postigo specializes in Internal Medicine, Geriatric Medicine, Hospice and Palliative Care. He is also a certified Medical Director as of 2005. He has been actively practicing medicine since 1992, bringing decades of experience to the care of senior patients.
                        </p>
                        <p className="mb-4 text-lg" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
                            In 2007, Dr. Postigo moved to the Rochester, NY area and founded a Geriatric House Call practice dedicated to providing high-quality medical care to seniors in the comfort of their own homes. His practice focuses on personalized, compassionate care for seniors with complex medical needs who benefit from in-home medical services.
                        </p>
                        <p className="mb-10 text-lg" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
                            Dr. Postigo is bi-lingual and speaks both English and Spanish fluently. Throughout his career, he has cared for patients that do not speak English or Spanish. He is comfortable using translation apps to help with communication when needed.
                        </p>

                        {/* Redesigned Education & Training Section */}
                        <div className="education-training-container">
                            <h3 className="section-label">Education & Professional Background</h3>

                            <div className="credentials-grid">
                                {/* Academic Background */}
                                <div className="credential-card">
                                    <div className="card-header">
                                        <GraduationCap size={20} className="card-icon" />
                                        <h4>Academic History</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="info-group">
                                            <span className="label">Medical School & Internship</span>
                                            <p className="info">Cayetano Heredia University, Lima, Peru</p>
                                        </div>
                                        <div className="info-group">
                                            <span className="label">Residency</span>
                                            <p className="info">St. Lukes Hospital, St. Louis, Missouri (Internal Medicine)</p>
                                        </div>
                                        <div className="info-group">
                                            <span className="label">Fellowship</span>
                                            <p className="info">University of Texas Medical Branch of Galveston (Geriatric Medicine)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Certifications & Specialties */}
                                <div className="credential-card">
                                    <div className="card-header">
                                        <Award size={20} className="card-icon" />
                                        <h4>Credentials & Specialties</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="info-group">
                                            <span className="label">Board Certifications</span>
                                            <p className="info">Internal Medicine, Geriatric Medicine, Hospice & Palliative Care, Certified Medical Director</p>
                                        </div>
                                        <div className="info-group">
                                            <span className="label">Clinical Specialties</span>
                                            <p className="info">Geriatric Medicine, Hospice & Palliative Care</p>
                                        </div>
                                        <div className="info-group">
                                            <span className="label">Professional Affiliations</span>
                                            <p className="info">American Geriatric Society</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar">
                        <img
                            src="/about/LuisGPostigo.jpg"
                            alt="Dr. Luis G. Postigo portrait"
                            className="rounded-image shadow-md mb-6"
                        />

                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Our Practice</h3>
                            <ul className="sidebar-links">
                                <li><Link to="/about">About Us Overview</Link></li>
                                <li><Link to="/about/virtual-meet">Virtual Meet & Greet</Link></li>
                                <li><Link to="/about/staff">Our Office Staff</Link></li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <Link to="/new-patient" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Become a Patient</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provider;