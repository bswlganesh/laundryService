import React from 'react';
import './Footer.css';
import phoneIconUrl from '../assets/phone.svg';
import mapMarkerIconUrl from '../assets/map-marker.svg';
import envelopeIconUrl from '../assets/envelope.svg';

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

        

        {/* Column 3: Contact Phone No. */}
        <div className="thirdfooter footer-column">
          <h3>Contact Phone No.</h3>
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={phoneIconUrl} alt="Phone" className="contact-icon" />
            </div>
            <span>+91 92132 03071</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={phoneIconUrl} alt="Phone" className="contact-icon" />
            </div>
            <span>+91 99589 95774</span>
          </div>
        </div>
        {/* Column 2: Contacts Address */}
        <div className="footer-column">
          <h3>Contacts Address</h3>
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={mapMarkerIconUrl} alt="Location" className="contact-icon" />
            </div>
            <span className='FooterContactAddress'>D-3/21-22, Upper Ground Floor, Sector-11, Rohini, Delhi-110085</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <img src={envelopeIconUrl} alt="Email" className="contact-icon" />
            </div>
            <span >info@dhulaifactory.in</span>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dhulai Factory. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;