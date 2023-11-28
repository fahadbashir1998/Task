import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Aboutsystem from './Aboutsystem/Aboutsystem'
import CategorySection from './Ccategories/Ccategories'
import Datasources from './Datasources/Datasources'
import OurPartners from './OurPartners/OurPartners'
import Footer from '../Components/Footer'


const HomePage = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <Aboutsystem></Aboutsystem>
       <CategorySection></CategorySection>
      <Datasources></Datasources>
      <OurPartners></OurPartners>
      <Footer></Footer>

    </div>
  )
}

export default HomePage