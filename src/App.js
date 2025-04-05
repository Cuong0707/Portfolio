import './App.css';
import { useEffect, useState } from 'react';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Skill from './Pages/Skill/Skill';
import Work from './Pages/Work/Work';

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/EngLishCV.pdf"; 
  link.download = "CV_HuynhNhatCuong.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionIds = ['home', 'about', 'skill', 'experience', 'work'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 60; // chiều cao navbar hoặc khoảng cách mong muốn
    
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          
          // Kiểm tra nếu top của section vào trong khoảng 50px của viewport
          // và đảm bảo rằng phần này vẫn nằm trong viewport
          if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // chạy ngay khi component mount
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="App">
      <nav className='navbar'>
        <a href='' className='logo'>Portfolio.</a>
        <ul>
          {sectionIds.map(id => (
            <li key={id} className={activeSection === id ? 'active' : ''}>
              <a href={`#${id}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id='home' className='home'>
        <div className='home-info'>
          <h1>HUYNH NHAT CUONG</h1>
          <h2>I'm a Frontend Developer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptates.</p>
          <div className='btn-sci'>
            <a href='#' className='btn' onClick={handleDownload}>Download CV</a>
            <div className='sci'>
              <a href='https://github.com/Cuong0707' target='_blank' rel='noopener noreferrer'>
                <i className="devicon-github-original"></i>
              </a>
              <a href='https://www.facebook.com/huynh.nhat.cuong.806452/' target='_blank' rel='noopener noreferrer'>
                <i className="devicon-facebook-plain"></i>
              </a>
            </div>
          </div>
        </div>
        <div className='home-img'>
          <div className='img-box'>
            <div className='img-item'>
              <img src='/img/cuong2-removebg-preview.png' alt='avt' />
            </div>
          </div>
        </div>
      </section>

      <section id='about'>
        <About />
      </section>
      <section id='skill'>
        <Skill />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='work'>
        <Work />
      </section>

      <footer>
        <div className="footer-top">
          <div className='title'>
            <p>Get in touch</p>
          </div>
          <p className='get-in-touch'>
            what's next? feel free reach out to me if you are looking for a developer,
            have a query, or simply want to connect.
          </p>
          <br /><br />
          <p>&#9993;cuonghuynhnhat2025@gmail.com</p>
          <p>&#9742;(+84) 948776481</p>
          <p>&#128241;HCM City, Vietnam</p>
        </div>
        <div className='footer-bottom'>
          <p>&copy; 2023 Huynh Nhat Cuong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
