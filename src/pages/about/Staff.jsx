import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, PhoneCall, ShieldCheck } from 'lucide-react';
import './About.css';

const Staff = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Office Staff</h1>
                    <p className="page-subtitle">The friendly faces ensuring your visit is smooth and comfortable.</p>
                </div>
            </div>

            <div className="container content-section">
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="text-content">
                        <h2>We're Here for You</h2>
                        <p className="mb-8 text-lg">
                            Behind every great physician is an exceptional team. At Senior Medical Care, our staff is specially trained in accommodating the needs of seniors. From the moment you call until you check out, you'll be treated with patience, respect, and warmth.
                        </p>

                        <div className="staff-list">
                            {/* Staff Member: Amy */}
                            <div className="staff-card">
                                <div className="staff-image-container">
                                    <img
                                        src="/about/amyPostigo.jpg"
                                        alt="Amy, Administrator & Office Manager"
                                        className="staff-image"
                                    />
                                </div>
                                <div className="staff-info">
                                    <h3 className="staff-name">Amy</h3>
                                    <p className="staff-role">Administrator & Office Manager</p>
                                    <div className="staff-bio">
                                        <p>I am the Administrator and Office Manager for Senior Medical Care. I handle all administrative issues in the office including helping to solve problems with insurance companies not paying claims. I have been the administrator for Dr. Postigo since 2001 and helped him start this practice when he moved to Rochester.</p>
                                        <p>Before my time with Senior Medical Care I was the Administrative Manager for the Sealy Center on Aging at the University of Texas Medical Branch at Galveston. I have worked with the senior population for over 20 years trying to make their lives more comfortable. My grandmother who lived to be 92 has always been my inspiration.</p>
                                        <p>In my free time I enjoy reading, jewelry making, yoga & I dabble in sewing. I like spending time with my husband and children, and love to travel - especially if there is enough snow to go skiing.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Staff Member: Amy R. */}
                            <div className="staff-card">
                                <div className="staff-image-container">
                                    <img
                                        src="/about/amyRatajczak.jpg"
                                        alt="Amy R., Administrative Assistant"
                                        className="staff-image"
                                    />
                                </div>
                                <div className="staff-info">
                                    <h3 className="staff-name">Amy R.</h3>
                                    <p className="staff-role">Administrative Assistant</p>
                                    <div className="staff-bio">
                                        <p>I started my journey with Senior Medical Care in early 2019. I help with the day to day operations of the office. I enjoy coming to work each day and being in contact with our amazing patients and their families.</p>
                                        <p>I graduated MCC in 2007, with an A.A.S. and Massage Therapy Certification. I worked with the URMC Pulmonary Group and as a Pharmacy Tech prior to coming to Senior Medical Care.</p>
                                        <p>I spend my free time mostly with my three, very active, children. We all like to be outdoors-camping, hiking, swimming, fishing and boating. I also like to cook for my family, and try new dishes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="mt-12">What Our Staff Does Best</h3>
                        <ul className="value-list">
                            <li>
                                <div className="value-icon"><PhoneCall size={24} className="icon-white" /></div>
                                <div>
                                    <strong>Clear Communication</strong>
                                    <p>We answer the phone promptly and speak clearly, taking the time to explain instructions or billing details without rushing.</p>
                                </div>
                            </li>
                            <li>
                                <div className="value-icon"><ShieldCheck size={24} className="icon-white" /></div>
                                <div>
                                    <strong>Insurance Advocacy</strong>
                                    <p>Navigating Medicare and supplements can be confusing. Our staff is trained to help you understand your coverage.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                        <div className="sidebar-card" style={{ margin: 0 }}>
                            <h3 className="sidebar-title" style={{ textAlign: 'center' }}>Explore More</h3>
                            <ul className="sidebar-links" style={{ textAlign: 'center' }}>
                                <li><Link to="/about">About Us Overview</Link></li>
                                <li><Link to="/about/provider">Meet Dr. Postigo</Link></li>
                                <li><Link to="/about/virtual-meet">Virtual Meet & Greet</Link></li>
                            </ul>
                        </div>

                        <div className="bg-primary text-white p-8 rounded-xl shadow-md text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Smile size={48} className="mx-auto mb-4 opacity-80" />
                            <h3 className="text-white mb-2" style={{ margin: 0 }}>Join Our Family</h3>
                            <p className="mb-6 opacity-90 text-sm">We are currently accepting new Medicare patients.</p>
                            <Link to="/new-patient" className="btn-secondary" style={{ display: 'block', width: 'fit-content', margin: '0 auto' }}>New Patient Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;