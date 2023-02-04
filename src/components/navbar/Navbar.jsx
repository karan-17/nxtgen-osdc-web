import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'

// Block Element Modifier (BEM) naming convention

const Menu = () => {
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">What is NXTGEN?</a></p>
    <p><a href="#possibility">Open Source</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#blogs">Blogs</a></p>
    <p><a href="#members">Members</a></p>
    <p><a href="#contact">Contact</a></p>
    </>
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nextgen__navbar">
      <div className="nextgen__navbar-links">
        <div className="nextgen__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nextgen__navbar-links_container">
          {/* <Menu/> */}
          <p><a href="#home">Home</a></p>
          <p><a href="#about">What is NXTGEN?</a></p>
          <p><a href="#possibility">Open Source</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blogs">Blogs</a></p>
          <p><a href="#members">Members</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="nextgen__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="nextgen__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className="nextgen__navbar-menu_container scale-up-center">
            <div className="nextgen__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#about">What is NXTGEN?</a></p>
                <p><a href="#possibility">Open Source</a></p>
                <p><a href="#features">Features</a></p>
                <p><a href="#blogs">Blogs</a></p>
                <p><a href="#members">Members</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
              <div className="nextgen__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Navbar