import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './AboutApp.module.css'

function AboutApp() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [badgeRef, badgeVisible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
    once: false
  })
  
  const [contentRef, contentVisible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
    once: false
  })
  
  return (
    <section className={styles.aboutApp} id="about">
      <div ref={badgeRef} className={`${styles.badge} ${badgeVisible ? styles.animate : ''}`}>
        <div className={styles.badgeDot}></div>
        <span>{t.aboutBadge}</span>
      </div>
      <div ref={contentRef} className={`${styles.content} ${contentVisible ? styles.animate : ''}`}>   
        <h2 className={styles.heading}>
          {t.aboutHeading}
        </h2>
        <p className={styles.text}>
          {t.aboutText}
        </p>

      </div>
    </section>
  )
}

export default AboutApp
