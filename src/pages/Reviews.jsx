import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Robert M., 74",
        text: "Dr. Postigo takes the time to listen. I never feel rushed during my appointments. He explained my new blood pressure medicine in a way that I could actually understand. The front desk staff is also incredibly polite.",
        date: "February 2026"
    },
    {
        name: "Susan & James L.",
        text: "We switched to Senior Medical Care last year and it was the best decision we made. They handle all our prescriptions perfectly and helped us coordinate James' physical therapy after his fall. It truly feels like they care.",
        date: "January 2026"
    },
    {
        name: "Mary T., 81",
        text: "Beautiful clinic, easy parking, and very accessible. The nurses are so gentle when taking blood. Dr. Postigo has a wonderful bedside manner. Highly recommend to any senior looking for a new primary doctor.",
        date: "December 2025"
    },
    {
        name: "Thomas B.",
        text: "It is so rare to find a doctor these days who actually calls you himself to go over lab results. That personal touch gives me incredible peace of mind.",
        date: "October 2025"
    }
];

const Reviews = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Patient Testimonials</h1>
                    <p className="page-subtitle">Hear from the community we proudly serve.</p>
                </div>
            </div>

            <div className="container content-section">
                <div className="max-w-4xl mx-auto" style={{ maxWidth: '900px', margin: '0 auto' }}>

                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4" style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', color: '#f59e0b' }}>
                            <Star size={32} fill="currentColor" />
                            <Star size={32} fill="currentColor" />
                            <Star size={32} fill="currentColor" />
                            <Star size={32} fill="currentColor" />
                            <Star size={32} fill="currentColor" />
                        </div>
                        <h2 className="text-3xl">Rated 5 Stars by Our Patients</h2>
                        <p className="text-lg text-muted mt-4">We are grateful for the trust our patients place in us every day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                                <Quote size={40} className="absolute text-gray-100" style={{ top: '1rem', right: '1rem', color: 'var(--bg-subtle)' }} />
                                <div className="relative z-10">
                                    <div className="flex mb-4" style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b' }}>
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                        <Star size={18} fill="currentColor" />
                                    </div>
                                    <p className="text-lg mb-6 italic text-gray-700" style={{ lineHeight: 1.6 }}>"{review.text}"</p>
                                    <div className="mt-auto border-t border-gray-100 pt-4" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                                        <p className="font-bold text-primary">{review.name}</p>
                                        <p className="text-sm text-muted">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-subtle p-8 rounded-lg border border-gray-200">
                        <h3 className="mb-4">Share Your Experience</h3>
                        <p className="mb-6">We value your feedback to help us continue providing the best care possible.</p>
                        <a href="#" className="btn-primary">Leave a Google Review</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
