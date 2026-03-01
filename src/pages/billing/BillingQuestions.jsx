import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BillingQuestions.css';

const billingFaqs = [
    {
        question: "What if I get a new insurance card, number or my copay changes?",
        answer: "If at any point your insurance carrier, copayments, or policy number changes please notify our office as soon as possible. If there is a change in your policy and we have not been notified it may delay your claims being paid and result in you being billed as not having any insurance. Send us a copy of your new card by email or mail or have it available for the doctor to copy at the next visit."
    },
    {
        question: "Will I receive a bill?",
        answer: "You will receive a bill for any amount your insurance does not cover or any copayments you are responsible for. If your insurance covers the full amount of the visit you will not receive a bill from us."
    },
    {
        question: "When do you send bills?",
        answer: "You will receive a bill if your insurance company does not cover the charges billed to them. Our office sends out bills monthly. Generally, it takes from 45 to 60 days to obtain payment from an insurance carrier. If there is any delay in payment from your insurance carrier you may see old claims on your statement."
    },
    {
        question: "I received a notice that my insurance company has paid on my bill -- but I can't understand how they calculated their payment amount. Do you know?",
        answer: "If we have received any such information from your insurance company, we'll be glad to share it with you. However, for answers to any questions about insurance payments, deductibles, or co-payments, co-insurance, you need to check with your insurance company."
    },
    {
        question: "How do you collect copayments?",
        answer: "If you have a copayment with your insurance it will be collected at the time of the visit. You can set up a credit card on file (preferred) that we can process after the visit or you can pay Dr. Postigo at the time of the visit."
    },
    {
        question: "How do you collect co-insurance?",
        answer: "Co-insurance is the amount you owe after your insurances have processed your claims. It will be billed to you after all your insurance plans have reviewed and processed your claims. You will be responsible for any remaining allowable amounts not covered by your insurance. You can call our office and let them know to use your credit card on file and the amount to charge or mail in your payment to our office."
    }
];

const BillingQuestions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="page-wrapper billing-questions-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Billing Questions</h1>
                    <p className="page-subtitle">Clear answers to help you understand your statements and payments.</p>
                </div>
            </div>

            <main className="container billing-questions-main">
                <div className="billing-questions-grid">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2">

                        {/* Space for an image as requested */}
                        <div className="billing-questions-image">
                            {/* NOTE: You can replace this src with an actual image in the public folder like '/billing-image.jpg' */}
                            <img
                                src="/newPatient/officePicture.jpg"
                                alt="Senior Medical Care Billing Support"
                            />
                        </div>

                        <div className="scammer-alert-box">
                            <h2 className="scammer-alert-header">
                                <AlertTriangle size={28} />
                                BE AWARE OF SCAMMERS!
                            </h2>
                            <div className="scammer-alert-content">
                                <p>
                                    If you receive a request to pay for a visit by text or email, it's most likely <strong>NOT</strong> from our office. After your visit has processed, any balance you owe will be sent to you by mail in the form of an official statement from our office.
                                </p>
                                <p>
                                    We do <strong>NOT</strong> use a billing company or any 3rd party collection agency. All payments should be sent directly to:
                                    <br /><strong>75 Barrett Dr, # 191, Webster, NY 14580.</strong>
                                </p>
                                <p>
                                    If you are ever unsure, please call our office at <strong>585-872-2710</strong> to confirm. We are happy to help.
                                </p>
                            </div>
                        </div>

                        <h2 className="faq-section-title">Frequently Asked Billing Questions</h2>

                        <div className="billing-faq-list">
                            {billingFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`billing-faq-item ${openIndex === index ? 'active' : ''}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        className="billing-faq-header"
                                        aria-expanded={openIndex === index}
                                    >
                                        <span>{faq.question}</span>
                                        {openIndex === index ? (
                                            <ChevronUp size={24} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                        ) : (
                                            <ChevronDown size={24} style={{ flexShrink: 0, color: 'var(--text-muted)' }} />
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="billing-faq-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="billing-sidebar">
                        <div className="sidebar-box">
                            <h3>Helpful Links</h3>
                            <nav className="sidebar-nav">
                                <Link to="/billing" className="sidebar-nav-link group">
                                    Billing Overview <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/billing/policies" className="sidebar-nav-link group">
                                    Financial Policies <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/new-patient/insurances" className="sidebar-nav-link group">
                                    Insurances Accepted <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                            </nav>
                        </div>

                        <div className="sidebar-action-box">
                            <PhoneCall size={32} />
                            <h3>Need to Talk?</h3>
                            <p>Our dedicated billing team is ready to help explain your EOB or official statement.</p>
                            <a href="tel:+15858722710" className="sidebar-action-btn">
                                Call (585) 872-2710
                            </a>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
};

export default BillingQuestions;
