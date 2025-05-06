import React from 'react';
import './Work.css';
import WorkTag from '../../Component/WorkTag/WorkTag';
import { useTranslation } from 'react-i18next';

const Work = () => {
    const { t } = useTranslation();
    const Works = [
        {
            title: "Vioacademy",
            content: t('descriptionVio'),
            note: t('noteVio'),
            techTags: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP"],
            image: '/img/Screenshot 2025-05-06 073610.png',
            link: "https://vioacademy.edu.vn//"
        },
        {
            title: "My shop",
            content: t('descriptionMyShop'),
            note: t('noteMyShop'),
            techTags: ["React", "Spring Boot", "Java", "MySQL"],
            image:"/img/Screenshot 2025-05-06 075716.png",
            link: "https://myshop-gray.vercel.app/" 
        },
        {
            title: "lifemanagementsciencelabs",
            content: t('descriptionLifemanagementsciencelabs'),
            note: t('noteLifemanagementsciencelabs'),
            techTags: ["Workpress"],
            image:'/img/Screenshot 2025-05-06 080236.png',
            link: "https://lmsl.vn/"
        },
    ];
    return (
        <div className='work-container'>
            <div className='title'>
                <p>{t('work')}</p>
            </div>
            <p>{t('workTitle')}</p>
            <div className='work-list'>
                {Works.map((work, index) => (
                    <WorkTag
                        key={index}
                        title={work.title}
                        content={work.content}
                        note={work.note}
                        techTags={work.techTags}
                        reverse={index % 2 !== 0} 
                        link={work.link} 
                        image={work.image}
                    />
                ))}
            </div>

        </div>
    );
};

export default Work;