import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="page-wrapper resources-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Senior Resources</h1>
                    <p className="page-subtitle">Educational materials and community support for healthy aging.</p>
                </div>
            </div>

            <main className="container resources-main">

                {/* Enrollment Banner */}
                <div className="enrollment-banner">
                    <h2>Medical Insurance Options</h2>
                    <div className="enrollment-banner-date">
                        Open Enrollment Oct 15 to Dec 7
                    </div>
                    <a
                        href="/resources/printableDocuments/Medical Insurance Options- Enrollment October 15 to December 7.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="enrollment-banner-btn"
                    >
                        <Download size={20} /> Click here to see your options
                    </a>
                </div>

                <div className="resources-intro">
                    <p>Below are some helpful resources for seniors and their families to take advantage of.</p>
                    <p>We also have PDF versions of all our documents available below. Just click on the one you need to open it.<br /><em>(click for Link)</em></p>
                </div>

                {/* External Resources Level */}
                <h2 className="resources-section-title">Community & National Services</h2>
                <div className="resources-grid">

                    <a href="https://grapesc.org/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/grapeLogo.svg" alt="G.R.A.P.E. Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">Greater Rochester Area Partnership for the Elderly (G.R.A.P.E.)</h3>
                            <p className="resource-card-desc">A guide for services in the Monroe County area.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <a href="https://www.rochesterhousing.org/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/rochester-housing-authority.png" alt="Rochester Housing Authority Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">Rochester Housing Authority</h3>
                            <p className="resource-card-desc">NYS public housing serves the five-county Greater Rochester area. Lists available options for people over 50, those disabled, as well as enriched housing.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <a href="https://www.fcscharities.org/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/catholicCharities.svg" alt="Catholic Charities Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">Catholic Charities</h3>
                            <p className="resource-card-desc">Family and Community Services. Coordinates care for community services available in our area.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <a href="https://www.aarp.org/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/AARPlogo.svg" alt="AARP Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">American Association of Retired People (AARP)</h3>
                            <p className="resource-card-desc">Provide discounts and sell Medicare Secondary Insurance policies. They have an interesting magazine.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <a href="https://www.alzstore.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/theAlzheimersStore.png" alt="Alzheimer's Store Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">The Alzheimer's Store</h3>
                            <p className="resource-card-desc">Sells products made for those with Alzheimer's, dementia and their caregivers! Offer a range of Alzheimer’s products to help them live in a safer home environment with a sense of independence.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <a href="https://www.nia.nih.gov/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/nih-nia-logo.svg" alt="NIH NIA Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">Hospice and Palliative Care (National Institute on Aging)</h3>
                            <p className="resource-card-desc">Explains both hospice and palliative care services and what the differences are. Provides medical information to people in plain, easy to understand language.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <a href="https://www.independentliving.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
                        <img src="/resources/independentLivingAids.webp" alt="Independent Living Aids Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">Independent Living Aids for Seniors</h3>
                            <p className="resource-card-desc">Sells useful products for seniors.</p>
                            <span className="resource-card-link-text">Visit Website <ExternalLink size={16} /></span>
                        </div>
                    </a>

                    <div className="resource-card" style={{ cursor: 'default' }}>
                        <img src="/resources/medicare.svg" alt="Medicare Logo" className="resource-card-logo" />
                        <div className="resource-card-content">
                            <h3 className="resource-card-title">Understanding Medicare</h3>
                            <ul className="medicare-sublinks">
                                <li>
                                    <ExternalLink size={16} className="text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer">Getting Started with Medicare: Initial Enrollment</a>
                                        <p>Explains how and when to sign up with Medicare and what it includes.</p>
                                    </div>
                                </li>
                                <li>
                                    <ExternalLink size={16} className="text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" target="_blank" rel="noopener noreferrer">Getting Started with Medicare: Parts of Medicare</a>
                                        <p>An overview of the different parts of Medicare, including Part A (Hospital), Part B (Medical), Part C (Advantage) and Part D (Drug Coverage).</p>
                                    </div>
                                </li>
                                <li>
                                    <ExternalLink size={16} className="text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/difference-between-original-medicare-and-medicare-advantage" target="_blank" rel="noopener noreferrer">Original Medicare vs Medicare Advantage</a>
                                        <p>Gives an overview and explains the difference between Original Medicare and Medicare Advantage Plans.</p>
                                    </div>
                                </li>
                                <li>
                                    <ExternalLink size={16} className="text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <a href="https://www.medicare.gov/plan-compare/#/?year=2024&lang=en" target="_blank" rel="noopener noreferrer">Medicare Plan Finder (SEARCH)</a>
                                        <p>Explores and compares costs of different plans offered in your area for Advantage Plans, Drug Plans, and Medigap policies.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Medicare Videos */}
                <h2 className="resources-section-title">Changing your Medicare Plan</h2>
                <div className="video-grid">
                    <div className="video-card">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/n49kL8S5d0g"
                                title="Medicare Plan Finder Video: Lesson 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-info">
                            <h3>Medicare Plan Finder Video: Lesson 1: How to use</h3>
                            <p>Step by step overview on how to complete a plan search to compare insurance plans offered in your area.</p>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/d-aK9j70P2k"
                                title="Medicare Plan Finder Video: Lesson 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-info">
                            <h3>Medicare Plan Finder Video: Lesson 2: Whats new</h3>
                            <p>Explains the new features to the Medicare Plan Finder added for standard enrollment periods.</p>
                        </div>
                    </div>
                </div>

                {/* Printable Documents Level */}
                <h2 className="resources-section-title">Printable Documents</h2>
                <div className="pdfs-grid">
                    <a href="/newPatient/NEW PATIENT APPLICATION FORM_Fillable-2024 New.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">New Patient Application Form</h3>
                    </a>

                    <a href="/resources/printableDocuments/House Call MD Flyer 2025.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">House Call MD Flyer</h3>
                    </a>

                    <a href="/resources/printableDocuments/Financial Policy_2024.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Financial Policy</h3>
                    </a>

                    <a href="/resources/printableDocuments/Frequently Asked Questions 10_2025.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Frequently Asked Questions</h3>
                    </a>

                    <a href="/resources/printableDocuments/Help with drug payments.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Help with Prescription Drug Costs</h3>
                    </a>

                    <a href="/resources/printableDocuments/How Medicare and Private Insurances work_2022.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">How Medicare and Private Insurances Work</h3>
                    </a>

                    <a href="/resources/printableDocuments/Medicare Supplement (Medigap) Insurance.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">How Medigap Insurance Policies Work</h3>
                    </a>

                    {/* Placeholder link for 'How Medicaid Works' as it lacked a clear file match */}
                    <a href="/resources/printableDocuments/Medicaid Managed Long Term Care Plans.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">How Medicaid Works</h3>
                    </a>

                    <a href="/resources/printableDocuments/Medicaid Managed Long Term Care Plans.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Managed Long Term Care (MLTC) Plans</h3>
                    </a>

                    <a href="/resources/printableDocuments/Medical Insurance Options- Enrollment October 15 to December 7.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Medical Insurance Options- Enrollment</h3>
                    </a>

                    <a href="/resources/printableDocuments/Types of Medical Care in the Home.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Types of Medical Care in the Home</h3>
                    </a>

                    <a href="/resources/printableDocuments/How to get Aides at Home 2024.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">How to get Aides at Home</h3>
                    </a>

                    <a href="/resources/printableDocuments/Home Health Agencies how they work_2022.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Home Health Agencies, How They Work</h3>
                    </a>

                    <a href="/resources/printableDocuments/Medicines, Medical Supplies and Medical Equipment_ 2022.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Medicines, Medical Supplies and Equipment</h3>
                    </a>

                    <a href="/resources/printableDocuments/Nursing Home, Skilled Nurse, Assisted Living .pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Nursing Home, Skilled Nurse, Assisted Living</h3>
                    </a>

                    <a href="/resources/printableDocuments/How to compare Nursing Homes in your area.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">How to Compare Nursing Homes in Your Area</h3>
                    </a>

                    <a href="/resources/printableDocuments/Palliative Care vs Hospice Care_2022.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Palliative Care vs Hospice Care</h3>
                    </a>

                    <a href="/resources/printableDocuments/doh-5003.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">MOLST Form</h3>
                    </a>

                    <a href="/resources/printableDocuments/Planning for the end.pdf" target="_blank" rel="noopener noreferrer" className="pdf-card">
                        <div className="pdf-icon-wrapper"><FileText size={20} /></div>
                        <h3 className="pdf-title">Planning for the End (Affairs)</h3>
                    </a>
                </div>

            </main>
        </div>
    );
};

export default Resources;
