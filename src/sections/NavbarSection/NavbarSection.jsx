import React, { useState, useEffect } from 'react'
import styles from './NavbarSection.module.css'
import logoImage from '../../assets/images/footer/Frame 90.png'
import caseRoundIcon from '../../assets/images/hero/Case Round.svg'
import globeIcon from '../../assets/images/hero/Globe.png'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'

function NavbarSection() {
  const { language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[language]

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
    setLanguage(language === 'ar' ? 'en' : 'ar')
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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoImage} alt="Khabeer Logo" />
        </div>
        <div className={styles.menu}>
          <a href="#about">{t.navAbout}</a>
          <a href="#features">{t.navFeatures}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#experts">{t.navExperts}</a>
        </div>
        <div className={styles.buttons}>
          <button 
            className={styles.countryButton}
            onClick={toggleLanguage}
            title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <img src={globeIcon} alt="Globe" className={styles.globeIcon} />
            <span>{language === 'ar' ? 'ع' : 'EN'}</span>
          </button>
          <button className={styles.joinButton}>
            <img src={caseRoundIcon} alt="Case Round" className={styles.caseRoundIcon} />
            <span>{t.joinExpert}</span>
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
            <a href="#about" onClick={handleMenuClick}>{t.navAbout}</a>
            <a href="#features" onClick={handleMenuClick}>{t.navFeatures}</a>
            <a href="#services" onClick={handleMenuClick}>{t.navServices}</a>
            <a href="#experts" onClick={handleMenuClick}>{t.navExperts}</a>
          </nav>
          <div className={styles.sidebarButtons}>
            <button 
              className={styles.sidebarCountryButton}
              onClick={() => {
                toggleLanguage()
                closeMenu()
              }}
            >
              <img src={globeIcon} alt="Globe" className={styles.globeIcon} />
              <span>{language === 'ar' ? 'ع' : 'EN'}</span>
            </button>
            <button 
              className={styles.sidebarJoinButton}
              onClick={closeMenu}
            >
              <img src={caseRoundIcon} alt="Case Round" className={styles.caseRoundIcon} />
              <span>{t.joinExpert}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarSection
