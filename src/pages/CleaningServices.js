import React from 'react';
import './CleaningServices.css';
import ServiceCard, { services } from '../components/ServiceCard';

const CleaningServices = () => {
  return (
    <div className="cleaning-services-container">
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} image={service.image} name={service.name} />
        ))}
      </div>
    </div>
  );
};

export default CleaningServices;    