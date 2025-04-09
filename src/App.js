import './App.css';
import { useEffect, useState, useRef } from 'react';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Skill from './Pages/Skill/Skill';
import Work from './Pages/Work/Work';
import ThemeToggle from './Theme/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


const sectionIds = ['home', 'about', 'skill', 'experience', 'work'];
//hàm tải file CV
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/EngLishCV.pdf";
  link.download = "CV_HuynhNhatCuong.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Hiệu ứng fade-in cho các section
const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(node);
  
    return () => {
      observer.unobserve(node); // dùng biến node đã lưu
    };
  }, []);
  

  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Hàm thay đổi ngôn ngữ
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleDropdown();
  };
  // Hàm mở/đóng dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [activeSection, setActiveSection] = useState('home');
  
  // Hàm cuộn đến section tương ứng khi nhấp vào menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 70; // chiều cao navbar hoặc khoảng cách mong muốn

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();

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
        <a href='#home' className='logo'>Portfolio.</a>
        <div className='navbar-menu'>
          <ThemeToggle />
          <ul className='menu'>
            {sectionIds.map(id => (
              <li key={id} className={activeSection === id ? 'active' : ''}>
                <a href={`#${id}`}>
                  {t(id)}
                </a>
              </li>
            ))}
            <hr
            style={{
              border: 'none',
              width: '1px',
              height: '20px',
              backgroundColor: 'gray',
              marginRight: '20px',
            }}
          />
          </ul>
          <div className='language-switcher'>
            <button onClick={toggleDropdown} className="dropbtn">
              {t('currentLanguage')}
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <button onClick={() => changeLanguage('en')}>{t('english')}</button>
                <button onClick={() => changeLanguage('vi')}>{t('vietnamese')}</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <section id='home' className='home'>
        <div className='home-info'>
          <h1>{t('name')}</h1>
          <h2>{t('im')}{" "}
            <span style={{ "--i": 4 }} data-text="Frontend Developer"> Frontend Developer</span>
            <span style={{ "--i": 3 }} data-text="Backend Developer">Backend Developer</span>
            <span style={{ "--i": 2 }} data-text="Full Stack Developer">Full Stack Developer</span>
            <span style={{ "--i": 1 }} data-text="Web Developer">Web Developer</span>
          </h2>
          <p>{t('sortDescription')}</p>
          <p><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px' }} />Ho Chi Minh City, Viet Nam</p>
          <p><span className="status-dot"></span>Available for new projects</p>
          <div className='btn-sci'>
            <button  className='btn link-style' onClick={handleDownload}>Download CV</button>
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

      <FadeInSection>
        <section id='about'>
          <About activeSection={activeSection} />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id='skill'>
          <Skill />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id='experience'>
          <Experience />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id='work'>
          <Work />
        </section>
      </FadeInSection>

      <footer>
        <div className="footer-top">
          <div className='title'>
            <p>{t('footerTitle')}</p>
          </div>
          <p className='get-in-touch'>
            {t('footerText')}
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
