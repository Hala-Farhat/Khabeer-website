import React, { useEffect } from 'react'
import NavbarSection from '../sections/NavbarSection/NavbarSection'
import JoinExpertSection from '../sections/JoinExpertSection/JoinExpertSection'
import FooterSection from '../sections/FooterSection/FooterSection'
import { useLanguage } from '../contexts/LanguageContext'

function JoinExpertPage() {
  const { language } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // محاولة إضافية للتأكد من الصعود لأعلى بعد تحميل المكونات
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 100)
  }, [])

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <NavbarSection />
      <div style={{ paddingTop: '120px', minHeight: 'calc(100vh - 80px)', paddingBottom: '60px' }}>
        <JoinExpertSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default JoinExpertPage
