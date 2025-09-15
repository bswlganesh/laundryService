import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import CleaningServices from './pages/CleaningServices';
import WelcomeSection from './components/WelcomeSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import PricingList from './components/PricingList';
import LocationMap from './components/LocationMap';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

// A new component to represent the Home Page content
const HomePage = () => (
  <>
    <Hero />
    <CleaningServices />
    <WelcomeSection />
    <ServicesSection />
    <TestimonialsSlider />
    <PricingList />
    <LocationMap />
  </>
);

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
