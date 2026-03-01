import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Stethoscope,
    ChevronDown,
    ChevronUp,
    HeartPulse,
    Activity,
    Home,
    Ear,
    ClipboardList,
    ShieldPlus,
    Wind,
    Users,
    ActivitySquare,
    Syringe,
    Laptop,
    TestTube,
    CheckCircle
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

const ServicesProvided = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Services Provided</h1>
                    <p className="page-subtitle">A commitment to excellence when it comes to the level of care we provide.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="services-accordion-container">

                    <div className="intro-text">
                        <p>
                            Whether you are suffering from an unexpected illness or injury, or you simply require general medical attention, <strong>Senior Medical Care</strong> is there for our patients. You can be assured – we have a commitment to excellence when it comes to the level of care we provide.
                        </p>
                    </div>

                    <h2 className="services-section-title">
                        <Stethoscope size={40} /> We offer a large amount of services at home:
                    </h2>

                    <div className="services-grouped-grid">

                        <div className="service-group-card">
                            <h3 className="service-group-title">
                                <Home size={28} /> Visits & General Care
                            </h3>
                            <ul className="service-group-list">
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Medical Visits: Home, Retirement Community</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Annual Routine Wellness Exams</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Follow-up Visit After Hospital Discharge</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Palliative Care</span></li>
                            </ul>
                        </div>

                        <div className="service-group-card">
                            <h3 className="service-group-title">
                                <ClipboardList size={28} /> Assessment & Management
                            </h3>
                            <ul className="service-group-list">
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Geriatric Assessment and Management</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Dementia & Chronic Conditions Management</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Medicine & Pharmacy Management</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Anticoagulation Management: Warfarin</span></li>
                            </ul>
                        </div>

                        <div className="service-group-card">
                            <h3 className="service-group-title">
                                <ActivitySquare size={28} /> Diagnostics & Procedures
                            </h3>
                            <ul className="service-group-list">
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Electrocardiograms & Bladder Scans</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Flu Shots & Joint Injections</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Ear & Hearing Aid Cleaning</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Feeding Tube Replacement</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Skin Lesion Removal with Electrosurgery</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Toenail Trimming & Wound Treatment</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Oxygen Evaluation</span></li>
                            </ul>
                        </div>

                        <div className="service-group-card">
                            <h3 className="service-group-title">
                                <Users size={28} /> Coordination & Supervision
                            </h3>
                            <ul className="service-group-list">
                                <li>
                                    <CheckCircle size={20} className="group-bullet-icon" />
                                    <div>
                                        <span style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>Coordination of:</span>
                                        <ul style={{ paddingLeft: '1rem', listStyleType: 'circle', margin: 0 }}>
                                            <li>Care with other Specialists</li>
                                            <li>In-Home Blood Draw Labs</li>
                                            <li>In-Home X-Rays / Ultrasound</li>
                                            <li>Medical Equipment</li>
                                        </ul>
                                    </div>
                                </li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Supervision of Home Health: Nursing / Physical Therapy / Wound Care / Aides</span></li>
                                <li><CheckCircle size={20} className="group-bullet-icon" /> <span>Supervision of Medicaid: Aides</span></li>
                            </ul>
                        </div>

                    </div>

                    <h2 className="services-section-title" style={{ marginTop: '4rem' }}>
                        <ClipboardList size={40} /> Special Care Categories
                    </h2>

                    <div className="custom-accordion">
                        <AccordionItem
                            title="Geriatric Assessments"
                            icon={<ClipboardList size={32} />}
                            isOpen={openIndex === 0}
                            onClick={() => toggleAccordion(0)}
                        >
                            <p className="accordion-body-text">
                                Comprehensive Geriatric Assessments to help determine patient needs in the home. These assessments are used to help determine both physical and mental abilities.
                            </p>
                            <p className="accordion-body-text">
                                Medication management and cost analysis is part of our assessment. This will benefit the patient by determining which medications are most cost effective. To read more about medication management <Link to="/services/equipment" className="link-highlight">click here</Link>.
                            </p>
                        </AccordionItem>

                        <AccordionItem
                            title="Hospital Follow-Up Care"
                            icon={<Home size={32} />}
                            isOpen={openIndex === 1}
                            onClick={() => toggleAccordion(1)}
                        >
                            <p className="accordion-body-text">You may go to any hospital you choose, and will be followed by a hospital doctor.</p>
                            <p className="accordion-body-text">If you are hospitalized it is necessary to notify the admission staff that Dr. Luis Postigo is your primary care physician so he can be notified when you are discharged.</p>
                            <p className="accordion-body-text">Dr. Postigo will see you within a week of being discharged from the hospital to make sure you have everything you need following a hospital stay and to make any needed changes in your medicines.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Home Health Supervision"
                            icon={<Users size={32} />}
                            isOpen={openIndex === 2}
                            onClick={() => toggleAccordion(2)}
                        >
                            <p className="accordion-body-text">Dr. Postigo works with many different home health agencies in Rochester to provide nursing and aide service to our patients who qualify. We also work with palliative care agencies.</p>
                            <p className="accordion-body-text">The doctor will supervise the care of these agencies to make sure it is the most effective for each patient.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Toes & Ears"
                            icon={<Ear size={32} />}
                            isOpen={openIndex === 3}
                            onClick={() => toggleAccordion(3)}
                        >
                            <p className="accordion-body-text">The doctor is able to clean ears and hearing aids so that our patients are better able to hear what is being said around them or on the phone.</p>
                            <p className="accordion-body-text">Dr. Postigo also trims toenails for patients.</p>
                            <p className="accordion-body-text" style={{ fontStyle: 'italic', marginTop: '1.5rem', opacity: 0.8 }}>Some insurances require an additional copayment or coinsurance for these procedures.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Diagnostic Services"
                            icon={<Activity size={32} />}
                            isOpen={openIndex === 4}
                            onClick={() => toggleAccordion(4)}
                        >
                            <p className="accordion-body-text">Our physician is able to give patients Electrocardiograms in the comfort of their own homes.</p>
                            <p className="accordion-body-text">We are also able to provide bladder scans to more accurately treat our patients.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Chronic Condition Management"
                            icon={<HeartPulse size={32} />}
                            isOpen={openIndex === 5}
                            onClick={() => toggleAccordion(5)}
                        >
                            <p className="accordion-body-text">Dr. Postigo addresses long term health issues to improve quality of life for our patients like:</p>
                            <ul className="accordion-list" style={{ listStyleType: 'disc' }}>
                                <li><strong>Advanced Care Planning:</strong> Documentation of preferences for future medical care.</li>
                                <li><strong>Cognitive Impairment Assessment:</strong> Evaluation of memory to identify potential problems.</li>
                                <li><strong>Depression Screening</strong></li>
                                <li><strong>Wellness Visits:</strong> To develop a personalized prevention plan focused in health risk assessment.</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem
                            title="Oxygen and Circulation"
                            icon={<Wind size={32} />}
                            isOpen={openIndex === 6}
                            onClick={() => toggleAccordion(6)}
                        >
                            <p className="accordion-body-text">We evaluate oxygen levels for our patients who are having respiratory problems. This is called pulse oxymetry.</p>
                            <p className="accordion-body-text">The Doctor will order oxygen for any patients who need it.</p>
                            <p className="accordion-body-text">Also, the doctor can evaluate circulation of the lower extremities if needed.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Coordination of Care"
                            icon={<ShieldPlus size={32} />}
                            isOpen={openIndex === 7}
                            onClick={() => toggleAccordion(7)}
                        >
                            <p className="accordion-body-text">Senior Medical Care will coordinate your care with other physicians and services that you currently use or would be beneficial.</p>
                            <p className="accordion-body-text">We coordinate care with other specialists, pharmacies that deliver medications to the home, and medical equipment companies that deliver equipment and oxygen to homes.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Joints & Skin"
                            icon={<ActivitySquare size={32} />}
                            isOpen={openIndex === 8}
                            onClick={() => toggleAccordion(8)}
                        >
                            <p className="accordion-body-text">Having pain in your joints? Dr. Postigo is able to give patients joint shots to help alleviate any pain they are experiencing.</p>
                            <p className="accordion-body-text">He is also able to remove skin tags and lesions using electro-surgery.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="Immunizations"
                            icon={<Syringe size={32} />}
                            isOpen={openIndex === 9}
                            onClick={() => toggleAccordion(9)}
                        >
                            <p className="accordion-body-text">Every flu season Dr. Postigo is one of the first providers to offer his patient's a flu shot. This helps prevent the flu before the first case has been detected in our area - giving you the advantage.</p>
                            <p className="accordion-body-text">Flu shots are good for 1 year from the date they are given.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="In-Home X-Rays & Ultrasounds"
                            icon={<Laptop size={32} />}
                            isOpen={openIndex === 10}
                            onClick={() => toggleAccordion(10)}
                        >
                            <p className="accordion-body-text">We currently work with a mobile x-ray provider who is able to do ultrasounds, cardiac echocardiograms and x-rays in your own home.</p>
                            <p className="accordion-body-text">This eliminates the need to go out of the home to get these services done. They are not able to provide CATscans or MRIs in the home.</p>
                        </AccordionItem>

                        <AccordionItem
                            title="At-Home Blood Draws"
                            icon={<TestTube size={32} />}
                            isOpen={openIndex === 11}
                            onClick={() => toggleAccordion(11)}
                        >
                            <p className="accordion-body-text">We work with mobile laboratory services who can draw blood at home. This is especially convenient for patients on Coumadin.</p>
                            <p className="accordion-body-text">If you are still able to go to the lab, the doctor is more than happy to provide you with a prescription to take with you to the lab.</p>
                        </AccordionItem>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesProvided;
