import React from 'react';
import './Work.css';
import WorkTag from '../../Component/WorkTag/WorkTag';
const Work = () => {
    return (
        <div className='work-container'>
            <div className='title'>
                <p>Work</p>
            </div>
            <p>Here are some of the projects I have worked on:</p>
            <div className='work-list'>
                <WorkTag tag="Project 1" />
            </div>

        </div>
    );
};

export default Work;