import React from 'react';
import './ServicePage.css';
import PricingList from './PricingList';
import serviceslaundry from "../assets/services-laundry.jpg"
import Carpetleaning from "../assets/carpet-cleaning.jpg";
import SofaCleaning from "../assets/sofa-cleaning.jpg";
import DryCleaning from "../assets/dry-cleaning.jpg";
import CarCleaning from "../assets/car-cleaning.jpg"
const ServicePage = () => {
  return (
    <div className="service-page-container">
      {/* Top Banner Section */}
      <div className="page-banner services-banner">
        <div className="banner-content">
          <nav className="breadcrumb">home / Services</nav>
          <h1>Services</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="service-page-main-content">
        <h2>Our Services</h2>

        {/* Laundry Services Section */}
        <section className="laundry-services-section">
          <div className="laundry-image-column">
            <img src={serviceslaundry} alt="Laundry Machines" loading="lazy" />
          </div>
          <div className="laundry-text-column">
            <h3>Laundry Services</h3>
            <p>
              We understand the importance of clean and fresh clothes and are dedicated to deliver the best service.
            </p>
            <div className="laundry-basis">
              Laundry (kg basis) 5kg Min. Load
            </div>
            <ul className="price-list">
              <li>
                <span>Wash & Fold</span>
                <span>₹60 (per kg)</span>
              </li>
              <li>
                <span>Wash & Steam Iron</span>
                <span>₹90 (per kg)</span>
              </li>
              <li>
                <span>Only Steam Iron</span>
                <span>₹15 (per piece) (using vacuum table)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Process Flowchart Section */}
        <div className="flowchart-container">
          <section className="process-flowchart">
            <div className="flowchart-step">Tagging of each lot</div>
            <div className="flowchart-step">Sorting of clothes according to colour</div>
            <div className="flowchart-step">Spotting of cuff & collar area</div>
            <div className="flowchart-step">Washing of clothes & Adding conditioner</div>
            <div className="flowchart-step">Clothes are hot air-dried and disinfected</div>
            <div className="flowchart-step">Packing and delivery</div>
          </section>
        </div>

        {/* Additional Services Grid Section */}
        <section className="additional-services-grid">
          <div className="service-card">
            <img src={DryCleaning} alt="Dry Cleaning" loading="lazy" />
            <div className="service-card-content">
              <h4>Dry Cleaning</h4>
              <p>
                Dhulai Factory offers specialized cleaning services for all kind of clothes, ensuring your garments receive the highest level of care. Our expert team is adept at handling a variety of fabrics and styles, from delicate dresses to everyday wear. Each item is carefully inspected and treated to maintain its beauty and longevity.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src={Carpetleaning} alt="Carpet Cleaning" loading="lazy" />
            <div className="service-card-content">
              <h4>Carpet Cleaning</h4>
              <p>
                Dhulai Factory provides best carpet cleaning service to keep your home or office looking fresh and inviting. Our professional team uses advanced techniques like shampooing for deep cleaning and then suction of dirt, stains, and allergens by latest machines. Our comprehensive cleaning process ensures your carpets are revitalized and refreshed.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src={SofaCleaning} alt="Sofa Cleaning" loading="lazy" />
            <div className="service-card-content">
              <h4>Sofa Cleaning</h4>
              <p>
                We start the process of sofa cleaning by inspecting the stains and area concerned. Gentle blowing & vacuuming process is used for removing any loose dust and dirt. Specialized cleaning solution is applied on the stains and then cleaning method specifically designed for your sofa fabric is followed. Finally mild rinsing and drying of sofa is done by suction process making your sofa look fresh and ready to use.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src={CarCleaning} alt="Car Washing" loading="lazy" />
            <div className="service-card-content">
              <h4>Car Washing</h4>
              <p>
                Welcome to our car wash! A thorough rinse is given to your car to remove loose dirt. Soft-cloth brushes gently scrub away tough stains. Special cleaning solution is applied on marks on car paint and then turning foam wash. A final rinse and your car would be dried with microfiber towels to prevent water spots. And to finish, vacuum and cleaning of interiors leave your car looking and feeling like new.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className='ServicePagePricingList'>
<PricingList/>
      </div>
      
    </div>
  );
};

export default ServicePage;