import { useEffect } from 'react'
import Home from './pages/Home'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'

function AppContent() {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    
    // Add/remove lang-en class for scoped icon flipping
    if (language === 'en') {
      document.documentElement.classList.add('lang-en')
    } else {
      document.documentElement.classList.remove('lang-en')
    }
  }, [language])

  return <Home />
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
