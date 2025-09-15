import React, { useState } from 'react';
import './PricingList.css';

// Data source for the pricing table
const pricingData = {
  'MEN': [
    { name: 'Shirt', price: '80+' },
    { name: 'T-Shirt', price: '70+' },
    { name: 'Pant/Jeans', price: '80+' },
    { name: 'Shorts', price: '60+' },
    { name: 'Tie', price: '50+' },
    { name: 'Kurta', price: '80+' },
    { name: 'Pyjama', price: '70+' },
    { name: 'Kurta (Embroidery)', price: '100+' },
    { name: 'Waistcoat', price: '120+' },
    { name: 'Coat/Blazer', price: '170+' },
    { name: 'Sherwani (Simple)', price: '200+' },
    { name: 'Sherwani (Embroidery)', price: '250+' },
  ],
  'WOMEN': [
    { name: 'Ladies Top/Tshirt', price: '60+' },
    { name: 'Kurta/Shirt', price: '70+' },
    { name: 'Long Kurta (Anarkali)', price: '100+' },
    { name: 'Plazo/Pant/Sharara', price: '70+' },
    { name: 'Dupatta', price: '50+' },
    { name: 'Saree (printed/ cotton)', price: '120+' },
    { name: 'Saree (Embroidery)', price: '140+' },
    { name: 'Blouse', price: '60+' },
    { name: 'Coard set', price: '150+' },
    { name: 'Skirt', price: '100+' },
    { name: 'Shorts', price: '60+' },
    { name: 'Jeans/Trouser', price: '80+' },
    { name: 'Dress', price: '120+' },
    { name: 'Gown', price: '250+' },
    { name: 'Lehnga (only)', price: '250+' },
    { name: 'Lehnga (3Pc)', price: '350+' },
    { name: 'Lehnga (3 Pc Bridal)', price: '800+' },
  ],
  'KIDS': [
     { name: 'Jeans', price: '50+' },
     { name: 'Short', price: '50+' },
     { name: 'Top', price: '50+' },
     { name: 'Frock', price: '80+' },
     { name: 'Frock(Embroidery)', price: '100+' },
     { name: 'Kurta', price: '50+' },
     { name: 'Plazo/Pyjama/Sharara', price: '50+' },
     { name: 'Gown', price: '120+' },
     { name: 'Soft Toys', price: '50+' },
  ],
  'WINTER WEARS': [
     { name: 'Cap', price: '80+' },
     { name: 'Muffler', price: '80+' },
     { name: 'Gloves set', price: '100+' },
     { name: 'Coat/Blazer', price: '170+' },
     { name: 'Shawl/Stole', price: '100+' },
     { name: 'Loyi (Shawl)', price: '200+' },
     { name: 'Jacket', price: '120+' },
     { name: 'Jacket (leather)', price: '200+' },
     { name: 'Sweater', price: '100+' },
     { name: 'Sweet shirt', price: '90+' },
     { name: 'Over Coat', price: '150+' },
     { name: 'Suit (2Pc)', price: '250+' },
     { name: 'Suit (3PC)', price: '350+' },
  ],
  'HOUSEHOLD ITEMS': [
     { name: 'Bedsheet (Cotton)', price: '100+' },
     { name: 'Bedsheet (Heavy)', price: '120+' },
     { name: 'Pillow cover set', price: '100+' },
     { name: 'Cusion Cover (Per Pc)', price: '50+' },
     { name: 'AC Blanket/Dohar/Comforter', price: '200+' },
     { name: 'Blanket(Single bed)', price: '200+' },
     { name: 'Blanket(Double Bed)', price: '280+' },
     { name: 'Quilt (Single)', price: '250+' },
     { name: 'Quilt (Double)', price: '350+' },
     { name: 'Curtains (Per panel)', price: '80+' },
     { name: 'Carpet', price: '20+(Per Sq feet)' },
  ],
};

const PricingList = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(pricingData)[0]);

  return (
    <div className="pricing-section-fix">
    <section className="pricing-section">
      <span className="pricing-pre-title">[ Our Service Prices ]</span>
      <h2>Laundry & Dry Cleaning Price List</h2>

      <div className="tabs-container">
        {Object.keys(pricingData).map((tab) => (
          <button key={tab} className={`tab-button ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <div className="price-list-content">
        {pricingData[activeTab].map((item, index) => (
          <div key={index} className="price-item">
            <span>{item.name}</span>
            <span className="price">₹{item.price}</span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default PricingList;