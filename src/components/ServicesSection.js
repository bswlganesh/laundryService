import React from 'react';
import './ServicesSection.css';

// Placeholder images - you can replace these with your actual asset imports
import laundryImage from '../assets/laundry.jpg';
import dryCleaningImage from '../assets/dry-cleaning.jpg';
import curtainsCleaningImage from '../assets/curtains-cleaning.jpg';
import carpetCleaningImage from '../assets/carpet-cleaning.jpg';

const servicesData = [
  {
    id: 1,
    imageSrc: laundryImage,
    title: 'Laundry Service',
    description: 'High-quality washing and folding for your everyday clothes, ensuring they are fresh and clean.',
  },
  {
    id: 2,
    imageSrc: dryCleaningImage,
    title: 'Dry Cleaning',
    description: 'Expert care for your delicate and special garments, using eco-friendly solvents.',
  },
  {
    id: 3,
    imageSrc: curtainsCleaningImage,
    title: 'Curtains Cleaning',
    description: 'Revitalize your home with our professional curtain and drape cleaning services.',
  },
  {
    id: 4,
    imageSrc: carpetCleaningImage,
    title: 'Carpet Cleaning',
    description: 'Deep cleaning for your carpets to remove dirt, stains, and allergens effectively.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h4 className="services-subtitle">[ Our Services ]</h4>
      <h2 className="services-title">Dry Cleaning & Laundry</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-image-container">
              <img src={service.imageSrc} alt={service.title} />
              <div className="image-overlay"></div>
            </div>
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="more-info-btn">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;