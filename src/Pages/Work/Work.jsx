import React from 'react';
import './Work.css';
import WorkTag from '../../Component/WorkTag/WorkTag';
import { useTranslation } from 'react-i18next';
const Works = [
    {
        title: "Project 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.",
        techTags: ["React", "Spring Boot", "Java", "MySQL"],
        link:"http://cuongvio.great-site.net/"
    },
    {
        title: "Project 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.",
        techTags: ["React", "Spring Boot", "Java", "MySQL"],
        // link:"https://myshop-gray.vercel.app/"
    },
    {
        title: "Project 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.",
        techTags: ["React", "Spring Boot", "Java", "MySQL"],
        // link:'https://c-travel.vercel.app/'
    },
];
const Work = () => {
    const { t } = useTranslation();
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
                        techTags={work.techTags}
                        reverse={index % 2 !== 0} 
                        link={work.link} 
                    />
                ))}
            </div>

        </div>
    );
};

export default Work;