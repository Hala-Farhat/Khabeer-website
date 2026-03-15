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
  const [activeSection, setActiveSection] = React.useState('')

  useEffect(() => {
    // 1. التعامل مع الـ Hash الأصلي عند تحميل الصفحة (Direct Linking Fix)
    const initialHash = location.hash
    if (initialHash) {
      const sectionId = initialHash.substring(1)
      setActiveSection(sectionId)

      const performInitialScroll = () => {
        const element = document.getElementById(sectionId)
        if (element) {
          // استخدام scrollIntoView بدلاً من scrollTo اليدوي لأنه يحترم scroll-margin-top في CSS
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }

      // محاولة التمرير عدة مرات للتأكد من تحميل العناصر (خاصة في التبويبات الجديدة)
      const timers = [
        setTimeout(performInitialScroll, 100),
        setTimeout(performInitialScroll, 500),
        setTimeout(performInitialScroll, 1000)
      ]

      return () => timers.forEach(clearTimeout)
    }
  }, []) // تنفيذ مرة واحدة فقط عند التحميل

  useEffect(() => {
    // 2. ScrollSpy: تحديث الرابط أثناء السكرول لجميع الأقسام
    const sectionIds = ['hero', 'about', 'features', 'services', 'experts-benefits']

    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px', // يركز على القسم العلوي من الشاشة
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setActiveSection(id)
          // تحديث الـ URL بدون التسبب في إعادة تحميل الصفحة
          window.history.replaceState(null, '', `/#${id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // مراقبة جميع الأقسام المحددة
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="home-container">
      <NavbarSection activeSection={activeSection} />
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
