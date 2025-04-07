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
                    <div className="icon"><i className="devicon-javascript-plain colored"></i></div>
                    <p>Javascript</p>
                </div>
                <div className='skill-item'>
                    <div className="icon"><i className="devicon-css3-plain-wordmark colored"></i></div>
                    <p>CSS</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-java-plain colored"></i></div>
                    <p>Java</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-react-original colored"></i></div>
                    <p>ReactJS</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-wordpress-plain"></i></div>
                    <p>WordPress</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-github-original"></i></div>
                    <p>Github</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-spring-original colored"></i></div>
                    <p>SpringBoot</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-csharp-plain colored"></i></div>
                    <p>C#</p>
                </div>
                <div className='skill-item'>
                <div className="icon"><i className="devicon-cplusplus-plain colored"></i></div>
                    <p>C, C++</p>
                </div>
            </div>
            
        </div>
    );
};

export default Skill;