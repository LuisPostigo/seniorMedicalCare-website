import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronDown, Facebook, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="brand-wrapper">
                            <img src="/carForWebsite_black.png" alt="Logo" className="footer-logo-img" />
                            <div className="brand-text">
                                <h2 className="footer-logo-title">Senior Medical Care</h2>
                                <p className="footer-logo-subtitle">Dr. Luis G. Postigo, MD</p>
                            </div>
                        </Link>
                        <p className="brand-description">
                            Providing compassionate, personalized geriatric house calls to the Rochester area since 2007.
                        </p>
                        <a href="tel:+15858722710" className="footer-phone">
                            <Phone size={16} /> (585) 872-2710
                        </a>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/HouseCallMDforSeniors" className="social-icon-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid-links">
                        {/* Quick Links Section */}
                        <div className={`footer-collapsible ${openSection === 'links' ? 'is-open' : ''}`}>
                            <h3 onClick={() => toggleSection('links')}>
                                Quick Links <ChevronDown size={18} className="mobile-chevron" />
                            </h3>
                            <ul className="footer-links-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/new-patient">New Patient</Link></li>
                                <li><Link to="/faqs">FAQs</Link></li>
                                <li><Link to="/reviews">Reviews</Link></li>
                                <li><Link to="/resources">Resources</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Hours Section */}
                        <div className={`footer-collapsible ${openSection === 'hours' ? 'is-open' : ''}`}>
                            <h3 onClick={() => toggleSection('hours')}>
                                Practice Hours <ChevronDown size={18} className="mobile-chevron" />
                            </h3>
                            <ul className="footer-hours-list">
                                <li><span>Mon – Fri</span> <span>9:30 AM – 3:30 PM</span></li>
                                <li><span>Saturday</span> <span className="hours-closed">Closed</span></li>
                                <li><span>Sunday</span> <span className="hours-closed">Closed</span></li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className={`footer-collapsible ${openSection === 'contact' ? 'is-open' : ''}`}>
                            <h3 onClick={() => toggleSection('contact')}>
                                Mailing Address <ChevronDown size={18} className="mobile-chevron" />
                            </h3>
                            <div className="footer-contact-info">
                                <div className="contact-item">
                                    <MapPin size={16} className="contact-icon" />
                                    <address>
                                        75 Barrett Dr. #191<br />
                                        Webster, NY 14580
                                    </address>
                                </div>
                                <div className="contact-item">
                                    <Mail size={16} className="contact-icon" />
                                    <a href="mailto:housecallmdforseniors@gmail.com" className="email-link">
                                        housecallmdforseniors@gmail.com
                                    </a>
                                </div>
                                <div className="footer-affiliation">
                                    <img src="/footer/websterChamberOfCommerce.jpg" alt="Webster Chamber of Commerce Member" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-flex">
                        <p>&copy; {new Date().getFullYear()} Senior Medical Care. All rights reserved.</p>
                        <div className="footer-legal">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;