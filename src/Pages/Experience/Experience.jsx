import React from 'react';
import './Experience.css';
import ExperienceTag from '../../Component/ExperienceTag/ExperienceTag';
const experienceData = [
    {
        img: "/img/fpt.png",
        title: "Information Technology Student – FPT Polytechnic College",
        description: ["Built a full-stack web application using ReactJS and Spring Boot.",
            "Worked in a team of 4 to simulate real-world development environment."],
        time: "2021-2024"
    },
    {
        img: "/img/Logo-VIO1.png",
        title: "Fontend Developer (WordPress) - VIO Agency",
        description: ["Developed and customized responsive WordPress themes using HTML, CSS, and JavaScript.",
            "Integrated UI designs into WordPress with page builders like Elementor and WPBakery.",
            "Optimized website performance, ensuring SEO-friendly and mobile-first design.",
            "Collaborated with backend developers and designers to deliver high-quality websites for clients.",
            "Maintained and updated existing WordPress sites based on client requirements."
        ],
        time: "7/2024-Present"
    }
];
const Experience = () => {
    return (
        <div className="experience-container">
            <div className='title'>
                <p>Experience</p>
            </div>
            <p>Here is a quick summary of my most recent experiences:</p>
            <ul className='experience-list'>
                {experienceData.map((experience, index) => (
                    <ExperienceTag
                        key={index}
                        img={experience.img}
                        title={experience.title}
                        description={experience.description}
                        time={experience.time}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Experience;