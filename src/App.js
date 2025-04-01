
import './App.css';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Skill from './Pages/Skill/Skill';
import Work from './Pages/Work/Work';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <a href='' className='logo'>Portfolio.</a>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Project</a></li>
          <li><a href='#'>Skill</a></li>
          <li><a href='#'>Experience</a></li>
        </ul>
      </nav>
      {/* <div className='bars-animation'>
        <div className='bar' style={{ '--i': 6}}></div>
        <div className='bar' style={{ '--i': 5 }}></div>
        <div className='bar' style={{ '--i': 4 }}></div>
        <div className='bar' style={{ '--i': 3 }}></div> 
        <div className='bar' style={{ '--i': 2 }}></div>
        <div className='bar' style={{ '--i': 1 }}></div>
      </div> */}
      {/* Page Home */}
      <section className='home'>
        <div className='home-info'>
          <h1>HUYNH NHAT CUONG</h1>
          <h2>I'm a Frontend Depveloper</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptates.</p>
          <div className='btn-sci'>
            <a href='#' className='btn'>Download CV</a>
            <div className='sci'>
              <a href='https://github.com/Cuong0707'>
                <i className="devicon-github-original"></i>
              </a>
              <a href='https://www.facebook.com/huynh.nhat.cuong.806452/'>
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
      <About />
      {/* Page Skill */}
      <Skill />
      {/* Page Experience */}
      <Experience />
      <Work />
    </div>
  );
}

export default App;
