import React from 'react';
import './TestimonialsSlider.css';

// Data source for the testimonials (as provided, unchanged)
const testimonials = [
  { id: 1, title: 'Highly Recommend', text: 'I wanted to take a moment to thank you for the excellent laundry service. My clothes always come back looking and smelling fresh. The convenience is unbeatable.', author: 'Vivek Manhnani' },
  { id: 2, title: 'Amazed With Their Service', text: 'A happy customer. I had given some wedding outfits for dry cleaning and was amazed with their service. The staff is professional and the delivery was on time.', author: 'Hemant' },
  { id: 3, title: 'Staff is Professional', text: 'The owner Ravi ji goes above and beyond to customer satisfaction. The staff is professional and courteous. I highly recommend their services.', author: 'Meenakshi Ahuja' },
  { id: 4, title: 'Game Changer!', text: 'Dhulai Factory has been a total game changer for our busy family. The pickup and delivery service is always on time, and the quality is consistently great.', author: 'Priya S.' },
  { id: 5, title: 'Impeccable Quality', text: 'The attention to detail is what sets them apart. My delicate fabrics are handled with care, and everything is returned impeccably clean and pressed.', author: 'Ankit Sharma' },
  { id: 6, title: 'Reliable and Convenient', text: 'As a working professional, I barely have time for laundry. This service is reliable, convenient, and worth every penny. My weekends are mine again!', author: 'Neha Gupta' },
  { id: 7, title: 'Saved My Favorite Dress', text: 'I thought a stubborn stain had ruined my favorite dress, but the team at Dhulai Factory worked their magic. It looks brand new! Thank you!', author: 'Rohan Mehra' },
  { id: 8, title: 'Best in the Business', text: 'I’ve tried several laundry services, and this is by far the best. The app is easy to use, the prices are fair, and the service is top-notch.', author: 'Sonia F.' },
  { id: 9, title: 'Exceptional Customer Service', text: 'Had a special request for my laundry and the team was so accommodating. It’s rare to find such great customer service these days. 5 stars!', author: 'Amit Patel' },
];

// To create a seamless loop, we duplicate the testimonials.
const extendedTestimonials = [...testimonials, ...testimonials];

const TestimonialsSlider = () => {
  // Calculate animation duration based on the number of testimonials
  // to maintain a somewhat consistent speed.
  const animationDuration = testimonials.length * 5; // 5 seconds per card

  return (
    <section className="testimonials-section">
      <p className="testimonials-pre-title">[ Our Testimonials ]</p>
      <h2>What Our Clients Say About Dhulai Factory</h2>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{ 
            animation: `scroll ${animationDuration}s linear infinite`
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card">
              <h4>{testimonial.title}</h4>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
