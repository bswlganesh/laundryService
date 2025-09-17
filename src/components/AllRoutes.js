import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactPage from './ContactPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path='/prices' element={<PricesPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      {/* You can add other routes here, for example: <Route path="/" element={<HomePage />} /> */}
    </Routes>
  );
};

export default AllRoutes;