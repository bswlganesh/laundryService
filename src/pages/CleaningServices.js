import React, { useState, useEffect } from 'react';
import './CleaningServices.css';
import ServiceCard, { services } from '../components/ServiceCard';

const CleaningServices = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
console.log("Scroll position:", offsetY);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cleaning-services-container">
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} image={service.image} name={service.name} loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default CleaningServices;    