import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
  const location = useLocation()
  
  useEffect(() => {
    // التعامل مع hash في URL عند تحميل الصفحة
    if (location.hash) {
      const sectionId = location.hash.substring(1) // إزالة # من البداية
      
      const scrollToSection = () => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navbarHeight = 126
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          return true
        }
        return false
      }
      
      // ننتظر قليلاً للتأكد من أن الصفحة تم تحميلها بالكامل
      setTimeout(() => {
        if (!scrollToSection()) {
          // إذا فشلت، نحاول مرة أخرى
          setTimeout(() => scrollToSection(), 300)
        }
      }, 400)
    }
  }, [location.hash, location.pathname])
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="home-container">
      <NavbarSection />
      <Hero />
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
