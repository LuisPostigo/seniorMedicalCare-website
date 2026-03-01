import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    UserPlus,
    FileText,
    MapPin,
    CreditCard,
    User,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Download,
    ArrowRight,
    Map
} from 'lucide-react';
import './Appointments.css';

const AccordionItem = ({ title, icon, children, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button className="accordion-header" onClick={onClick} aria-expanded={isOpen}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary)', display: 'flex' }}>
                        {icon}
                    </div>
                    <h3 className="accordion-title">{title}</h3>
                </div>
                <div className="accordion-icon">
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
            </button>
            <div className="accordion-content">
                {children}
            </div>
        </div>
    );
};

const Appointments = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="page-wrapper appointments-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Becoming a New Patient</h1>
                    <p className="page-subtitle">At Senior Medical Care we try to make becoming a patient with us as easy as possible.</p>
                </div>
            </div>

            <main className="container appointments-main">
                <div className="appointments-grid">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2">

                        <div className="appointments-intro">
                            <div className="icon-container">
                                <UserPlus size={28} className="icon-primary" color="var(--primary)" />
                            </div>
                            <div>
                                <h2>Welcome to Our Practice</h2>
                                <p>We are dedicated to providing compassionate, comprehensive medical care directly to you. Start your journey with us by completing the steps below.</p>
                            </div>
                        </div>

                        <div className="appointments-featured-image">
                            <img
                                src="/newPatient/office_picture.png"
                                alt="Senior Medical Care Office"
                            />
                        </div>

                        <div className="process-text">
                            <p><strong>Step 1:</strong> Please make sure you have checked to see if we accept your insurance and that we currently see patients in your area by exploring the prerequisites section.</p>
                        </div>

                        <h2 className="section-title">
                            <CheckCircle size={32} /> Prerequisites
                        </h2>

                        <div className="prerequisites-container">
                            <div className="prerequisite-row">
                                <div className="prerequisite-content">
                                    <CreditCard size={32} color="var(--primary)" />
                                    <div>
                                        <h3>Insurances Accepted</h3>
                                        <p>Verify that we accept your current provider.</p>
                                    </div>
                                </div>
                                <Link to="/new-patient/insurances" className="btn-secondary">Check Insurances</Link>
                            </div>

                            <hr className="prerequisite-divider" />

                            <div className="prerequisite-row">
                                <div className="prerequisite-content">
                                    <MapPin size={32} color="var(--primary)" />
                                    <div>
                                        <h3>Service Area Map</h3>
                                        <p>Ensure you are within our home-visit geographic boundaries.</p>
                                    </div>
                                </div>
                                <Link to="/new-patient/service-area" className="btn-secondary">Check Service Area</Link>
                            </div>
                        </div>

                        <h2 className="section-title">
                            <FileText size={32} /> Information Needed
                        </h2>

                        <div className="custom-accordion">
                            <AccordionItem
                                title="Patient Information"
                                icon={<User size={32} />}
                                isOpen={openIndex === 0}
                                onClick={() => toggleAccordion(0)}
                            >
                                <ul className="accordion-list" style={{ listStyleType: 'disc' }}>
                                    <li>Full Name</li>
                                    <li>Date of birth</li>
                                    <li>Address</li>
                                    <li>Phone Number(s) - <em>even if we will not be using it</em></li>
                                    <li>Email address</li>
                                    <li>Social Security Number</li>
                                    <li>All active insurance numbers, including Traditional Medicare Number</li>
                                    <li>Who is the current doctor? Fax #?</li>
                                    <li>Emergency contact info</li>
                                </ul>
                            </AccordionItem>

                            <AccordionItem
                                title="Payment Information"
                                icon={<CreditCard size={32} />}
                                isOpen={openIndex === 1}
                                onClick={() => toggleAccordion(1)}
                            >
                                <p className="accordion-body-text">Please ensure you have all payment and billing information ready, including secondary forms of insurance if applicable.</p>
                            </AccordionItem>

                            <AccordionItem
                                title="Caregiver Info (If Applicable)"
                                icon={<UserPlus size={32} />}
                                isOpen={openIndex === 2}
                                onClick={() => toggleAccordion(2)}
                            >
                                <ul className="accordion-list" style={{ listStyleType: 'disc' }}>
                                    <li>Full Name</li>
                                    <li>Address</li>
                                    <li>Home, Mobile Phone Number(s)</li>
                                    <li>Email Address</li>
                                    <li>Preferred method of communication?</li>
                                </ul>

                                <p className="accordion-body-text" style={{ marginTop: '1.5rem', fontWeight: 600 }}>Do you pay the patient's bills and help with their mail? (Y or N)</p>
                                <p className="accordion-body-text" style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--secondary)' }}>
                                    If not, who does? Provide name, relationship to patient, address and phone number of contact.
                                </p>

                                <p className="accordion-body-text" style={{ marginTop: '1.5rem', fontWeight: 600 }}>Do you make the patient's appointments? (Y or N)</p>
                                <p className="accordion-body-text" style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--secondary)' }}>
                                    If not, who does? Provide name, relationship to patient, and phone number of contact.
                                </p>
                            </AccordionItem>
                        </div>

                        <h2 className="section-title">
                            <Download size={32} /> Application Forms
                        </h2>

                        <div className="forms-grid">
                            <div className="form-card">
                                <div>
                                    <h3>Digital Application Form</h3>
                                    <p>Fillable directly on your Computer. This is the best and quickest option for applying to the practice.</p>
                                </div>
                                <a href="/newPatient/NEW PATIENT APPLICATION FORM_Fillable-2024 New.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary block w-full">
                                    Download Fillable PDF
                                </a>
                            </div>

                            <div className="form-card">
                                <div>
                                    <h3>Printable Application Form</h3>
                                    <p>To be Printed Only. Download this version to print and fill out the form entirely by hand.</p>
                                </div>
                                <a href="/newPatient/PRINT ONLY -NEW PATIENT APPLICATION FORM_Fillable-2024 New.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary block w-full">
                                    Download Print PDF
                                </a>
                            </div>
                        </div>

                        <div className="process-text">
                            <p><strong>See if you are Eligible</strong> by sending us the Application form by email (best and quickest option) or by mail.</p>
                            <p>Once we receive your information, our team will review and verify the details provided on your form. After verification, you will receive a call from our office to either confirm your acceptance into the practice or request any missing information.</p>
                            <p>If accepted, you will be provided with our New Patient Consent forms to complete. If you have a Medicare Advantage HMO plan, you will need to update your primary care physician to Dr. Postigo with your insurance carrier <em>(do not do this before you are accepted into our practice)</em>. These steps must be completed before your first appointment can be scheduled.</p>
                        </div>

                        <div className="final-banner">
                            <p>Welcome, Dr. Postigo looks forward to becoming your primary care physician.</p>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="appointments-sidebar">
                        <div className="sidebar-box">
                            <h3>Resources</h3>
                            <nav className="sidebar-nav">
                                <Link to="/new-patient/insurances" className="sidebar-nav-link group">
                                    Insurances Accepted <ArrowRight size={16} className="sidebar-nav-icon" />
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
                            <Map size={32} />
                            <h3>Ready to schedule?</h3>
                            <p>Once your application is submitted and approved, our team is ready to assist you closely with your transition.</p>
                            <Link to="/contact" className="sidebar-action-btn">
                                Contact Us
                            </Link>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
};

export default Appointments;
