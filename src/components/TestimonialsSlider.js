import React, { useState, useEffect } from 'react';
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

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect for auto-sliding
  useEffect(() => {
    const testimonialsPerSlide = isMobile ? 1 : 3;
    const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(sliderInterval);
  }, [isMobile]);

  const testimonialsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    

    
    <section className="testimonials-section">
      <p className="testimonials-pre-title">[ Our Testimonials ]</p>
      <h2>What Our Clients Say About Dhulai Factory</h2>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <h4>{testimonial.title}</h4>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
   
  );
};

export default TestimonialsSlider;
