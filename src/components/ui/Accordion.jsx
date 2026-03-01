import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * AccordionItem — A single collapsible accordion section.
 * Uses shared styles from src/styles/shared.css (.accordion-*).
 *
 * @param {string} title - The header text
 * @param {React.ReactNode} [icon] - Optional icon displayed before the title
 * @param {boolean} isOpen - Whether the item is expanded
 * @param {function} onClick - Toggle handler
 * @param {React.ReactNode} children - Content rendered when expanded
 */
const AccordionItem = ({ title, icon, children, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button className="accordion-header" onClick={onClick} aria-expanded={isOpen}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {icon && (
                        <div style={{ color: 'var(--primary)', display: 'flex' }}>
                            {icon}
                        </div>
                    )}
                    <h3 className="accordion-title">{title}</h3>
                </div>
                <div className="accordion-icon">
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
            </button>
            <div className="accordion-content">
                {children}
            </div>
        </div>
    );
};

/**
 * Accordion — Container for a set of collapsible items, managing open state.
 * Uses shared styles from src/styles/shared.css (.custom-accordion, .accordion-*).
 *
 * @param {Array<{title: string, icon?: React.ReactNode, content: React.ReactNode}>} items - Items to render
 * @param {boolean} [allowMultiple=false] - Whether multiple items can be open at once
 * @param {number} [defaultOpen=0] - Index of the initially open item (-1 for all closed)
 * @param {string} [className] - Extra className for the container
 */
const Accordion = ({ items = [], allowMultiple = false, defaultOpen = 0, className = '' }) => {
    const [openIndices, setOpenIndices] = useState(
        defaultOpen >= 0 ? new Set([defaultOpen]) : new Set()
    );

    const toggleItem = (index) => {
        setOpenIndices((prev) => {
            const next = new Set(allowMultiple ? prev : []);
            if (prev.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <div className={`custom-accordion ${className}`}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    isOpen={openIndices.has(index)}
                    onClick={() => toggleItem(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

// Export both the container and the individual item for flexible usage
export { AccordionItem };
export default Accordion;
