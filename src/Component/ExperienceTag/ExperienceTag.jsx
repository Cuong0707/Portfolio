import React, { useState } from 'react';
import './ExperienceTag.css';

const ExperienceTag = ({ img, title, description, time }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    const visibleDescriptions = isExpanded ? description : description.slice(0, 3);

    return (
        <li className="experience-tag">
            <div className="experience-tag-icon">
                <img src={img} alt={title} />
            </div>
            <div className="experience-tag-content">
                <h3 className="experience-tag-title">{title}</h3>
                {visibleDescriptions.map((desc, index) => (
                    <p key={index} className="experience-tag-description">• {desc}</p>
                ))}
                {description.length > 3 && (
                    <div>
                        { !isExpanded ? (
                            <p className="experience-tag-description">...</p>
                        ) : null }
                        <button onClick={handleToggle} className="experience-tag-toggle-btn">
                            {isExpanded ? 'Hide' : 'Show more'}
                        </button>
                    </div>
                )}
            </div>
            <p className="experience-tag-time">{time}</p>
        </li>
    );
};

export default ExperienceTag;
