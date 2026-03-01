import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MobileActionsBar.css';

const MobileActionsBar = () => {
    return (
        <div className="mobile-actions-bar">
            <a href="tel:+15858722710" className="mobile-action-btn btn-call">
                <Phone size={20} />
                <span>Call Us</span>
            </a>
            <a href="mailto:housecallmdforseniors@gmail.com" className="mobile-action-btn btn-email">
                <Mail size={20} />
                <span>Email</span>
            </a>
            <Link to="/contact" className="mobile-action-btn btn-contact">
                <MessageSquare size={20} />
                <span>Contact</span>
            </Link>
        </div>
    );
};

export default MobileActionsBar;
