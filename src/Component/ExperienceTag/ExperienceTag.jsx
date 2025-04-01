import React from 'react';
import './ExperienceTag.css';

const ExperienceTag = ({ icon, title, description, time }) => {
    return (
        <div className="experience-tag">
            <div className="experience-tag-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
            </div>
            <div className="experience-tag-content">
                <h3 className="experience-tag-title">{title}</h3>
                {description.map((desc, index) => (
                    <p key={index} className="experience-tag-description">• {desc}</p>
                ))}
            </div>
            <p className="experience-tag-time">{time}</p>

        </div>
    );


};

export default ExperienceTag;