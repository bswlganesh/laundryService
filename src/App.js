import React from 'react'
import Header from './components/Header'
import Hero from './pages/Hero'
import CleaningServices from './pages/CleaningServices'
import WelcomeSection from './components/WelcomeSection'
import TestimonialsSlider from './components/TestimonialsSlider'
import PricingList from './components/PricingList'
import LocationMap from './components/LocationMap'






export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <CleaningServices />
      <WelcomeSection/>
 <TestimonialsSlider/>
 <PricingList/>

 <LocationMap/>

    </>
    
    
  )
}
