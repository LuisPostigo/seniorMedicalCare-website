import React from 'react';

/**
 * PageHeader — Universal page header with title and optional subtitle.
 * Uses shared styles from src/styles/shared.css (.page-header, .page-title, .page-subtitle).
 *
 * @param {string} title - The page title
 * @param {string} [subtitle] - Optional subtitle text
 */
const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="page-header">
            <div className="container">
                <h1 className="page-title">{title}</h1>
                {subtitle && <p className="page-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
