import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, Printer, Globe, AlertTriangle, AlertCircle, ExternalLink, Star } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">We're here to answer your questions and coordinate your care.</p>
                </div>
            </div>

            <div className="container content-section">

                {/* Emergency Alert */}
                <div className="contact-emergency">
                    <AlertTriangle size={24} />
                    Dial 911 in Case of Medical Emergency
                </div>

                <div className="contact-image-container">
                    <img
                        src="/navbar/LuisOnThePhone.jpg"
                        alt="Senior Medical Care Contact Support"
                    />
                </div>

                <div className="about-grid">
                    <div className="text-content">

                        <h2>Currently Accepting New Patients</h2>

                        <div className="contact-email-box">
                            <h3>Have a question for our office?</h3>
                            <p>Send us an email!</p>

                            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:housecallmdforseniors@gmail.com'; }}>
                                <button type="submit" className="btn-primary">
                                    <Mail size={18} /> Send Email
                                </button>
                                <p className="contact-guardrail-note" style={{ fontSize: '0.85rem', color: '#b91c1c', marginTop: '1rem', fontStyle: 'italic' }}>
                                    * Please do not send sensitive medical information through this form or email.
                                </p>
                            </form>

                            <div className="contact-insurance-note">
                                <strong>Important:</strong> Communications by text, email or phone are now covered and will be billed to your insurance. Contact your insurance carrier for details.
                            </div>
                        </div>

                        <h2 className="contact-methods-heading">Other Ways to Contact Us</h2>
                        <div className="contact-grid-modern">

                            {/* Primary Contact Row */}
                            <div className="contact-grid-row">
                                {/* Phone Box */}
                                <div className="contact-box">
                                    <div className="contact-box-layout">
                                        <div className="contact-box-icon">
                                            <Phone size={24} />
                                        </div>
                                        <div className="contact-box-main">
                                            <h3 className="contact-box-title">Office Phone</h3>
                                            <div className="contact-box-content">
                                                <a href="tel:+15858722710" className="contact-box-value">(585) 872-2710</a>
                                                <p className="contact-box-subtitle">For general inquiries and scheduling</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Box */}
                                <div className="contact-box contact-box--alert">
                                    <div className="contact-box-layout">
                                        <div className="contact-box-icon">
                                            <MessageSquare size={24} />
                                        </div>
                                        <div className="contact-box-main">
                                            <div className="contact-box-title-wrapper">
                                                <h3 className="contact-box-title">Text Only</h3>
                                                <span className="contact-box-badge">No Phone Calls</span>
                                            </div>
                                            <div className="contact-box-content">
                                                <a href="sms:+15856424571" className="contact-box-value">(585) 642-4571</a>
                                                <div className="contact-box-rules">
                                                    <ul>
                                                        <li>Please list name of patient.</li>
                                                        <li>NO Pictures or Calls.</li>
                                                        <li>Dr. Postigo will send a secure link when pictures or videos are necessary.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Contact Row */}
                            <div className="contact-grid-row contact-grid-row--3">
                                {/* Email Box */}
                                <div className="contact-box contact-box--small">
                                    <div className="contact-box-icon contact-box-icon--secondary">
                                        <Mail size={20} />
                                    </div>
                                    <h3 className="contact-box-title">Email</h3>
                                    <a href="mailto:housecallmdforseniors@gmail.com" className="contact-box-value-small">housecallmdforseniors<wbr />@gmail.com</a>
                                </div>

                                {/* Fax Box */}
                                <div className="contact-box contact-box--small">
                                    <div className="contact-box-icon contact-box-icon--secondary">
                                        <Printer size={20} />
                                    </div>
                                    <h3 className="contact-box-title">Fax</h3>
                                    <span className="contact-box-value-small contact-value-plain">972-236-5360</span>
                                </div>

                                {/* Website Box */}
                                <div className="contact-box contact-box--small">
                                    <div className="contact-box-icon contact-box-icon--secondary">
                                        <Globe size={20} />
                                    </div>
                                    <h3 className="contact-box-title">Website</h3>
                                    <a href="https://www.housecallmdforseniors.com" target="_blank" rel="noopener noreferrer" className="contact-box-value-small">www.housecallmdforseniors.com</a>
                                </div>
                            </div>

                        </div>

                        <div className="contact-oncall">
                            <AlertCircle size={28} />
                            <div>
                                <h2>On-Call for You</h2>
                                <p>
                                    Dr. Postigo is on-call 24/7 meaning you don't need to go through an answering service after-hours, weekends or holidays. He is always available to you in an emergency so please use your best judgment when calling his emergency line. If it is not an emergency, please contact him by email or text during business hours.
                                </p>
                            </div>
                        </div>

                        <h2 className="contact-reviews-heading">Reviews &amp; Feedback</h2>
                        <div className="contact-reviews">
                            <div className="contact-review-card">
                                <Star size={24} style={{ color: '#eab308' }} />
                                <div>
                                    <p>If you want to leave a nice review for Dr. Postigo, please follow our link to Google Reviews.</p>
                                    <a href="https://g.page/r/your-google-review-link" target="_blank" rel="noopener noreferrer">
                                        Leave a Review <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                            <div className="contact-review-card">
                                <AlertCircle size={24} style={{ color: '#94a3b8' }} />
                                <div>
                                    <p>If you want to make a complaint about Dr. Postigo, please follow the link to the NYS Department of Education, Department of Health.</p>
                                    <a href="https://www.health.ny.gov/professionals/doctors/conduct/file_a_complaint.htm" target="_blank" rel="noopener noreferrer">
                                        File a Complaint <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="sidebar">

                        {/* Office Hours */}
                        <div className="sidebar-card mb-8">
                            <h3 className="sidebar-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                                <Clock size={24} /> Office Hours
                            </h3>
                            <p className="contact-card__note" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                                Our office is located in Webster, however we exclusively see patients in their homes and do not have a clinic where patients are seen.
                            </p>
                            <ul className="contact-hours-list">
                                <li className="contact-hours-row">
                                    <span>Mon – Thu</span>
                                    <span>9:00 am – 2:00 pm</span>
                                </li>
                                <li className="contact-hours-row">
                                    <span>Friday</span>
                                    <span>9:00 am – 12:00 pm</span>
                                </li>
                                <li className="contact-hours-row">
                                    <span>Saturday</span>
                                    <span className="contact-hours-closed">Closed</span>
                                </li>
                                <li className="contact-hours-row">
                                    <span>Sunday</span>
                                    <span className="contact-hours-closed">Closed</span>
                                </li>
                            </ul>
                            <div className="contact-hours-note">
                                Office is closed daily from 12:00 – 12:30 pm
                            </div>
                        </div>

                        {/* Dr Postigo Hours */}
                        <div className="sidebar-card contact-dr-hours mb-8">
                            <h3 className="sidebar-title" style={{ margin: 0 }}>Dr. Postigo's Hours</h3>
                            <p className="contact-dr-visit-label">House Call Patient Visits</p>

                            <ul className="contact-hours-list">
                                <li className="contact-hours-row">
                                    <span>Mon – Fri</span>
                                    <span>9:30 am – 3:30 pm</span>
                                </li>
                                <li className="contact-hours-row">
                                    <span>Saturday</span>
                                    <span className="contact-hours-closed">Closed</span>
                                </li>
                                <li className="contact-hours-row">
                                    <span>Sunday</span>
                                    <span className="contact-hours-closed">Closed</span>
                                </li>
                            </ul>

                            <div style={{ marginTop: '1.5rem' }}>
                                <div className="contact-dr-note">
                                    <strong>After Hours / Weekends / On-Call</strong>
                                    <p>Available by phone for emergencies only.</p>
                                </div>
                                <div className="contact-dr-note" style={{ marginTop: '1rem' }}>
                                    <strong>For Refills and Non-Emergencies</strong>
                                    <p>Wait until Monday. Non-emergencies will be handled during normal working hours.</p>
                                </div>
                            </div>
                        </div>

                        {/* Location / Service Area */}
                        <div className="sidebar-card mb-8">
                            <h3 className="sidebar-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                                <MapPin size={24} /> Mailing Address
                            </h3>
                            <address className="contact-address">
                                75 Barrett Dr. # 191<br />
                                Webster, NY 14580
                            </address>

                            <div className="contact-service-divider">
                                <h3>Service Locations</h3>
                                <p className="contact-service-counties">Servicing Monroe and Wayne Counties</p>
                                <p className="contact-service-desc">We make housecalls to seniors in the following areas. Click to see the map of the areas we currently service.</p>

                                <a href="/newPatient/New-Boundary-Map-2019.png" target="_blank" rel="noopener noreferrer" className="contact-map-link">
                                    <img
                                        src="/newPatient/New-Boundary-Map-2019.png"
                                        alt="Service Area Boundary Map"
                                    />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
