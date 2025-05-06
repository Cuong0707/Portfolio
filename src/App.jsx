import './App.css';
import { useEffect, useState, useRef, lazy, Suspense } from 'react';


import ThemeToggle from './Theme/ThemeToggle';
import { FaLocationDot } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "./ga4";
const About = lazy(() => import('./Pages/About/About'));
const Experience = lazy(() => import('./Pages/Experience/Experience'));
const Skill = lazy(() => import('./Pages/Skill/Skill'));
const Work = lazy(() => import('./Pages/Work/Work'));

const sectionIds = ['home', 'about', 'skill', 'experience', 'work'];
//hàm tải file CV
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/CV.pdf";
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
      { threshold: 0.1 }
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
  const navRef = useRef(null);
  const location = useLocation();
  // Khởi tạo Google Analytics
  useEffect(() => {
    initGA();
  }, []);
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);


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

  //Gán chiều cao nav cho các section khi mount để xác định vị trí scroll
  useEffect(() => {
    if (navRef.current) {
      const navHeight = navRef.current.offsetHeight;

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        section.style.scrollMarginTop = `${navHeight}px`;
      });
    }
  }, []);


  // Hàm cuộn đến section tương ứng khi nhấp vào menu
  useEffect(() => {
    const handleScroll = () => {
      //const scrollOffset = 60; 
      const windowHeight = window.innerHeight;
      const targetPosition = windowHeight / 2;
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();

          // và đảm bảo rằng phần này vẫn nằm trong viewport
          if (rect.top <= targetPosition && rect.bottom >= targetPosition) {
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
      <nav className='navbar' ref={navRef}>
        <a href='/home' className='logo'>Portfolio.</a>
        <div className='navbar-menu'>

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
                marginRight: '10px',
              }}
            />
          </ul>
          <div className='language-switcher'>
            <button onClick={toggleDropdown} className="dropbtn btn-underline">
              {t('currentLanguage')}
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <button className='btn-underline' onClick={() => changeLanguage('en')}>{t('english')}</button>
                <button className='btn-underline' onClick={() => changeLanguage('vi')}>{t('vietnamese')}</button>
              </div>
            )}
          </div>
          <ThemeToggle />
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
          <p><FaLocationDot  style={{ marginRight: '8px' }} />Ho Chi Minh City, Viet Nam</p>
          <p><span className="status-dot"></span>Available for new projects</p>
          <div className='btn-sci'>
            <button className='btn link-style' onClick={handleDownload}>Download CV</button>
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
              <img fetchPriority="high"	 decoding="async" loading='eager' src='/img/cuong2-removebg-preview.avif' alt='avt' />
            </div>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section id='about'>
          <Suspense fallback={<div>Đang tải...</div>}>
            <About activeSection={activeSection} />
          </Suspense>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id='skill'>
          <Suspense fallback={<div>Đang tải...</div>}>
            <Skill />
          </Suspense>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id='experience'>
          <Suspense fallback={<div>Đang tải...</div>}>
            <Experience />
          </Suspense>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section id='work'>
          <Suspense fallback={<div>Đang tải...</div>}>
            <Work />
          </Suspense>
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
