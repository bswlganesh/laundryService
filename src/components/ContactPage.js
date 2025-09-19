import React from 'react';
import './ContactPage.css';
import './Shared.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
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
              <a className='contactMapAnchor' href='https://maps.app.goo.gl/R8R49tScsfrPzbCn6'>D-3/21-22, Upper Ground Floor, Sector-11, Rohini, Delhi-110085</a>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="contact-detail-icon" />
              <span>info@dhulaifactory.in</span>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt className="contact-detail-icon" />
              <span>+91 92132 03071</span>
            </div>
            <div className="contact-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6261169076074!2d77.10735307529286!3d28.73071757561124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0128340c3cb3%3A0x9da44a3554f45057!2sDHULAI%20FACTORY%20Laundry%2B%20Dry%20Cleaners%20%26%20Laundromat!5e0!3m2!1sen!2sin!4v1757933741362!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dhulai Factory Location"
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
