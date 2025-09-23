import React from 'react';
import { Routes, Route} from 'react-router-dom';
import useScroll from './hooks/useScroll';
import './components/FloatingIcons.css'; // Import the new CSS
import Header from './components/Header';
import Hero from './pages/Hero';
import CleaningServices from './pages/CleaningServices';
import WelcomeSection from './components/WelcomeSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import PricingList from './components/PricingList';
import LocationMap from './components/LocationMap';

import Footer from './components/Footer';
import AboutUs from './components/AboutUs'; 
import ServicePage from './components/ServicePage'
import PricesPage from './pages/PricesPage';
import ContactPage from './components/ContactPage';
// Import icons
import phoneIcon from './assets/phone.svg';
import whatsappIcon from './assets/WhatsApp.svg';


// A new component to represent the Home Page content
const HomePage = () => (
  <>
    <Hero />
    <CleaningServices />
    <WelcomeSection />

    <TestimonialsSlider />
    <PricingList />
    <LocationMap />
  </>
);

export default function App() {
  useScroll(); // Use the GSAP-integrated scroll hook

  return (
    <>
      <Header />

      {/* Floating Action Buttons */}
      <a
        href="tel:+916287982169"
        className="floating-icon phone-icon"
        aria-label="Call us at +91 6287982169"
        target="_blank" rel="noopener noreferrer"
      >
        <img src={phoneIcon} alt="Call us" />
      </a>
      <a
        href="https://wa.me/916287982169"
        className="floating-icon whatsapp-icon"
        aria-label="Chat with us on WhatsApp"
        target="_blank" rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
     
      <main>
         
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path='/prices' element={<PricesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
