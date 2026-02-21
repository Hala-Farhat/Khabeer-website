import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import styles from './FooterSection.module.css'
import logoImage from '../../assets/images/footer/Frame 90.png'
import snapchatIcon from '../../assets/images/footer/snapchat.png'
import instagramIcon from '../../assets/images/footer/instagram.png'
import whatsappIcon from '../../assets/images/footer/whatsapp logo.png'

function FooterSection() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const t = translations[language]

  const scrollToSection = (sectionId) => {
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

  const handleFooterNavClick = (e, sectionId) => {
    e.preventDefault()
    
    // إذا كنا في الصفحة الرئيسية، فقط ننتقل للقسم
    if (location.pathname === '/') {
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else {
      // إذا كنا في صفحة أخرى، ننتقل للصفحة الرئيسية ثم للقسم
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 500)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.logo}>
            <a href="/" onClick={handleLogoClick} style={{ display: 'block', cursor: 'pointer' }}>
              <img src={logoImage} alt="Khabeer Logo" />
            </a>
          </div>
          <p className={styles.description}>
            {t.footerDescription}
          </p>
        </div>
        <div className={styles.links}>
          <h3 className={styles.sectionTitle}>{t.footerQuickLinks}</h3>
          <ul className={styles.linksList}>
          <a href="#about">{t.navAbout}</a>
          <a href="#features">{t.navFeatures}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#experts">{t.navExperts}</a>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.sectionTitle}>{t.footerContact}</h3>
          <div className={styles.contactInfo}>
            <div className={styles.email}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>info@khabeer</span>
            </div>
            <div className={styles.social}>
              <a 
                href="https://www.snapchat.com/add/khabeerapp?share_id=g2Dzu6cYOIA&locale=en-US" 
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
              >
                <img src={snapchatIcon} alt="Snapchat" />
              </a>
              <a 
                href="https://www.instagram.com/khabeerapp2026?igsh=MTRjamExa2tiZmRveQ==" 
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a 
                href="https://wa.me/yourwhatsappnumber" 
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a 
                href="https://www.tiktok.com/@khabeerapp?_r=1&_t=ZS-93niEyUeBsm" 
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          <span className={styles.copyrightText}>{t.footerCopyright}</span>
          <span className={styles.copyrightDash}>—</span>
          <span className={styles.copyrightEnglish}>© 2026 khabeerapp.com/</span>
        </div>
        <div className={styles.legal}>
          <Link to="/terms-and-conditions">{t.footerTerms}</Link>
          <Link to="/privacy-policy">{t.footerPrivacy}</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
