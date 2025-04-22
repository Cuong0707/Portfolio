import React from 'react';
import './Experience.css';
import ExperienceTag from '../../Component/ExperienceTag/ExperienceTag';
import { useTranslation } from 'react-i18next';
const experienceData = [
    {
        img: "/img/fpt.avif",
        titleKey: "experience1Title",
        descriptionKeys: [
            "experience1Description1",
            "experience1Description2"
        ],
        timeKey: "experience1Time"
    },
    {
        img: "/img/Logo-VIO1.avif",
        titleKey: "experience2Title",
        descriptionKeys: [
            "experience2Description1",
            "experience2Description2",
            "experience2Description3",
            "experience2Description4",
            "experience2Description5"
        ],
        timeKey: "experience2Time"
    }
];
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
                        key={index}
                        img={experience.img}
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