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
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
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
            <Link to="/prices" onClick={() => setIsMenuOpen(false)}>Prices</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contacts</Link>
            <Link to="/contact" className="mobile-pickup-button" onClick={() => setIsMenuOpen(false)}>Schedule a Pickup</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
