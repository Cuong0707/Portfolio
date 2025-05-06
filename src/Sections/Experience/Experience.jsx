import React from 'react';
import './Experience.css';
import ExperienceTag from '../../Component/ExperienceTag/ExperienceTag';
import { useTranslation } from 'react-i18next';
import experienceData from '../../Data/experienceData.json';
const Experience = () => {
    const { t } = useTranslation();
    return (
        <div className="experience-container">
            <div className='title'>
                <p>{t('experience')}</p>
            </div>
            <p>{t('experienceTitle')}</p>
            <ul className='experience-list'>
                {experienceData.map((experience, index) => (
                    <ExperienceTag
                        tag={t(experience.tag)}
                        key={index}
                        img={experience.logo}
                        title={t(experience.titleKey)}
                        description={experience.descriptionKeys.map(key => t(key))}
                        time={t(experience.timeKey)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Experience;