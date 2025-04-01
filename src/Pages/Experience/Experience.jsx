import React from 'react';
import './Experience.css';
import ExperienceTag from '../../Component/ExperienceTag/ExperienceTag';
const Experience = () => {
    return (
        <div className="experience-container">
            <div className='title'>
                <p>Experience</p>
            </div>
            <p>Here is a quick summary of my most recent experiences:</p>
            <ul className='experience-list'>
                <ExperienceTag title="Job Title 1" description={["a","a"]} time={"2021-Present"}/>
                <ExperienceTag title="Job Title 2" description={["a","a"]} time={"2021-Present"}/>
                <ExperienceTag title="Job Title 3" description={["a","a"]} time={"2021-Present"}/>
            </ul>
        </div>
    );
};

export default Experience;