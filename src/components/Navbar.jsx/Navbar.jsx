import React from 'react';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
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

          <div className='menu-btn'>
            <IoMenu className='menu-icon' />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar