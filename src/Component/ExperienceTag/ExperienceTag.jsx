import React, { useState } from 'react';
import './ExperienceTag.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const ExperienceTag = ({ img, title, description, time, tag }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();
    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    const visibleDescriptions = isExpanded ? description : description.slice(0, 3);

    return (
        <li className="experience-tag">
            <div className="experience-tag-icon">
                <img loading='lazy' src={img} alt={title} />
            </div>
            <div className="experience-tag-content">
                <h3 className="experience-tag-title">{title}</h3>
                {visibleDescriptions.map((desc, index) => (
                    <p key={index} className="experience-tag-description">• {desc}</p>
                ))}
                {description.length > 3 && (
                    <div>
                        <button onClick={handleToggle} className="experience-tag-toggle-btn">
                            {isExpanded ? 'Hide' : 'Show more ...'}
                        </button>
                    </div>
                )}
            </div>
            <div className="experience-tag-time">
                <p >{time}</p>
                <a href={`/experiencedetail/${tag}`} target="_blank">
                    <FontAwesomeIcon icon={faUpRightFromSquare} className='icon-open' />{t('detail')}
                </a>
            </div>

        </li>
    );
};

export default ExperienceTag;
