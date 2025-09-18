import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useScroll from './hooks/useScroll'; // Import useScroll instead of useLenis
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
