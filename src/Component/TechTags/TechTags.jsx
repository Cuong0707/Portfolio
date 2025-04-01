import React from 'react';
import './TechTags.css';

const TechTag = ({ Tags }) => {
    return (
        <div className='tech-tag-container'>
            {Tags.map((tag, index) => (
                <div className='tech-tag' key={index}>
                    <label>{tag}</label>
                </div>
            ))}
        </div>
    );
};


export default TechTag;