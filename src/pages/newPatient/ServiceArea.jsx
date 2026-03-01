import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info, AlertCircle, Phone, ArrowRight, CalendarRange } from 'lucide-react';
import './ServiceArea.css';

const ServiceArea = () => {
    return (
        <div className="page-wrapper service-area-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Service Area Map</h1>
                    <p className="page-subtitle">Find out if you are within our home-visit boundaries.</p>
                </div>
            </div>

            <main className="container service-area-main">
                <div className="service-area-grid">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2">

                        <div className="service-area-intro">
                            <div className="icon-container">
                                <MapPin size={28} className="icon-primary" color="var(--primary)" />
                            </div>
                            <div>
                                <h2>Servicing Monroe and Parts of Wayne County</h2>
                                <p>If you live inside the red boundary lines in the map below, then you live within our service area.</p>
                            </div>
                        </div>

                        <div className="service-map-container">
                            <img
                                src="/newPatient/New-Boundary-Map-2019.png"
                                alt="Housecall MD Service Area Boundary Map"
                                className="service-map-image"
                            />
                        </div>

                        <div className="service-regions">
                            <div>
                                <h2 className="region-title">Monroe County Areas</h2>
                                <p className="region-subtitle">See Map Above</p>

                                <div className="info-box">
                                    <div className="icon-container">
                                        <Info size={24} color="var(--secondary)" />
                                    </div>
                                    <p>
                                        For some zip codes, including <strong>14626, 14606, 14624, 14623, 14546, and 14450</strong> we only see part of the zip code. If you are unsure if your address is in our area, please call our office.
                                    </p>
                                </div>

                                <p className="region-text">
                                    For Zip Codes <strong>14546, 14586, 14467, and 14534</strong> we only go to the area North of I-90.
                                </p>
                            </div>

                            <div>
                                <h2 className="region-title">Wayne County Areas</h2>
                                <p className="region-subtitle" style={{ fontStyle: 'italic', fontWeight: 'normal', color: 'var(--text-muted)' }}>
                                    (West of Furnace Rd / Walworth Rd)
                                </p>

                                <ul className="region-list">
                                    <li><strong>Macedon</strong> (14502)</li>
                                    <li><strong>Ontario</strong> (14519)</li>
                                    <li><strong>Walworth</strong> (14568)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="warning-box">
                            <div className="icon-container">
                                <AlertCircle size={28} color="#DC2626" />
                            </div>
                            <p>
                                Unfortunately, if you live outside of our service area, we will not be able to see you at this time.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="service-area-sidebar">
                        <div className="sidebar-box">
                            <h3>Resources</h3>
                            <nav className="sidebar-nav">
                                <Link to="/new-patient" className="sidebar-nav-link group">
                                    Becoming a New Patient <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/new-patient/insurances" className="sidebar-nav-link group">
                                    Insurances Accepted <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/billing" className="sidebar-nav-link group">
                                    Billing & Policies <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                            </nav>
                        </div>

                        <div className="sidebar-action-box">
                            <CalendarRange size={32} />
                            <h3>Ready to schedule?</h3>
                            <p>Our team is ready to assist you with your transition to Senior Medical Care.</p>
                            <Link to="/contact" className="sidebar-action-btn">
                                Get Started
                            </Link>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
};

export default ServiceArea;