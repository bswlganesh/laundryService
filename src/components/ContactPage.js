import React from 'react';
import './ContactPage.css';
import './Shared.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import useTitleChange from '../hooks/useTitleChange';

export default function ContactPage() {
  useTitleChange('Contact Us');
  return (
    <div className="contact-page">
      {/* Section 1: Hero Banner */}
      <div className="page-banner">
        <div className="banner-content">
          <nav className="breadcrumb">home / Contact Us</nav>
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Section 2: Contact Info and Form */}
      <section className="contact-content-section">
        <div className="contact-container">
          {/* Left Column: Contact Info */}
          <div className="contact-info-column">
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-detail-icon" />
              <a className='contactMapAnchor' href=''>bswlganesh builing, Sector-11, Rohini, Delhi-110085</a>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="contact-detail-icon" />
              <span>baswalganesh1@gmail.com</span>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt className="contact-detail-icon" />
              <span>+91 6287982169</span>
            </div>
            <div className="contact-map-container">
              <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9903913801983!2d77.1107998752668!3d28.63005577566581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031877f14593%3A0x1559fde9e3a4e06!2sDHULAI%20FACTORY%20LAUNDRY%2B%20DRY%20CLEANERS!5e0!3m2!1sen!2sin!4v1678886155821!5m2!1sen!2sin"
        
        width="100%"
          height="450" 
         style={{ border: 0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Laundry Factory Location"
        ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
