import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, CalendarX, FileSignature, ShieldAlert, Clock } from 'lucide-react';
import './BillingQuestions.css';

const FinancialPolicies = () => {
    return (
        <div className="page-wrapper billing-questions-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Financial Policies</h1>
                    <p className="page-subtitle">Our commitment to transparency and clear expectations.</p>
                </div>
            </div>

            <main className="container billing-questions-main">
                <div className="billing-questions-grid">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2">

                        <h2 className="faq-section-title">
                            <DollarSign size={32} /> Copayments
                        </h2>
                        <div className="billing-faq-item active" style={{ marginBottom: '3rem', cursor: 'default' }}>
                            <div className="billing-faq-content" style={{ padding: '2rem' }}>
                                <p>
                                    Copayments are expected at the time of each visit unless other arrangements are made. Currently we accept cash, checks, or credit cards. For those who handle the finances of your family member, it is recommended that you set up a credit card auto payment with our office. When a copayment is due, we will charge the credit card on file and email you a receipt. Alternatively, you may choose to send to our office a check to cover future visit copayments. We will notify you when you run out of funds.
                                </p>
                            </div>
                        </div>

                        <h2 className="faq-section-title">
                            <CalendarX size={32} /> Cancellations & Missed Appointments
                        </h2>
                        <div className="billing-faq-item active" style={{ marginBottom: '3rem', cursor: 'default' }}>
                            <div className="billing-faq-content" style={{ padding: '2rem' }}>
                                <p className="mb-4">
                                    All of our visits are scheduled in advance. Please contact the office at least 24 hours in advance if you need to reschedule an appointment because of an unforeseen conflict. We try to make the appointments at times convenient as possible for your schedule, however, because the doctor makes house calls throughout Rochester it takes a lot of planning and effort to calculate the time he will be out to see you. Appointments cannot be canceled on a regular basis.
                                </p>
                                <div className="scammer-alert-box" style={{ padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#FEF2F2', borderColor: '#FECACA' }}>
                                    <p style={{ margin: 0, color: '#991B1B', fontWeight: 600 }}>
                                        If for any reason you are not at a scheduled appointment and the doctor comes out to your home there is a $20 fee to cover travel costs. If you miss 3 appointments without notifying the office, we will no longer be able to follow you as a patient.
                                    </p>
                                </div>
                                <p className="mb-4">
                                    If you need to be seen in between your regular appointments, call the office to schedule a work-in appointment.
                                </p>
                                <p>
                                    If you are going out of town for an extended period of time, please let our office know so we can reschedule your appointment.
                                </p>
                            </div>
                        </div>


                        <h2 className="faq-section-title">
                            <ShieldAlert size={32} /> Insurance Changes
                        </h2>
                        <div className="billing-faq-item active" style={{ marginBottom: '3rem', cursor: 'default' }}>
                            <div className="billing-faq-content" style={{ padding: '2rem' }}>
                                <p className="mb-4">
                                    It is your responsibility to let us know if you change your insurance. If you change insurance, you MUST let the new carrier know that Dr. Postigo is your Primary Care Physician before he sees you at your next visit. If your insurance is not valid during the visit, or you do not have Dr. Postigo listed as your Primary Care Physician, you will be responsible for all charges not covered by the insurance. If at any time you change insurances or copayments you need to notify us, if not, you will be responsible for all charges since we will be billing an old policy that is not working anymore.
                                </p>
                                <p className="mb-4">
                                    We are not involved in your insurance coverage; it is a contract between you and your insurance provider. You are responsible for what your insurance does not cover.
                                </p>
                                <p>
                                    If you have any billing questions, we encourage you to call your insurance, they will explain how your policy works (every policy has different coverage).
                                </p>
                            </div>
                        </div>

                        <h2 className="faq-section-title">
                            <FileSignature size={32} /> Deductibles and Policies
                        </h2>
                        <div className="billing-faq-item active" style={{ marginBottom: '3rem', cursor: 'default' }}>
                            <div className="billing-faq-content" style={{ padding: '2rem' }}>
                                <p>
                                    Almost all insurances, including Medicare, will require you to meet a deductible. A deductible is the amount you need to pay starting January 1st of each year before your insurance starts to pay. This deductible changes every year, please consult your policy to see what your current deductible is. Medicare only covers 80% of the medical charges and you will be responsible for the remaining 20%, unless you have a supplementary insurance that will help you pay this remaining 20%. Insurances only cover certain procedures (like toenail trimming or ear cleaning) every 60 days. If you need these services performed more often, we will be happy to provide this service, but you will be billed out of pocket.
                                </p>
                            </div>
                        </div>

                        <h2 className="faq-section-title">
                            <Clock size={32} /> Accounts Overdue
                        </h2>
                        <div className="billing-faq-item active" style={{ marginBottom: '3rem', cursor: 'default' }}>
                            <div className="billing-faq-content" style={{ padding: '2rem' }}>
                                <p className="mb-4">
                                    Senior Medical Care (Dr. Postigo) sends out bills on a monthly basis for what is not covered by your insurance. Payment of these bills is appreciated within 30 days of receipt. If you have a bill that you are unable to pay in full, please contact our office and we would be happy to set up a payment plan to defer the cost.
                                </p>
                                <p>
                                    Charges that are outstanding more than 60 days will receive a reminder phone call from our billing office to work out a payment plan. In this case payments will need to be received before we can schedule a next visit with Doctor Postigo. If you have an outstanding balance more than 90 days without setting up a payment plan you may be discharged from our practice at our discretion.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Column */}
                    <aside className="billing-sidebar">
                        <div className="sidebar-box">
                            <h3>Helpful Links</h3>
                            <nav className="sidebar-nav">
                                <Link to="/billing/questions" className="sidebar-nav-link group">
                                    Billing Questions <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/new-patient/insurances" className="sidebar-nav-link group">
                                    Insurances Accepted <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                                <Link to="/new-patient" className="sidebar-nav-link group">
                                    Becoming a Patient <ArrowRight size={16} className="sidebar-nav-icon" />
                                </Link>
                            </nav>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
};

export default FinancialPolicies;
