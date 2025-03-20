import React from 'react';
import './Experience.css';
const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience</h1>
            <ul>
                <li>
                    <h2>Job Title 1</h2>
                    <p>Company Name 1</p>
                    <p>Duration: Start Date - End Date</p>
                    <p>Job Description 1</p>
                </li>
                <li>
                    <h2>Job Title 2</h2>
                    <p>Company Name 2</p>
                    <p>Duration: Start Date - End Date</p>
                    <p>Job Description 2</p>
                </li>
                {/* Add more experiences as needed */}
            </ul>
        </div>
    );
};

export default Experience;