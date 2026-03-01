import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Printer } from 'lucide-react';
import './services/ServicesProvided.css';

const AccordionItem = ({ title, isOpen, onClick, children }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button className="accordion-header" onClick={onClick} aria-expanded={isOpen}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                        <HelpCircle size={28} />
                    </div>
                    <h3 className="accordion-title" style={{ fontSize: '1.35rem' }}>{title}</h3>
                </div>
                <div className="accordion-icon" style={{ flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
            </button>
            <div className="accordion-content">
                <div className="accordion-body-text" style={{ paddingLeft: '3.5rem', margin: 0 }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqData = [
        {
            question: "Do medical doctors actually make home visits?",
            answer: "Yes, Dr. Postigo is a licensed physician who provides comprehensive medical care in the comfort of your home (which could be your home or a retirement community)."
        },
        {
            question: "Is Dr. Postigo a 'real' doctor?",
            answer: (
                <>
                    Yes, he is a board-certified physician in Internal Medicine, Geriatric Medicine, and Hospice & Palliative Care with many years of experience in primary care and geriatric medicine. <br /><br />
                    To verify Dr. Postigo's license and check his profile with the New York State Government website please visit: <a href="http://www.nydoctorprofile.com/" target="_blank" rel="noopener noreferrer" className="link-highlight">http://www.nydoctorprofile.com/</a>
                </>
            )
        },
        {
            question: "Is Dr. Postigo a Primary Care Doctor or a Specialist?",
            answer: "Both. Dr. Postigo is mainly a specialist in Geriatric Medicine but he will act as your Primary Care Doctor."
        },
        {
            question: "Is this concierge medicine?",
            answer: "No. Dr. Postigo is not a concierge physician. Our office does not charge membership fees or any extra fees to be a patient in our practice. Medical visits are charged to your health insurance."
        },
        {
            question: "Do home visits cost more?",
            answer: "No, Medicare and your insurance cover home visits the same way they cover office visits. Standard copay, co-insurance, and deductibles apply. Dr. Postigo will bill as your Primary Care Doctor."
        },
        {
            question: "Do I have to be disabled or homebound to have a house visit?",
            answer: "No. While many patients have mobility issues, you do not need to be officially homebound to receive home visits from our doctor. You just need to be 65 or older."
        },
        {
            question: "Do I need a referral to see your doctor?",
            answer: "No referral is required to become a patient but you will need to fill out the New Patient Application Form."
        },
        {
            question: "Will I need to switch doctors? Will Dr. Postigo be my primary care physician?",
            answer: "Yes. Dr. Postigo will become your primary care provider (PCP) and will coordinate your care moving forward, replacing your current PCP. You will need to contact your insurance carrier and to list Dr. Postigo as your primary care provider (PCP) before you can be seen."
        },
        {
            question: "What type of patients do you see?",
            answer: "We see patients who are 65 years of age or older in the Greater Rochester, NY area, including Monroe and Wayne Counties."
        },
        {
            question: "Do you make exceptions for patients under 65?",
            answer: "While we understand that disabled and homebound patients of all ages have a need for at-home care, we are not able to see patients under 65. Dr. Postigo is a Geriatrician and focuses his care on seniors only."
        },
        {
            question: "What are some reasons to choose our house call medical services?",
            answer: (
                <ul className="accordion-list" style={{ marginTop: 0, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                    <li>It is difficult or impossible to get out of your house.</li>
                    <li>You are looking for a Primary Care Physician.</li>
                    <li>You are looking for a Geriatrician, a specialist in treating the health of seniors.</li>
                    <li>You have difficulty getting to the doctor's office.</li>
                    <li>You don't want to ask anyone to take you to see your doctor.</li>
                    <li>You have difficulty waiting in a waiting room.</li>
                    <li>You want to avoid exposure to other illnesses.</li>
                </ul>
            )
        }
    ];

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Frequently Asked Questions</h1>
                    <p className="page-subtitle">Find fast answers to common questions about our house call medical practice.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="services-accordion-container" style={{ maxWidth: '1000px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <h2 className="services-section-title" style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>
                            1. About Our Practice
                        </h2>
                        <a
                            href="/FAQs/Frequently Asked Questions 10_2025.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <Printer size={20} /> Print
                        </a>
                    </div>

                    <div className="custom-accordion">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                title={faq.question}
                                isOpen={openIndex === index}
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.answer}
                            </AccordionItem>
                        ))}
                    </div>

                    <div className="text-center bg-subtle p-8 rounded-lg border border-gray-200" style={{ marginTop: '5rem' }}>
                        <h3 className="mb-4">Still have questions?</h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto">
                            If you couldn't find the answer you were looking for, our friendly staff is ready to help you directly.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/contact" className="btn-primary">Contact Us</a>
                            <a href="/new-patient" className="btn-secondary">New Patient Info</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQs;
