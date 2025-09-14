import React, { useRef, useEffect, useState } from 'react';
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

const ServiceCard = ({ image, name, scrollOffset }) => {
  const cardRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      // Find the card's position relative to the top of the document
      setElementTop(cardRef.current.getBoundingClientRect().top + window.scrollY);
    }
  }, []);

  // Calculate a relative scroll value to make the effect start near the element
  const relativeScroll = scrollOffset - elementTop;

  const parallaxStyle = {
    // The 0.05 factor controls the speed of the parallax effect. Keep it small for a subtle motion.
    transform: `translateY(${relativeScroll * 0.05}px)`,
  };

  return (
    <div className="service-card" ref={cardRef}>
      <div className="service-card-image-container">
        <img src={image} alt={name} style={parallaxStyle} />
      </div>
      <div className="service-card-content">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ServiceCard;