import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import JoinExpertPage from './pages/JoinExpertPage'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID)
}

function AppContent() {
  const { language } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = language === 'ar' ? 'خبير' : 'Khabeer'

    if (language === 'en') {
      document.documentElement.classList.add('lang-en')
    } else {
      document.documentElement.classList.remove('lang-en')
    }
  }, [language])

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname })
    }
  }, [location])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/join-expert" element={<JoinExpertPage />} />
    </Routes>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
