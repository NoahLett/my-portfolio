import React, { useState } from 'react';
import './Navbar.css';
import { IoMenu, IoClose } from "react-icons/io5";
import MobileNav from './MobileNav/MobileNav';



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <h1 className='nav-title'>Noah Lett</h1>

          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>
            <li>
              <a className='menu-item'>Stack</a>
            </li>
            <li>
              <a className='menu-item'>Work Experience</a>
            </li>
            <li>
              <a className='menu-item'>Contact Me</a>
            </li>

            <button className='contact-btn' onClick={()=> {}}>Hire Me</button>
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