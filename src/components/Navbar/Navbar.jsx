import React, { useState } from 'react';
import './Navbar.css';
import { IoMenu, IoClose } from "react-icons/io5";
import MobileNav from './MobileNav/MobileNav';



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <h1 className='nav-title'>Noah Lett</h1>

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

          <div className='menu-btn' onClick={toggleMenu}>
            {openMenu ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar