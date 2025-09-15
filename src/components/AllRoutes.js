import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Services from './Services';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      {/* You can add other routes here, for example: <Route path="/" element={<HomePage />} /> */}
    </Routes>
  );
};

export default AllRoutes;