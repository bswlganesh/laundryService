import React from 'react';
import './AboutUs.css';

// Placeholder images
import founderImage1 from '../assets/founder1.png';
import founderImage2 from '../assets/founder2.png';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Section 1: Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <nav className="breadcrumb">
            <span>home &gt; About Us</span>
          </nav>
          <h1>About Us</h1>
        </div>
      </section>

      {/* Section 2: Introduction & Founders */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="founders-column">
            <div className="founder-card">
              <img src={founderImage1} alt="Sonia Gupta, Founder" />
              <p>Sonia Gupta (Founder)</p>
            </div>
            <div className="founder-card">
              <img src={founderImage2} alt="Ravi Gupta, Co-Founder" />
              <p>Ravi Gupta (Co-Founder)</p>
            </div>
          </div>
          <div className="intro-text-column">
            <h2>Your Trusted Laundry Partner</h2>
            <p>
              Dhulai Factory is your one-stop solution for premium laundry and dry cleaning services. We are dedicated to providing you with the highest quality care for your garments, using state-of-the-art technology and eco-friendly products.
            </p>
            <p>
              Our journey began with a simple mission: to make professional cleaning convenient, affordable, and reliable for everyone. Founded by Sonia and Ravi Gupta, our team is passionate about delivering exceptional results and outstanding customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Your Trusted Cleaning Partner */}
      <section className="trusted-partner-section">
        <h2 className="trusted-partner-title">Your Trusted Cleaning Partner</h2>
        <div className="features-grid">
          <div className="feature-block">
            <h3>Expert Care</h3>
            <p>Our team is trained to handle a wide range of fabrics and stains, ensuring your clothes receive the best possible treatment.</p>
          </div>
          <div className="feature-block">
            <h3>Eco-Friendly</h3>
            <p>We use environmentally safe detergents and cleaning processes to protect your clothes and the planet.</p>
          </div>
          <div className="feature-block">
            <h3>Convenience</h3>
            <p>With our easy-to-use app and reliable pickup/delivery service, laundry day has never been simpler.</p>
          </div>
          <div className="feature-block">
            <h3>Quality</h3>
            <p>We are committed to delivering impeccably clean, fresh, and well-packaged garments every time.</p>
          </div>
          <div className="feature-block">
            <h3>Satisfaction</h3>
            <p>Your satisfaction is our priority. We stand by our work and are always here to ensure you're happy with the results.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;