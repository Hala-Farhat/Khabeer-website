import React, { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import container1 from '../../assets/images/hero/Container.png'
import container2 from '../../assets/images/hero/Container (1).png'
import container3 from '../../assets/images/hero/Container (2).png'
import container4 from '../../assets/images/hero/Container (3).png'
// English versions of phone images
import container2En from '../../assets/images/hero/3.png'
import container3En from '../../assets/images/hero/1 (3).png'
import container4En from '../../assets/images/hero/2 (3).png'
import patternImage from '../../assets/images/hero/Globe.png'
import badgeIcon from '../../assets/images/hero/Icon (5).png'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const [contentVisible, setContentVisible] = useState(false)
  const [phonesVisible, setPhonesVisible] = useState(false)
  const contentRef = useRef(null)
  const phonesRef = useRef(null)
  
  // Select images based on language
  const phoneLeftImg = language === 'en' ? container4En : container4
  const phoneRightImg = language === 'en' ? container3En : container3
  const phoneCenterImg = language === 'en' ? container2En : container2

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setContentVisible(true)
      setPhonesVisible(true)
      return
    }

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true)
        } else {
          setContentVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )

    const phonesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhonesVisible(true)
        } else {
          setPhonesVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )

    if (contentRef.current) {
      contentObserver.observe(contentRef.current)
    }
    
    if (phonesRef.current) {
      phonesObserver.observe(phonesRef.current)
    }

    return () => {
      contentObserver.disconnect()
      phonesObserver.disconnect()
    }
  }, [])
  
  return (
    <section className={styles.hero}>
      <div className={styles.pattern}>
        <img src={patternImage} alt="Pattern" />
      </div>
      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentInner}>
          <div className={`${styles.badge} ${contentVisible ? styles.animate : ''}`}>
            <div className={styles.badgeIcon}>
              <img src={badgeIcon} alt="Icon" />
            </div>
            <span>{t.heroBadge}</span>
          </div>
          <div className={`${styles.textContent} ${contentVisible ? styles.animate : ''}`}>
            <h1 className={styles.title}>{t.heroTitle}</h1>
            <p className={styles.subtitle}>{t.heroSubtitle}</p>
            <div className={styles.notice}>
              <span>{t.heroNotice}</span>
            </div>
          </div>
        </div>
      </div>
      <div ref={phonesRef} className={styles.phones}>
        {/* الجوال الأيسر - يظهر أولاً */}
        <div className={`${styles.phoneLeft} ${phonesVisible ? styles.animate : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className={styles.phoneFrame}>
            <img src={phoneLeftImg} alt="Phone Left" />
          </div>
          <div className={styles.phoneNotch} />
        </div>
        {/* الجوال الأيمن - يظهر ثانياً */}
        <div className={`${styles.phoneRight} ${phonesVisible ? styles.animate : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div className={styles.phoneFrame}>
            <img src={phoneRightImg} alt="Phone Right" />
          </div>
          <div className={styles.phoneNotch} />
        </div>
        {/* الجوال الأوسط - يظهر أخيراً فوقهم */}
        <div className={`${styles.phoneCenter} ${phonesVisible ? styles.animate : ''}`} style={{ transitionDelay: '0.8s' }}>
          <div className={styles.phoneFrame}>
            <img src={phoneCenterImg} alt="Phone Center" />
          </div>
          <div className={styles.phoneNotch} />
        </div>
      </div>
    </section>
  )
}

export default Hero
