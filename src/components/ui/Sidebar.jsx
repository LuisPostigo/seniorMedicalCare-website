import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

/**
 * Sidebar — Reusable sidebar with navigation links and an optional CTA action box.
 * Uses shared styles from src/styles/shared.css.
 *
 * @param {Array<{to: string, label: string}>} links - Navigation links
 * @param {string} [sidebarTitle] - Title for the nav box (default: "Resources")
 * @param {string} [actionTitle] - Title for the action box
 * @param {string} [actionText] - Description text for the action box
 * @param {string} [actionLink] - Link destination for the action button
 * @param {string} [actionLabel] - Button label (default: "Get Started")
 * @param {React.ReactNode} [actionIcon] - Icon for the action box
 * @param {string} [className] - Extra className for the container
 */
const Sidebar = ({
    links = [],
    sidebarTitle = 'Resources',
    actionTitle,
    actionText,
    actionLink = '/contact',
    actionLabel = 'Get Started',
    actionIcon,
    className = '',
}) => {
    return (
        <aside className={`sidebar-container ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {links.length > 0 && (
                <div className="sidebar-box">
                    <h3>{sidebarTitle}</h3>
                    <nav className="sidebar-nav">
                        {links.map((link, index) => (
                            <Link key={index} to={link.to} className="sidebar-nav-link group">
                                {link.label} <ArrowRight size={16} className="sidebar-nav-icon" />
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            {actionTitle && (
                <div className="sidebar-action-box">
                    {actionIcon || <CheckCircle size={32} />}
                    <h3>{actionTitle}</h3>
                    {actionText && <p>{actionText}</p>}
                    <Link to={actionLink} className="sidebar-action-btn">
                        {actionLabel}
                    </Link>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
