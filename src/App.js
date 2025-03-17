
import './App.css';
import About from './Component/About/About';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <a href='' className='logo'>Portfolio.</a>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
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
          <h2>I'm aFrontend Depveloper</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptates.</p>
          <div className='btn-sci'>
            <a href='#' className='btn'>Download CV</a>
            <div className='sci'>
              <a href='#'><i class='bx bxl-github'></i></a>
              <a href='#'><i class='bx bxl-facebook-circle' ></i></a>
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
      <About/>
      {/* Page About */}
      {/* Page Skill */}
      {/* Page Experience */}
    </div>
  );
}

export default App;
