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
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                </div>
                <div className="about-content">
                    <h1>Curious about me? Here you have it:</h1>
                    <p>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & SpringBoot). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        <br />
                        <br />
                        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        <br />
                        <br />
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        <br />
                        <br />
                        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        <br />
                        <br />
                        Finally, some quick bits about me.
                        <br />
                        <br />
                        • B.E. in Computer Engineering
                        <br />
                        • Avid learner
                        <br />
                        • Full time freelancer
                        <br />
                        <br />
                        One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;