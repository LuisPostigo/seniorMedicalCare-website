import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CheckCircle, Leaf, AlertTriangle } from 'lucide-react';
import './Navbar.css';

const bannerSlides = [
  {
    icon: <CheckCircle size={16} />,
    text: <>Accepting New Patients &amp; Medicare &nbsp;·&nbsp; <Phone size={14} style={{ verticalAlign: '-2px' }} /> <a href="tel:+15858722710" className="banner-slide-link">(585) 872-2710</a></>,
    className: 'banner-slide--patients',
  },
  {
    icon: <Leaf size={16} />,
    text: 'We Are a Proud Green Medical Practice',
    className: 'banner-slide--green',
  },
  {
    icon: <AlertTriangle size={16} />,
    text: <>If this is an emergency, please dial <a href="tel:911" className="banner-slide-link banner-slide-link--bold">911</a></>,
    className: 'banner-slide--emergency',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Auto-rotate banner slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
      {/* Rotating Top Banner */}
      <div className={`navbar-top-banner ${bannerSlides[activeSlide].className}`}>
        <div className="banner-carousel">
          {bannerSlides.map((slide, index) => (
            <div
              key={index}
              className={`banner-slide ${index === activeSlide ? 'banner-slide--active' : ''}`}
            >
              {slide.icon}
              <span>{slide.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container navbar-main">
        <Link to="/" className="navbar-logo" aria-label="Senior Medical Care Home">
          <img src="/carForWebsite.png" alt="Senior Medical Care Logo" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <span className="logo-text">Senior Medical Care</span>
            <span className="logo-subtext">Dr. Luis G. Postigo, MD</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <div className="nav-dropdown">
            <span className="nav-link">About Us</span>
            <div className="dropdown-content">
              <Link to="/about">About the Practice</Link>
              <Link to="/about/provider">Provider: Luis G. Postigo MD</Link>
              <Link to="/about/virtual-meet">Virtual Meet & Greet</Link>
              <Link to="/about/staff">Office Staff</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-content">
              <Link to="/services">All Services</Link>
              <Link to="/services/provided">Services Provided</Link>
              <Link to="/services/equipment">Medicines & Equipment</Link>
              <Link to="/services/labs">To Review my Labs</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <span className="nav-link">New Patient</span>
            <div className="dropdown-content">
              <Link to="/new-patient">Becoming a New Patient</Link>
              <Link to="/new-patient/service-area">Service Area</Link>
              <Link to="/new-patient/insurances">Insurances Accepted</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <span className="nav-link">Billing</span>
            <div className="dropdown-content">
              <Link to="/billing/questions">Billing Questions</Link>
              <Link to="/billing/policies">Financial Policies</Link>
            </div>
          </div>
          <Link to="/faqs" className="nav-link">FAQs</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link">Home</Link>
          <div className="mobile-section">
            <div className="mobile-section-title">About Us</div>
            <Link to="/about" className="mobile-sublink">About the Practice</Link>
            <Link to="/about/provider" className="mobile-sublink">Provider</Link>
            <Link to="/about/virtual-meet" className="mobile-sublink">Virtual Meet & Greet</Link>
            <Link to="/about/staff" className="mobile-sublink">Office Staff</Link>
          </div>
          <div className="mobile-section">
            <div className="mobile-section-title">Services</div>
            <Link to="/services/provided" className="mobile-sublink">Services Provided</Link>
            <Link to="/services/equipment" className="mobile-sublink">Medicines & Equipment</Link>
            <Link to="/services/labs" className="mobile-sublink">Review Labs</Link>
          </div>
          <div className="mobile-section">
            <div className="mobile-section-title">New Patient</div>
            <Link to="/new-patient" className="mobile-sublink">Becoming a New Patient</Link>
            <Link to="/new-patient/service-area" className="mobile-sublink">Service Area</Link>
            <Link to="/new-patient/insurances" className="mobile-sublink">Insurances</Link>
          </div>
          <Link to="/faqs" className="mobile-link">FAQs</Link>
          <div className="mobile-section">
            <div className="mobile-section-title">Billing</div>
            <Link to="/billing/questions" className="mobile-sublink">Billing Questions</Link>
            <Link to="/billing/policies" className="mobile-sublink">Financial Policies</Link>
          </div>
          <Link to="/resources" className="mobile-link">Resources</Link>
          <Link to="/contact" className="mobile-link">Contact Us</Link>
          <div className="mobile-menu-cta">
            <a href="tel:+15858722710" className="mobile-call-btn">
              <Phone size={20} /> Call (585) 872-2710
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;