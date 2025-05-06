import React from 'react';
import './WorkTag.css';
import TechTag from '../TechTags/TechTags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}
const WorkTag = ({ title, content, techTags, reverse = false, link, note,image }) => {
    const { t } = useTranslation();
    return (
        <div className={`${reverse ? 'reverse' : ''} work-tag`}>
            <div className='work-tag-demo'  onClick={() => openInNewTab(link)}>
                <div className='work-tag-img'>
                    <img loading="lazy" src={image} alt={title} ></img>
                    <div className="iframe-overlay">
                        <button className='btn-underline' >truy cập web</button>
                    </div>
                </div>
            </div>
            <div className='work-tag-content'>
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
                <p className='note'>
                    **{" "}{note}
                </p>
                <TechTag Tags={techTags} />
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className='icon-open' />
                    <p>{t('detail')}</p>
                </a>
            </div>
        </div>
    );
};

export default WorkTag;