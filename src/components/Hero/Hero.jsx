import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className='hero-container'>
        <div className='hero-content'>
            <h2 className=''>Empowering Ideas Through Elegant Code</h2>
            <p>Frontend Developer | Cultivating a Continuous Coding Odyssey | Research, Code, Refine, Repeat</p>
        </div>

        <div className='hero-img'>
          <div className='upper-block'>
            <div className='column'>
              <div className='tech-icon' title='React'>
                <i className="devicon-react-original colored"></i>
              </div>
              <div className='tech-icon' title='Next'>
                <i className="devicon-nextjs-original"></i>
              </div>
              <div className='tech-icon' title='HTML5'>
                <i className="devicon-html5-plain colored"></i>
              </div>
              <div className='tech-icon' title='CSS3'>
                <i className="devicon-css3-plain colored"></i>
              </div>
            </div>
            <img className='head-shot' src='/images/Julian-47-2.jpeg' alt='Head Shot' />
          </div>
          <div className='row'>
              <div className='tech-icon'>
                <i className="devicon-nodejs-plain colored" title='Node'></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-express-original" title='Express'></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-postgresql-plain colored" title='PostgreSQL'></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-mongodb-plain colored" title='MongoDB'></i>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Hero