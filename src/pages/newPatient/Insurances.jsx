import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import './Insurances.css';

const Insurances = () => {
    const insuranceList = [
        "AARP", "AARP Medicare Complete", "All BlueCross BlueShield Plans",
        "All Secondary/Supplemental Plans", "Cigna", "Excellus BCBS of Rochester",
        "Medicaid (Dual ONLY)", "MEDICARE", "MVP Health Plan", "Railroad Medicare",
        "Sidney Hillman", "Tricare", "United Healthcare",
        "United Healthcare Community Plan", "Univera Healthcare"
    ];

    return (
        <div className="page-wrapper insurances-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        Insurances Accepted
                    </h1>
                    <p className="page-subtitle">
                        We partner with major Medicare and commercial plans to ensure your care is covered and accessible.
                    </p>
                </div>
            </div>

            <main className="container insurances-main">
                <div className="insurances-grid">

                    <div className="lg:col-span-2">
                        <div className="insurances-featured-image">
                            <img
                                src="/newPatient/insurancesAccepted.jpg"
                                alt="Healthcare coverage"
                            />
                        </div>

                        <div className="policy-note">
                            <Info className="flex-shrink-0 icon-primary" size={24} />
                            <p>
                                Senior Medical Care is currently accepting new patients with the plans listed below.
                                <span>Please note: We are unable to accept cash-only patients at this time.</span>
                            </p>
                        </div>

                        <h2 className="carriers-title">
                            <ShieldCheck className="icon-primary" /> Accepted Carriers
                        </h2>

                        <div className="carriers-grid">
                            {insuranceList.map((plan, index) => (
                                <div key={index} className="carrier-item">
                                    <div className="carrier-dot" />
                                    <span className="carrier-name">{plan}</span>
                                </div>
                            ))}
                        </div>

                        <div className="secondary-note">
                            "We accept all secondary insurance plans, including Medicaid as a secondary provider."
                        </div>

                        <div className="contact-cta">
                            <div className="contact-cta-text">
                                <h3>Carrier not listed?</h3>
                                <p>Contact our office to verify your specific coverage.</p>
                            </div>
                            <a href="tel:5858722710" className="contact-cta-btn">
                                <Phone size={18} /> (585) 872-2710
                            </a>
                        </div>
                    </div>

                    <aside className="insurances-sidebar">
                        <div className="sidebar-box">
                            <h3>Resources</h3>
                            <nav className="sidebar-nav">
                                <Link to="/new-patient" className="sidebar-nav-link group">
                                    Becoming a New Patient <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/new-patient/service-area" className="sidebar-nav-link group">
                                    Service Area <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/billing" className="sidebar-nav-link group">
                                    Billing & Policies <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                            </nav>
                        </div>

                        <div className="sidebar-action-box">
                            <CheckCircle size={32} />
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

export default Insurances;