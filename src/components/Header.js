import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/dhulaifactorylogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        {/* Left - Logo */}
        <div className="header-left">
          <img src={logo} alt="Dhulai Factory Logo" className="logo" />
          <div>
            <h1>Dhulai Factory</h1>
            <p>Laundry / Laundromat & Dryclean</p>
          </div>
        </div>

        {/* Center - Brand */}
        <div className="header-center"></div>

        {/* Right - Nav + Button + Hamburger */}
        <div className="header-right">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/prices">Prices</Link></li>
              <li><Link to="/contact">Contacts</Link></li>
            </ul>
          </nav>

          <button className="pickup-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M2 12l18-9-7 9 7 9z"/>
            </svg>
            <span>Schedule a Pickup</span>
          </button>

          {/* Hamburger Menu */}
          <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <a href="/#prices" onClick={() => setIsMenuOpen(false)}>Prices</a>
            <a href="/#contacts" onClick={() => setIsMenuOpen(false)}>Contacts</a>
            <a href="/#pickup" className="mobile-pickup-button" onClick={() => setIsMenuOpen(false)}>Schedule a Pickup</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
