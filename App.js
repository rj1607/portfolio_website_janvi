import logo from './logo.svg';
import './App.css';
import background from './Background_image.png';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Work1 from './work1.png';
import Work2 from './work2.png';
import Work3 from './work3.png';


function App() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div>
      <div className="App-header">
        <div className='container'>
          <nav>
            <img src='' className='logo' alt='Logo' />
            <div>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className='header-text'>
            <p>UI/UX Designer</p>
            <p>Hi, I'm <span className='text'>Janvi</span><br />Rana From Canada</p>
          </div>
        </div>
      </div>
      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='about-col-1' style={{ flex: 1 }}>
              <img src={background} alt='Background' className='background-image' style={{ width: '800px', display: 'block', marginLeft: '-10%' }} />
            </div>
            <div className='about-col-2'>
              <h1>About Me</h1>
              <p>
                Hi, I'm Janvi Rana, a passionate UI/UX Designer from Canada. I specialize in creating 
                user-friendly interfaces and engaging designs that enhance user experience.
              </p>
              <div className='table-titles'>
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => setActiveTab('experience')}>Experience</p>
                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => setActiveTab('education')}>Education</p>
              </div>
              <div className='tab-contents' style={{ display: activeTab === 'skills' ? 'block' : 'none' }}>
                <ul>
                  <li><span>UI/UX</span><br />Designing Web/App Interfaces</li>
                  <li><span>Web Development</span><br />Web App Development</li>
                  <li><span>App Development</span><br />Building Android/iOS apps</li>
                </ul>
              </div>
              <div className='tab-contents' style={{ display: activeTab === 'experience' ? 'block' : 'none' }}>
                <ul>
                  <li><span>2021 - Current</span><br />UI/UX training at ET institute</li>
                  <li><span>2019 - 2021</span><br />Team lead at XYZ company</li>
                  <li><span>2017 - 2019</span><br />UI/UX Design executive at XYZ company</li>
                  <li><span>2016 - 2017</span><br />Internship at XYZ company</li>
                </ul>
              </div>
              <div className='tab-contents' style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
                <ul>
                  <li><span>2016</span><br />UI/UX training at ET institute</li>
                  <li><span>2017</span><br />MBA from MIT Mumbai</li>
                  <li><span>2014</span><br />BBA from MIT Mumbai</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='services'>
        <div className='container'>
          <h1 className='sub-title'>My Services</h1>
          <div className='service-list'>
            <div>
            <i className="fas fa-code"></i> 
              <h2>Web Design</h2>
              <p>
              Hi, I'm Janvi Rana, a passionate UI/UX Designer from Canada. I specialize in creating 
              user-friendly interfaces and engaging designs that enhance user experience.
              </p>
              <a href='#'>Learn more</a>
            </div>
            <div>
            <i className="fas fa-crop-alt"></i>
              <h2>UI/UX Design</h2>
              <p>
              Hi, I'm Janvi Rana, a passionate UI/UX Designer from Canada. I specialize in creating 
              user-friendly interfaces and engaging designs that enhance user experience.
              </p>
              <a href='#'>Learn more</a>
            </div>
            <div>
            <i className="fab fa-app-store-ios"></i>
              <h2>App Design</h2>
              <p>
              Hi, I'm Janvi Rana, a passionate UI/UX Designer from Canada. I specialize in creating 
              user-friendly interfaces and engaging designs that enhance user experience.
              </p>
              <a href='#'>Learn more</a>
            </div>
          </div>

        </div>
      </div>
      <div id='portfolio'>
        <div className='container'>
        <h1 className='sub-title'>My Work</h1>
        <div className='work-list'>
         <div className='work1'>
           <img  src={Work1} alt='work1' className='work1'></img>
           <div className='layer'></div>
           <h3>Social media app</h3>
           <p>The apps connected to the takented people around the world.
            Download it from play store. 
           </p>
           <a href='#'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
         </div>
         <div className='work2'>
           <img  src={Work2} alt='work1' className='work2'></img>
           <div className='layer'></div>
           <h3>Music app</h3>
           <p>The apps connected to the takented people around the world.
            Download it from play store. 
           </p>
           <a href='#'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
         </div>
         <div className='work3'>
           <img  src={Work3} alt='work1' className='work3'></img>
           <div className='layer'></div>
           <h3>Online shopping app</h3>
           <p>The apps connected to the takented people around the world.
            Download it from play store. 
           </p>
           <a href='#'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
         </div>
        </div>
        </div>
          <a href='#' className='btn'>See More</a>
      </div>
      <div id='contact'>
        <div className='container'>
           <div className='row'>
            <div className='contact-left'>
              <h1 className='sub-tilte'>
               Conatact Me
              </h1>
              <p>contact@123.com</p>
              <p>0123456789</p>
              <div  className='social-icon'>
                <a href='https://facebook.com/'><i className="fa-brands fa-facebook"></i></a>
                <a href=''><i className="fa-brands fa-twitter"></i></a>
                <a href=''><i className="fa-brands fa-instagram"></i></a>
                <a href=''><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            {/* <div className='contact-right'>
              <form>
                <input type='text' name='Name' placeholder='Enter Your Name' required> </input>
                <input type='mail' name='Email' placeholder='Enter Your Email' required> </input>
                <textarea name='textarea' rows='6' placeholder='Ypur Message'></textarea>
                <button type='Submit'>Submit</button>
              </form>
            </div> */}
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
