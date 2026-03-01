import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';
import './Home.css';

const heroImages = [
    '/navbar/LuisEnteringHome.jpg',
    '/navbar/LuisOnThePhone.jpg',
    '/navbar/Luis_snow.jpg',
    '/navbar/Luis_walking_snow.jpg',
    '/navbar/luisDriving.jpg',
    '/navbar/luis_closeup.jpg',
    '/navbar/stetoscope_closeup.jpg'
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                {/* Background Image Carousel */}
                <div className="hero-bg-carousel">
                    {heroImages.map((src, index) => (
                        <div
                            key={src}
                            className={`hero-bg-slide ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${src})` }}
                        />
                    ))}
                </div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Dr. Postigo will come Right to your Home!</h1>

                        <div className="hero-subtitle">
                            <p className="hero-question">Is it difficult to get to your doctor?</p>
                            <p className="hero-description">
                                Dr. Postigo is a Geriatrician that see patients who are 65 or older in the Rochester, NY area.
                                He offers state-of-the-art medical care in the comfort and privacy of your home.
                                <strong> You must be enrolled in our practice for Dr. Postigo to see you in your home.</strong>
                            </p>
                        </div>

                        <div className="hero-trust-badge">
                            <ShieldCheck size={20} className="text-accent" />
                            <span>Accepting Medicare & Major Insurances</span>
                        </div>

                        <div className="hero-actions">
                            <Link to="/new-patient" className="btn-primary btn-lg shadow-xl">
                                <UserPlus size={20} className="mr-2" style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-3px' }} />
                                Become a new patient
                            </Link>
                            <div className="service-area-container">
                                <p className="service-area-text">
                                    Servicing Monroe and Wayne Counties.<br />
                                    <Link to="/new-patient/service-area" className="map-link">See service area map</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="quick-links-section">
                <div className="container quick-links-grid">
                    {/* ADDED 'green-card' CLASS */}
                    <div className="quick-card no-hover green-card">
                        <div className="quick-card-icon">
                            <img src="/green.png" alt="Senior Medical Care operates as a paperless, green medical practice using solar energy" className="green-icon" />
                        </div>
                        <h3>We are Green!</h3>
                        <p>
                            We are a paperless, green medical practice using solar panels to generate 100% of our office's electricity.
                            Dr. Postigo also uses an electric car to provide house calls, doing our part to minimize our carbon footprint.
                        </p>
                    </div>

                    <Link to="/services/provided" className="quick-card">
                        <div className="quick-card-icon"><Stethoscope size={32} /></div>
                        <h3>Our Services</h3>
                        <p>Comprehensive primary care, chronic disease management, and wellness exams.</p>
                        <span className="quick-card-link">Learn More <ArrowRight size={16} /></span>
                    </Link>

                    <Link to="/about/provider" className="quick-card">
                        <div className="quick-card-icon"><ShieldCheck size={32} /></div>
                        <h3>Meet The Doctor</h3>
                        <p>Get to know Dr. Luis G. Postigo, MD. and his commitment to senior care.</p>
                        <span className="quick-card-link">Learn More <ArrowRight size={16} /></span>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about-preview-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="/luisPostigo/luisGPostigo_standing.jpg" alt="Dr. Luis G. Postigo, MD standing in his medical office, providing expert geriatric house calls in Rochester, NY" className="rounded-image shadow-lg" />
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">Welcome to Senior Medical Care</h2>
                            <div className="about-description">
                                <p>Senior Medical Care is a medical practice that is dedicated exclusively to making house calls to seniors at their homes or retirement communities.</p>
                                <p>Most of our patients have trouble leaving their homes, but you do not have to be home bound to qualify for our services.</p>
                                <p>Our practice believes that accessible, easy to understand medical care is important to patients as well as their families and caregivers. Our staff takes the time to get to know our patients with the goal of providing the best medical care.</p>
                                <p>Home visits are covered by all insurances and no extra cost is added by our practice. Medicare and most insurance plans are accepted.</p>
                                <p className="highlight-text">We truly believe that you or your loved one will enjoy being part of Senior Medical Care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="news-section">
                <div className="container">
                    <h2 className="section-title text-center">Dr. Postigo in the News</h2>
                    <div className="news-grid">
                        <div className="news-card-video">
                            <div className="video-container">
                                <iframe src="https://www.youtube.com/embed/zN_gecdIT3Y" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <h3>Dr. Postigo on House Calls</h3>
                        </div>
                        <div className="news-card-article">
                            <h3>RochesterFirst Feature</h3>
                            <p className="news-quote">"Just make the call and the doctor<br />will come to see you"</p>
                            <a href="https://www.rochesterfirst.com/news/local-news/just-make-the-call-and-the-doctor-will-come-to-see-you/658946043/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                Read Full Article <ArrowRight size={18} className="ml-2-inline" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Restyled Trust Section - SAND COLOR */}
            <section className="trust-section-sand">
                <div className="container text-center">
                    <h2 className="section-title text-dark">Your Health is Our Priority</h2>
                    <p className="trust-quote max-w-3xl mx-auto mb-8">
                        "We treat every patient with the dignity, respect, and comprehensive care they deserve. Your well-being is at the heart of everything we do."
                    </p>
                    <Link to="/reviews" className="btn-outline-dark">Read Patient Reviews</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;