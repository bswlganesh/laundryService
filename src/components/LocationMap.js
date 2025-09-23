import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <section className="location-section">
      <h2>Find Us Here</h2>
      <div className="map-container">
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
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9903913801983!2d77.1107998752668!3d28.63005577566581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031877f14593%3A0x1559fde9e3a4e06!2sDHULAI%20FACTORY%20LAUNDRY%2B%20DRY%20CLEANERS!5e0!3m2!1sen!2sin!4v1678886155821!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dhulai Factory Location"
        ></iframe> */}
      </div>
    </section>
  );
};

export default LocationMap;