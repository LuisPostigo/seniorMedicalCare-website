import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="main-content" id="main-content">
                {/* Skip to main content link for screen readers */}
                <a href="#main-content" className="sr-only focus:not-sr-only skip-link">
                    Skip to main content
                </a>
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
