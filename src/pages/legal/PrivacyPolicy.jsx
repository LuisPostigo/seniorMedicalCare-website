import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="page-wrapper legal-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Privacy Policy</h1>
                    <p className="page-subtitle">How we collect, use, and protect your information.</p>
                </div>
            </div>

            <main className="legal-main">
                <div className="legal-content">
                    <p className="legal-last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Senior Medical Care - Dr. Luis G. Postigo, MD ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </p>

                    <h2>2. Health Information & HIPAA</h2>
                    <p>
                        <strong>IMPORTANT:</strong> This website is intended for general informational purposes. Please do not submit confidential medical information, Protected Health Information (PHI), or urgent medical requests through any forms on this website.
                    </p>
                    <p>
                        Any submission of information through this website does not automatically establish a physician-patient relationship. For secure transmission of medical records or specific health inquiries, please contact our office directly via phone at (585) 872-2710.
                    </p>

                    <h2>3. Information We Collect</h2>
                    <p>We may collect several types of information from and about users of our website, including:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline, only when voluntarily submitted by you (e.g., via a contact form).</li>
                        <li><strong>Usage Details:</strong> Details of your visits to our website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the website.</li>
                        <li><strong>Device Information:</strong> Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
                    </ul>

                    <h2>4. How We Use Your Information</h2>
                    <p>We use information that we collect about you or that you provide to us:</p>
                    <ul>
                        <li>To present our website and its contents to you.</li>
                        <li>To provide you with information or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                        <li>To notify you about changes to our website or any services we offer.</li>
                    </ul>

                    <h2>5. Data Security</h2>
                    <p>
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
                    </p>

                    <h2>6. Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                        <br /><br />
                        <strong>Senior Medical Care</strong><br />
                        75 Barrett Dr. #191<br />
                        Webster, NY 14580<br />
                        Phone: (585) 872-2710<br />
                        Email: housecallmdforseniors@gmail.com
                    </p>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
