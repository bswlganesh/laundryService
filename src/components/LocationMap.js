import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <section className="location-section">
      <h2>Find Us Here</h2>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6261169076074!2d77.10735307529286!3d28.73071757561124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0128340c3cb3%3A0x9da44a3554f45057!2sDHULAI%20FACTORY%20Laundry%2B%20Dry%20Cleaners%20%26%20Laundromat!5e0!3m2!1sen!2sin!4v1757933741362!5m2!1sen!2sin" 
        width="100%"
          height="450" 
         style={{ border: 0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Dhulai Factory Location"
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