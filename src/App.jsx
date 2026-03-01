import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Provider from './pages/about/Provider';
import VirtualMeet from './pages/about/VirtualMeet';
import Staff from './pages/about/Staff';
import Services from './pages/services/Services';
import ServicesProvided from './pages/services/ServicesProvided';
import Equipment from './pages/services/Equipment';
import Labs from './pages/services/Labs';
import FAQs from './pages/FAQs';
import Appointments from './pages/newPatient/Appointments';
import ServiceArea from './pages/newPatient/ServiceArea';
import Insurances from './pages/newPatient/Insurances';

import BillingQuestions from './pages/billing/BillingQuestions';
import FinancialPolicies from './pages/billing/FinancialPolicies';
import Resources from './pages/Resources';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import './App.css';

// Placeholder Component for pages
const PlaceholderPage = ({ title }) => (
  <div className="container py-16 text-center">
    <h2>{title}</h2>
    <p className="mt-4">This section is currently under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* About Us */}
          <Route path="about" element={<AboutUs />} />
          <Route path="about/provider" element={<Provider />} />
          <Route path="about/virtual-meet" element={<VirtualMeet />} />
          <Route path="about/staff" element={<Staff />} />

          {/* Services */}
          <Route path="services" element={<Services />} />
          <Route path="services/provided" element={<ServicesProvided />} />
          <Route path="services/equipment" element={<Equipment />} />
          <Route path="services/labs" element={<Labs />} />

          {/* FAQs */}
          <Route path="faqs" element={<FAQs />} />

          {/* New Patient */}
          <Route path="new-patient" element={<Appointments />} />
          <Route path="new-patient/service-area" element={<ServiceArea />} />
          <Route path="new-patient/insurances" element={<Insurances />} />

          {/* Billing */}

          <Route path="billing/questions" element={<BillingQuestions />} />
          <Route path="billing/policies" element={<FinancialPolicies />} />

          {/* Resources & Reviews */}
          <Route path="resources" element={<Resources />} />
          <Route path="reviews" element={<Reviews />} />

          {/* Contact Us */}
          <Route path="contact" element={<Contact />} />
          <Route path="contact/info" element={<Contact />} />
          <Route path="contact/hours-location" element={<Contact />} />

          {/* Legal Pages */}
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfUse />} />

          {/* Fallback */}
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
