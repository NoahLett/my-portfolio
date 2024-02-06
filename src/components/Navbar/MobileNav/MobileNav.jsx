import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
            <h1 className='mobilenav-title'>Noah Lett</h1>
            <ul>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('stack')}>Stack</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('experience')}>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('projects')}>My Projects</a>
                </li>

                <button className='contact-btn' onClick={()=> scrollToSection('contact')}>Contact Me</button>
            </ul>
        </div>
      </div>  
    </>
  )
}

export default MobileNav