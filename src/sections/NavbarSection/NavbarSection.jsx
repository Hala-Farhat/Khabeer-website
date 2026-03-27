import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './NavbarSection.module.css'
import logoImage from '../../assets/images/footer/Frame 90.png'
import globeIcon from '../../assets/images/hero/Globe.png'
import caseRoundIcon from '../../assets/images/hero/Case Round.svg'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import Analytics from '../../utils/analytics'

function NavbarSection({ activeSection }) {
  const { language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const t = translations[language]

  // تحديد القسم النشط الحالي (الأولوية للـ prop ثم الـ hash)
  const currentActive = activeSection || location.hash.substring(1)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // إغلاق القائمة عند تغيير اللغة
    setMenuOpen(false)
  }, [language])

  useEffect(() => {
    // منع scroll للـ body عند فتح القائمة
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar'
    setLanguage(newLang)
    Analytics.languageChange(newLang)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleMenuClick = (e) => {
    // إغلاق القائمة عند النقر على رابط
    closeMenu()
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 100
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

  const handleNavClick = (e, sectionId) => {
    closeMenu()
    Analytics.navClick(sectionId)

    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 500)
    }
    // For same-page, we let the default anchor behavior work with CSS scroll-margin-top
  }

  const handleLogoClick = (e) => {
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
    } else {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleJoinExpertClick = () => {
    Analytics.navClick('join-expert')
    navigate('/join-expert')
    closeMenu()
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" onClick={handleLogoClick} style={{ display: 'block', cursor: 'pointer' }}>
            <img src={logoImage} alt="Khabeer Logo" />
          </a>
        </div>
        <div className={styles.menu}>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={currentActive === 'about' ? styles.active : ''}
          >
            {t.navAbout}
          </a>
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
            className={currentActive === 'features' ? styles.active : ''}
          >
            {t.navFeatures}
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={currentActive === 'services' ? styles.active : ''}
          >
            {t.navServices}
          </a>
          <a
            href="#experts-benefits"
            onClick={(e) => handleNavClick(e, 'experts-benefits')}
            className={currentActive === 'experts-benefits' ? styles.active : ''}
          >
            {t.navExperts}
          </a>
        </div>
        <div className={styles.buttons}>
          <button className={styles.joinButton} onClick={handleJoinExpertClick}>
            <span>{t.joinExpert}</span>
            <img src={caseRoundIcon} alt="" className={styles.caseRoundIcon} aria-hidden="true" />
          </button>
          <button
            className={styles.countryButton}
            onClick={toggleLanguage}
            title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <span>{language === 'ar' ? 'ع' : 'EN'}</span>
            <img src={globeIcon} alt="Globe" className={styles.globeIcon} />
          </button>
        </div>
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ''}`}></span>
        </button>
      </div>
      {/* Sidebar/Drawer - Mobile Only */}
      <div
        className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}
        onClick={closeMenu}
      >
        <div
          className={styles.sidebarContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarLogo}>
              <img src={logoImage} alt="Khabeer Logo" />
            </div>
            <button
              className={styles.sidebarClose}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className={styles.sidebarMenu}>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={currentActive === 'about' ? styles.active : ''}
            >
              {t.navAbout}
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, 'features')}
              className={currentActive === 'features' ? styles.active : ''}
            >
              {t.navFeatures}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={currentActive === 'services' ? styles.active : ''}
            >
              {t.navServices}
            </a>
            <a
              href="#experts-benefits"
              onClick={(e) => handleNavClick(e, 'experts-benefits')}
              className={currentActive === 'experts-benefits' ? styles.active : ''}
            >
              {t.navExperts}
            </a>
          </nav>
          <div className={styles.sidebarButtons}>
            <button
              className={styles.sidebarJoinButton}
              onClick={handleJoinExpertClick}
            >
              <span>{t.joinExpert}</span>
              <img src={caseRoundIcon} alt="" className={styles.caseRoundIcon} aria-hidden="true" />
            </button>
            <button
              className={styles.sidebarCountryButton}
              onClick={() => {
                toggleLanguage()
                closeMenu()
              }}
            >
              <span>{language === 'ar' ? 'ع' : 'EN'}</span>
              <img src={globeIcon} alt="Globe" className={styles.globeIcon} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarSection
