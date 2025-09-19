import React, { useState, useEffect } from 'react';
import './Hero.css'; // This path is correct relative to its new location
import heroImage from '../assets/hero-image.jpg'; // Assuming you have this image
import phoneIcon from '../assets/phone.svg';

import mapMarkerIcon from '../assets/map-marker.svg';


const Hero = () => {
  const services = [
    'Laundry',
    'Curtains Cleaning',
    'Sofa Cleaning',
    'Dry Cleaning',
    'Carpet Cleaning',
    'Car Cleaning',
  ];

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${offsetY * 0.3}px) scale(1.1)`,
  };

  return (
    <section className="hero-container">
      {/* Left Section (Image) */}
      <div className="hero-image-section">
        <div className="image-blob-container">
          <img
            src={heroImage}
            alt="Person using a washing machine"
            className="hero-image"
            style={parallaxStyle}
          />
        </div>
        <div className="floating-badge">
          FAST, CLEAN AND SMELLS NICE!
        </div>
      </div>

      {/* Right Section (Content) */}
      <div className="hero-content-section">
        {/* Decorative circles */}
        <div className="deco-circle circle-1"></div>
        <div className="deco-circle circle-2"></div>

        <div className="tagline-container">
          <span className="tagline">Laundry and Dry Cleaning Service</span>
        </div>
        <h1 className="main-heading">DHULAI FACTORY</h1>

        {/* Services List */}
        <div className="services-container">
            {/* Subtle bubble graphics */}
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <ul className="services-list">
            {services.map((service) => (
                <li key={service}>{service}</li>
            ))}
            </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="HeroContactItem">
            <img src={mapMarkerIcon} alt="Location" className="hero-contact-icon" />
            <span>Rohini, Delhi, 110085</span>
          </div>
          <div className="HeroContactItem">
            <a href="tel:+919213203071" className="contact-phone-link">
              <img src={phoneIcon} alt="Phone" className="hero-contact-icon" />
              <span>+91 92132 03071</span>
            </a>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Hero;