import React from 'react';
import './WorkTag.css';

const WorkTag = ({ tag }) => {
    return (
        <div className="work-tag">
            <div className='work-tag-demo'>
                <iframe src="http://cuongvio.great-site.net/"></iframe>
            </div>
            <div className='work-tag-content'>
                <h1>{tag}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.
                </p>
            </div>
        </div>
    );
};

export default WorkTag;