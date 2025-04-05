import React from 'react';
import './ExperienceTag.css';

const ExperienceTag = ({ img, title, description, time }) => {
    return (
        <li className="experience-tag">
            <div className="experience-tag-icon">
                <img src={img} alt={title}/>
            </div>
            <div className="experience-tag-content">
                <h3 className="experience-tag-title">{title}</h3>
                {description.map((desc, index) => (
                    <p key={index} className="experience-tag-description">• {desc}</p>
                ))}
            </div>
            <p className="experience-tag-time">{time}</p>
        </li>
    );


};

export default ExperienceTag;