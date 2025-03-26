import React from 'react';
import './Skill.css';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
];

const Skill = () => {
    return (
        <div className="skill-container">
            <div className='title'>
                <p>My Skill</p>
            </div>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skill;