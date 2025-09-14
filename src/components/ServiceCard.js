import React from 'react';
import './ServiceCard.css';

// Import images from the assets folder
import laundryImage from '../assets/laundry.jpg';
import dryCleaningImage from '../assets/dry-cleaning.jpg';
import curtainsCleaningImage from '../assets/curtains-cleaning.jpg';
import carpetCleaningImage from '../assets/carpet-cleaning.jpg';
import sofaCleaningImage from '../assets/sofa-cleaning.jpg';
import carCleaningImage from '../assets/car-cleaning.jpg';

export const services = [
  { id: 1, name: 'Laundry', image: laundryImage },
  { id: 2, name: 'Dry Cleaning', image: dryCleaningImage },
  { id: 3, name: 'Curtains Cleaning', image: curtainsCleaningImage },
  { id: 4, name: 'Carpet Cleaning', image: carpetCleaningImage },
  { id: 5, name: 'Sofa Cleaning', image: sofaCleaningImage },
  { id: 6, name: 'Car Cleaning', image: carCleaningImage },
];

const ServiceCard = ({ image, name }) => {
  return (
    <div className="service-card">
      <img
        src={image}
        alt={name}
      />
      <div className="service-card-content">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ServiceCard;