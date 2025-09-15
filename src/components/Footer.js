import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: About Us */}
        <div className="footer-column">
          <h2>Dhulai Factory</h2>
          <p>
            You are at the right address for professional cleaning. We always use the latest technologies and cleaning methods to deliver the most effective solutions for stains and sensitive fabrics.
          </p>
        </div>

        {/* Column 2: Contacts Address */}
        <div className="footer-column">
          <h3>Contacts Address</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>D-3/21-22, Upper Ground Floor, Sector-11, Rohini, Delhi-110085</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>info@dhulaifactory.in</span>
          </div>
        </div>

        {/* Column 3: Contact Phone No. */}
        <div className="thirdfooter footer-column">
          <h3>Contact Phone No.</h3>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+91 92132 03071</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+91 99589 95774</span>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 Dhulai Factory. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;