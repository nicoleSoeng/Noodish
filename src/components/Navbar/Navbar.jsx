import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {MdOutlineClose} from 'react-icons/md';

// import images from '../../constants/images';


import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      {/* <img src={images.gericht} alt="app logo"></img> */}
      <h1 className="headtext__cormorant" style={{fontSize: '36px', color: 'var(--color-white)'}}>Noodish</h1>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      {/* <a href="#login" className="p__opensans">Phone: 123-456-7890</a>
      <div /> */}
      <a href="tel: 253-230-5082" className="p__opensans">Call 123-456-7890 to Order</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}>    </GiHamburgerMenu>    
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}>
        </MdOutlineClose>
        <ul className="app__navbar-smallscreen-links">
      <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
      <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
      <li className="p__opensans"><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
      <li className="p__opensans"><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
    </ul>
      </div>
      )}
    </div>
  </nav>
)};

export default Navbar;
