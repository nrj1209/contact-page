import React from 'react'
import nav_icon from '../../assets/nav-icon.svg'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="header">
      <div className='header-inner-container'>
        <div>
          <p className="header-logo">BawriGroup</p>
        </div>
        <div>
          <img className="navigation-icon" src={nav_icon} alt="Your SVG" />
        </div>
      </div>
    </div>
  )
}

export default Navbar