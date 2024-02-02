import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2 className=''>Empowering Ideas through Elegant Code</h2>
            <p>Frontend Developer | Cultivating a Continuous Coding Odyssey</p>
        </div>

        <div className='hero-img'>
          <div className='upper-block'>
            <div className='column'>
              <div className='tech-icon'>
                <i className="devicon-react-original colored"></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-nextjs-original"></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-html5-plain colored"></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-css3-plain colored"></i>
              </div>
            </div>
            <img className='head-shot' src='src/assets/images/Julian-47-2.jpeg' alt='Head Shot' />
            <div className='row'>
              <div className='tech-icon'>
                <i className="devicon-nodejs-plain colored"></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-express-original"></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-postgresql-plain colored"></i>
              </div>
              <div className='tech-icon'>
                <i className="devicon-mongodb-plain colored"></i>
              </div>
            </div>
          </div>
          </div>
    </section>
  )
}

export default Hero