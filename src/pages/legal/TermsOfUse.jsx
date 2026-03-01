import React from 'react';
import './LegalPages.css';

const TermsOfUse = () => {
    return (
        <div className="page-wrapper legal-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Terms of Use</h1>
                    <p className="page-subtitle">Rules and guidelines for using our website.</p>
                </div>
            </div>

            <main className="legal-main">
                <div className="legal-content">
                    <p className="legal-last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Acceptance of the Terms of Use</h2>
                    <p>
                        These terms of use are entered into by and between you and Senior Medical Care - Dr. Luis G. Postigo, MD. The following terms and conditions govern your access to and use of our website, including any content, functionality, and services offered on or through this site.
                    </p>

                    <h2>2. Medical Disclaimer (Not Medical Advice)</h2>
                    <p>
                        <strong>The information provided on this website is for general informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</strong>
                    </p>
                    <p>
                        Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Use of this website does not establish a doctor-patient relationship between you and Dr. Luis G. Postigo or Senior Medical Care. In the case of a medical emergency, please call 911 immediately.
                    </p>

                    <h2>3. Intellectual Property Rights</h2>
                    <p>
                        The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Senior Medical Care, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>

                    <h2>4. Prohibited Uses</h2>
                    <p>You may use the website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the website:</p>
                    <ul>
                        <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                        <li>To impersonate or attempt to impersonate Senior Medical Care, a Senior Medical Care employee, another user, or any other person or entity.</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm Senior Medical Care or users of the website.</li>
                    </ul>

                    <h2>5. Disclaimer of Warranties</h2>
                    <p>
                        Your use of the website, its content, and any services or items obtained through the website is at your own risk. The website is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
                    </p>

                    <h2>6. Limitation on Liability</h2>
                    <p>
                        In no event will Senior Medical Care, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites.
                    </p>

                    <h2>7. Changes to the Terms of Use</h2>
                    <p>
                        We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms of Use means that you accept and agree to the changes.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default TermsOfUse;
