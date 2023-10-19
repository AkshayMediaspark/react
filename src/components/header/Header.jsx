import React from 'react'
import img from '../../../src/assets copy/images/logo_.png';
import './header.css';

import { AiOutlineMore ,AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Header = () => {

  const [menu, setMenu] = useState(false);
  return (
    <div className="header" data-header>
    <div className="container">

      <a href="#" className="logo" ><img src={img} alt="logo" className='mediaslogo' /><span>Mediasparkk</span></a>

     

      <nav className={`navbar ${menu ? 'active' : ''}`} data-navbar>

       
        <ul className="navbar-list">

          <li>  
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li>  
            <a href="#service" className="navbar-link" data-nav-link>Service</a>
          </li>

        
          <li>
            <a href="#about" className="navbar-link" data-nav-link>About Us</a>
          </li>
          

          

          <li>
          </li>

          <li>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </li>
          </ul>
      </nav>

      <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler >
        <AiOutlineMore name="menu-outline" className={`open ${menu ? 'active' : ''}`} onClick={() => setMenu(!menu)}></AiOutlineMore>
        
        
      </button>
      </div>

    
  </div>

  )
}

export default Header