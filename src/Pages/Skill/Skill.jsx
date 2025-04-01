import React from 'react';
import './Skill.css';



const Skill = () => {
    return (
        <div className="skill-container">
            <div className='title'>
                <p>My Skills</p>
            </div>
            <p>The skills, tools and technologies i am really good at:</p>
            <div className='skill-list'>
                <div className='skill-item'>
                    <i className="devicon-javascript-plain colored"></i>
                    <p>Javascript</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                    <p>CSS</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-java-plain colored"></i>
                    <p>Java</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-react-original colored"></i>
                    <p>ReactJS</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-wordpress-plain"></i>
                    <p>WordPress</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-github-original"></i>
                    <p>Github</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-spring-original colored"></i>
                    <p>SpringBoot</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-csharp-plain colored"></i>
                    <p>C#</p>
                </div>
                <div className='skill-item'>
                    <i className="devicon-cplusplus-plain colored"></i>
                    <p>C, C++</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;