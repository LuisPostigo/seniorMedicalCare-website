import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Phone, Monitor, Mail, HelpCircle, UserPlus } from 'lucide-react';
import '../about/About.css';
import './Services.css';

const Labs = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Patient Portal for Lab Results</h1>
                    <p className="page-subtitle">Secure, electronic access to your health records.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="about-grid">
                    <div className="text-content">

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                            <img
                                src="/services/mycare.png"
                                alt="MyCare Logo"
                                style={{ height: '60px', objectFit: 'contain' }}
                            />
                            <div>
                                <h2 style={{ marginBottom: '0.25rem' }}>MyCare</h2>
                                <p className="text-muted" style={{ fontStyle: 'italic', margin: 0 }}>Electronic Health Records for Rochester Regional Health Care</p>
                            </div>
                        </div>

                        <p className="text-lg mb-6 leading-relaxed">
                            MyCare is the patient portal for Rochester Regional Hospital that offers our patients and their caregivers access to test results.
                        </p>
                        <p className="text-lg mb-8 leading-relaxed">
                            If you already have a login for MyCare with Rochester Regional Health System, Great! Just click <strong>Login to MyCare</strong> and you will be able to see lab test results Dr. Postigo has ordered.
                        </p>

                        <div className="bg-subtle p-8 rounded-lg border border-gray-200" style={{ marginBottom: '3rem', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <a
                                    href="https://mycare.rochesterregional.org/mychart/Authentication/Login?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center' }}
                                >
                                    Login to MyCare
                                </a>

                                <div style={{ width: '100%', textAlign: 'center', margin: '1rem 0', position: 'relative' }}>
                                    <hr style={{ borderColor: 'var(--border-color)', margin: 0 }} />
                                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--bg-subtle, #f8f9fa)', padding: '0 1rem', color: 'var(--text-muted)' }}>Need an Account?</span>
                                </div>

                                <a
                                    href="/services/to_review_my_labs.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                    style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center' }}
                                >
                                    <FileText size={20} /> Instructions for Self Enrollment
                                </a>
                            </div>
                        </div>

                        <div className="service-list" style={{ marginTop: '0' }}>
                            <li style={{ alignItems: 'flex-start' }}>
                                <div className="service-list-icon"><HelpCircle size={32} /></div>
                                <div>
                                    <strong style={{ fontSize: '1.25rem', color: 'var(--primary)', display: 'block', marginBottom: '0.5rem' }}>For questions or assistance</strong>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        Call <strong>(585) 922-1234</strong> or email <a href="mailto:mycare@rochesterregional.org" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>mycare@rochesterregional.org</a> with your full name, date of birth, address and phone number.
                                    </p>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
                                        You can also have access to multiple accounts for if you are managing the care of more than one person. For any questions or problems contact the Help Line listed above.
                                    </p>
                                </div>
                            </li>

                            <li style={{ alignItems: 'flex-start', borderLeftColor: 'var(--primary)' }}>
                                <div className="service-list-icon" style={{ color: 'var(--primary)' }}><Mail size={32} /></div>
                                <div>
                                    <strong style={{ fontSize: '1.25rem', color: 'var(--primary)', display: 'block', marginBottom: '0.5rem' }}>Don't have an email address?</strong>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        If you don't have an email address you can use your caregiver or relative's email address. However, if you would like personal access, free email addresses are available through <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Gmail</a>, <a href="https://yahoo.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Yahoo</a>, and <a href="https://outlook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Outlook</a>.
                                    </p>
                                </div>
                            </li>
                        </div>

                    </div>

                    <div className="sidebar">
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Other Services</h3>
                            <ul className="sidebar-links">
                                <li><Link to="/services">All Services</Link></li>
                                <li><Link to="/services/provided">Services Provided</Link></li>
                                <li><Link to="/services/equipment">Medicines & Equipment</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Labs;
