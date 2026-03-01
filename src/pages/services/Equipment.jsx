import React, { useState } from 'react';
import {
    Pill,
    RefreshCw,
    FileText,
    Box,
    Truck,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import './ServicesProvided.css';

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

const Equipment = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Medicines & Equipment</h1>
                    <p className="page-subtitle">Ensuring you have the essential medications and supplies you need.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="services-accordion-container">

                    <div style={{ marginBottom: '3rem' }}>
                        <img
                            src="/services/medicines.png"
                            alt="Medication and Supplies"
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: 'var(--radius-lg)',
                                marginBottom: '2rem',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        />
                    </div>

                    <h2 className="services-section-title" style={{ marginTop: '0' }}>
                        <Pill size={40} /> Medication Management
                    </h2>
                    <div className="intro-text" style={{ padding: 0, backgroundColor: 'transparent', borderLeft: 'none', marginBottom: '3rem' }}>
                        <p>
                            The cost of medicine is a very important factor in today's economy. During the first visit, the doctor will review all the medications the patient is taking. If there is an option in treatment and if it is ok with the patient, the cheapest medication will be selected. Sometimes this step is able to save a considerable amount of money in insurance copayments.
                        </p>
                    </div>

                    <div className="custom-accordion" style={{ marginBottom: '4rem' }}>
                        <AccordionItem
                            title="Prescription Refills"
                            icon={<RefreshCw size={32} />}
                            isOpen={openIndex === 0}
                            onClick={() => toggleAccordion(0)}
                        >
                            <p className="accordion-body-text">If you need a medication refill you have 2 options:</p>
                            <ul className="accordion-list" style={{ listStyleType: 'decimal' }}>
                                <li>Call your pharmacy and ask them to contact Dr. Postigo by the electronic prescription system. <strong>(best option)</strong> or by fax at <strong>972-236-5360</strong>.</li>
                                <li>Ask for the prescriptions during your medical visit with the doctor. (If the first option does not apply)</li>
                            </ul>
                            <p className="accordion-body-text" style={{ fontStyle: 'italic', marginTop: '1.5rem', borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                                It can take up to 3 days to refill a medication. Please plan accordingly and contact your pharmacy in advance.
                            </p>
                        </AccordionItem>

                        <AccordionItem
                            title="New Prescriptions"
                            icon={<FileText size={32} />}
                            isOpen={openIndex === 1}
                            onClick={() => toggleAccordion(1)}
                        >
                            <p className="accordion-body-text">If you need a new medication you have 2 options:</p>
                            <ul className="accordion-list" style={{ listStyleType: 'decimal' }}>
                                <li>Call the office and schedule a medical visit with the doctor to discuss new medications <strong>(best option)</strong>.</li>
                                <li>
                                    If you urgently need a new medication, contact Dr. Postigo with your request by:
                                    <ul style={{ listStyleType: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                                        <li>&gt; <strong>Text:</strong> 585-642-4571</li>
                                        <li>&gt; <strong>Email:</strong> <a href="mailto:housecallmdforseniors@gmail.com" className="link-highlight">housecallmdforseniors@gmail.com</a></li>
                                        <li>&gt; <strong>Fax:</strong> 972-236-5360</li>
                                    </ul>
                                </li>
                            </ul>
                        </AccordionItem>
                    </div>

                    <h2 className="services-section-title">
                        <Box size={40} /> Medical Supplies
                    </h2>
                    <div className="intro-text" style={{ padding: 0, backgroundColor: 'transparent', borderLeft: 'none', marginBottom: '3rem' }}>
                        <p>
                            Medical Supplies are items that are disposable (like disposable diapers, glucometer strips to measure glucose, needles, etc).
                        </p>
                    </div>

                    <div className="custom-accordion" style={{ marginBottom: '4rem' }}>
                        <AccordionItem
                            title="Medical Supply Refills"
                            icon={<RefreshCw size={32} />}
                            isOpen={openIndex === 2}
                            onClick={() => toggleAccordion(2)}
                        >
                            <p className="accordion-body-text">If you need a medical supply refill:</p>
                            <ul className="accordion-list" style={{ listStyleType: 'decimal' }}>
                                <li style={{ marginBottom: '1rem' }}>Call your pharmacy or medical supply distributor and ask them to send Dr. Postigo a request for a refill. They will send a special form that needs to be filled by Dr. Postigo.</li>
                                <li>
                                    Ask to contact and send forms to Dr. Postigo by:
                                    <ul style={{ listStyleType: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                                        <li>&gt; <strong>Email:</strong> <a href="mailto:housecallmdforseniors@gmail.com" className="link-highlight">housecallmdforseniors@gmail.com</a></li>
                                        <li>&gt; <strong>Fax:</strong> 972-236-5360</li>
                                    </ul>
                                </li>
                            </ul>
                            <p className="accordion-body-text" style={{ fontStyle: 'italic', marginTop: '1.5rem', borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                                It can take up to 15 days to refill a medical supply since it needs to be approved by your insurance. Please plan accordingly and contact your pharmacy or medical supply distributor in advance.
                            </p>
                        </AccordionItem>

                        <AccordionItem
                            title="New Medical Supplies"
                            icon={<Box size={32} />}
                            isOpen={openIndex === 3}
                            onClick={() => toggleAccordion(3)}
                        >
                            <p className="accordion-body-text">If you need new medical supplies:</p>
                            <ul className="accordion-list" style={{ listStyleType: 'decimal' }}>
                                <li>Call the office and schedule a medical visit with the doctor to discuss new medical supplies needed. <strong>(best option)</strong></li>
                                <li>
                                    If you urgently need a new medical supply, contact Dr. Postigo with your request by:
                                    <ul style={{ listStyleType: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                                        <li>&gt; <strong>Text:</strong> 585-642-4571</li>
                                        <li>&gt; <strong>Email:</strong> <a href="mailto:housecallmdforseniors@gmail.com" className="link-highlight">housecallmdforseniors@gmail.com</a></li>
                                        <li>&gt; <strong>Fax:</strong> 972-236-5360</li>
                                    </ul>
                                </li>
                            </ul>
                        </AccordionItem>
                    </div>

                    <h2 className="services-section-title">
                        <Truck size={40} /> Medical Equipment
                    </h2>
                    <div className="intro-text" style={{ padding: 0, backgroundColor: 'transparent', borderLeft: 'none', marginBottom: '3rem' }}>
                        <p>
                            Medical Equipment is equipment designed for long term use like a hospital bed, a mattress, oxygen, or a wheelchair. They are not disposable.
                        </p>
                    </div>

                    <div className="custom-accordion" style={{ marginBottom: '2rem' }}>
                        <AccordionItem
                            title="New Medical Equipment"
                            icon={<Truck size={32} />}
                            isOpen={openIndex === 4}
                            onClick={() => toggleAccordion(4)}
                        >
                            <p className="accordion-body-text">If you need new medical equipment:</p>
                            <ul className="accordion-list" style={{ listStyleType: 'decimal' }}>
                                <li style={{ marginBottom: '1rem' }}>Call the office and schedule a medical visit <strong>(best option)</strong>.</li>
                                <li style={{ marginBottom: '1rem' }}>
                                    At the visit Dr. Postigo will discuss the different models available for your needs, will do a medical evaluation and in the same day will send the medical evaluation, a prescription and a copy of your medical records to the medical supply distributor of your choice. The medical supply distributor will send all this information to your insurance for approval. This can sometimes be a lengthy process and can take weeks to approve. If approved by your insurance, the medical supply distributor will send Dr. Postigo a special form filled out by them for Dr. Postigo's signature. According to your insurance, sometimes you will have a monthly copayment for 12 months, after this, you own the equipment. Talk to your medical supply distributor before the delivery of the equipment and ask if you will have a monthly copayment.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    If you need the medical equipment and do not plan to go through your insurance, you can go to a medical supply distributor store in person or through the internet and pay for it directly. Most of the times you will not need a prescription from Dr. Postigo.
                                </li>
                                <li>
                                    If you urgently need new medical equipment, contact Dr. Postigo with your request by:
                                    <ul style={{ listStyleType: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                                        <li>&gt; <strong>Text:</strong> 585-642-4571</li>
                                        <li>&gt; <strong>Email:</strong> <a href="mailto:housecallmdforseniors@gmail.com" className="link-highlight">housecallmdforseniors@gmail.com</a></li>
                                        <li>&gt; <strong>Fax:</strong> 972-236-5360</li>
                                    </ul>
                                </li>
                            </ul>
                        </AccordionItem>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Equipment;
