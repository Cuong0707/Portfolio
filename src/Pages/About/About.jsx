import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className='about'>
            <div className='title'>
                <p>About Me</p>
            </div>
            <div className='about-container'>
                <div className="about-img">
                    <img src="/img/avt2.jpg" alt="Avatar" />
                </div>
                <div className="about-content">
                    <h1>Curious about me? Here you have it:</h1>
                    <br />
                    <p>
                        I'm a passionate, self-taught designer and developer who specializes in full stack development (React.js & Spring Boot). I care deeply about bringing both the <strong>technical and visual</strong> aspects of digital products to life — whether it's crafting a seamless user experience, fine-tuning pixel-perfect designs, or writing clean, performant, and maintainable code.
                    </p>
                    <br />
                    <p>
                        My journey into web development began in <strong>2018</strong>, driven by curiosity and a love for building things on the web. In <strong>2021</strong>, I took it a step further by formally studying <strong>Computer Engineering</strong> at university, where I continue to grow both academically and practically.
                    </p>
                    <br />
                    <p>
                        I'm a forward-thinking developer who enjoys working on products end-to-end — from ideation, design, to full-blown development and optimization. Whether it’s a solo passion project or a team collaboration, I love building impactful web experiences.
                    </p>
                    <br />
                    <p>
                        When I’m not deep in code, you’ll likely find me browsing Facebook, following the journey of early-stage startups, or just recharging. I often share tech tidbits and build in public — feel free to follow me on Twitter or explore my projects on GitHub.
                    </p>
                    <br />
                    <h3>Quick Facts</h3>

                    <p>🎓 B.E. in Computer Engineering (currently studying)</p>
                    <p>🚀 Avid learner & problem solver</p>
                    <p>💼 Full-time freelancer</p>
                    <p>📬 Open for freelance work — feel free to reach out and say hello!</p>

                </div>
            </div>
        </div>
    );
};

export default About;