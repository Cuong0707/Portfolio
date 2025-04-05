import React from 'react';
import './WorkTag.css';
import TechTag from '../TechTags/TechTags';

const WorkTag = ({ title, content, techTags ,reverse=false, link}) => {
    return (
        <div className={`${reverse ? 'reverse' : ''} work-tag`}>
            <div className='work-tag-demo'>
                <div className='work-tag-img'>
                    <iframe src={link}></iframe>
                </div>
            </div>
            <div className='work-tag-content'>
                <h1>{title}</h1>
                <p>
                {content}
                </p>
                <TechTag Tags={techTags} />
            </div>
        </div>
    );
};

export default WorkTag;