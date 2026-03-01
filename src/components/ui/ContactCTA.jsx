import React from 'react';
import { Phone } from 'lucide-react';

/**
 * ContactCTA — Dark call-to-action block with title, description, and phone link.
 * Uses shared styles from src/styles/shared.css (.contact-cta, .contact-cta-text, .contact-cta-btn).
 *
 * @param {string} [title] - Heading text (default: "Have questions?")
 * @param {string} [text] - Description text
 * @param {string} [phone] - Phone number to display and link
 */
const ContactCTA = ({
    title = 'Have questions?',
    text = 'Contact our office for more information.',
    phone = '(585) 872-2710',
}) => {
    // Strip non-numeric characters for the tel: link
    const telHref = `tel:${phone.replace(/\D/g, '')}`;

    return (
        <div className="contact-cta">
            <div className="contact-cta-text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <a href={telHref} className="contact-cta-btn">
                <Phone size={18} /> {phone}
            </a>
        </div>
    );
};

export default ContactCTA;
