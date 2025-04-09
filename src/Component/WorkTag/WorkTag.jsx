import React from 'react';
import './WorkTag.css';
import TechTag from '../TechTags/TechTags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}
const WorkTag = ({ title, content, techTags, reverse = false, link }) => {
    return (
        <div className={`${reverse ? 'reverse' : ''} work-tag`}>
            <div className='work-tag-demo'  onClick={() => openInNewTab(link)}>
                <div className='work-tag-img'>
                    <iframe src={link} title={title}></iframe>
                    <div className="iframe-overlay"></div>
                </div>
            </div>
            <div className='work-tag-content'>
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
                <TechTag Tags={techTags} />
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className='icon-open' />
                </a>
            </div>
        </div>
    );
};

export default WorkTag;