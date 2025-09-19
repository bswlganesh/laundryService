import React from 'react'
import "./PricesPage.css"
import PricingList from '../components/PricingList'
import useTitleChange from '../hooks/useTitleChange';
export default function PricesPage() {
  useTitleChange('Pricing');
  return (
    <div className='pricing-page-container'>
        {/* Top Banner Section */}
      <div className="pricing-page-banner services-banner">
        <div className="banner-content">
          <nav className="breadcrumb">home / Prices</nav>
          <h1>Prices</h1>
          
        </div>
      </div>

      <div className='PricesPagePricingList'>
<PricingList/>
      </div>
    </div>
  )
}
