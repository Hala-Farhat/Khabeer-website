import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './CTA.module.css'
// Arabic phone images
import phoneAr1 from '../../assets/images/Experts/Container (4).png'
import phoneAr2 from '../../assets/images/Experts/Container (5).png'
// English phone images
import phoneEn1 from '../../assets/images/Experts/2 (3).png'
import phoneEn2 from '../../assets/images/Experts/image 5.png'
import patternImage from '../../assets/images/hero/Globe.png'
import JoinExpertModal from '../../components/JoinExpertForm/JoinExpertModal'

// Arrow icon as inline SVG component
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function CTA() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Select phone images based on language
  const phone1Img = language === 'en' ? phoneEn1 : phoneAr1
  const phone2Img = language === 'en' ? phoneEn2 : phoneAr2
  
  const [phone1Ref, phone1Visible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
    once: false
  })
  
  const [phone2Ref, phone2Visible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
    once: false
  })
  
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.cta}>
        <div className={styles.rightContent}>
          <div className={styles.textContent} data-node-id="4:1135">
            <h2 className={styles.title} data-node-id="4:1136">{t.ctaTitle}</h2>
            <div className={styles.subtitle} data-node-id="4:1137">
              <p>{t.ctaSubtitle}</p>
            </div>
            <button className={styles.button} data-node-id="4:1138" onClick={() => setIsModalOpen(true)}>
              <span data-node-id="4:1142">{t.ctaButton}</span>
              <div className={styles.buttonIconWrapper}>
                <div className={styles.buttonIconContainer}>
                  <ArrowIcon />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.pattern}>
          <img src={patternImage} alt="Pattern" />
        </div>
        <div className={styles.phones}>
          <div ref={phone1Ref} className={`${styles.phone1} ${phone1Visible ? styles.animate : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className={styles.phoneFrame} data-node-id="4:1144">
              <div className={styles.phoneScreen} data-node-id="4:1145">
                <div className={styles.phoneScreenImage} data-node-id="4:1146">
                  <img src={phone1Img} alt="Expert App Screen 1" />
                </div>
                <div className={styles.phoneNotch} data-node-id="4:1147"></div>
              </div>
            </div>
          </div>
          <div ref={phone2Ref} className={`${styles.phone2} ${phone2Visible ? styles.animate : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.phoneFrame} data-node-id="4:1148">
              <div className={styles.phoneScreen} data-node-id="4:1149">
                <div className={styles.phoneScreenImage} data-node-id="4:1150">
                  <img src={phone2Img} alt="Expert App Screen 2" />
                </div>
                <div className={styles.phoneNotch} data-node-id="4:1151"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <JoinExpertModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default CTA
