import React from 'react';
import './WelcomeSection.css';
import welcomeImage from '../assets/welcome-image.jpg';

const WelcomeSection = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-image-container">
        <img src={welcomeImage} alt="Dhulai Factory Interior" />
      </div>
      <div className="welcome-text-container">
        <h2>Welcome To Dhulai Factory</h2>
        <h3 className="subtitle">Laundry At Its Best</h3>
        <p>
          At Dhulai Factory, we believe that clean clothes are the cornerstone of a confident and vibrant life. We've built our service from the ground up to provide you with an unparalleled laundry experience that combines quality, convenience, and care.
        </p>
        <p>
          Our state-of-the-art facility is equipped with the latest technology to ensure your garments are treated with the utmost respect. From everyday wear to delicate fabrics, we handle each item with precision, returning them to you fresh, crisp, and ready to wear.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;