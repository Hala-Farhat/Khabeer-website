import React from 'react'
import NavbarSection from '../sections/NavbarSection/NavbarSection'
import Hero from '../sections/Hero/Hero'
import AboutApp from '../sections/AboutApp/AboutApp'
import Services from '../sections/Services/Services'
import WhyUs from '../sections/WhyUs/WhyUs'
import JoinExperts from '../sections/JoinExperts/JoinExperts'
import CTA from '../sections/CTA/CTA'
import FooterSection from '../sections/FooterSection/FooterSection'
import { useLanguage } from '../contexts/LanguageContext'

function Home() {
  const { language } = useLanguage()
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="home-container">
      <NavbarSection />
      <Hero />
      <div className="hero-shadow"></div>
      <AboutApp />
      <Services />
      <WhyUs />
      <JoinExperts />
      <CTA />
      <FooterSection />
    </div>
  )
}

export default Home
