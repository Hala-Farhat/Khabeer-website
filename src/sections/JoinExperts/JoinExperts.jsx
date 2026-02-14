import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './JoinExperts.module.css'

import icon1 from '../../assets/images/Experts/Container.png'
import icon2 from '../../assets/images/Experts/Container (1).png'
import icon3 from '../../assets/images/Experts/Container (2).png'
import icon4 from '../../assets/images/Experts/Container (3).png'

function JoinExperts() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const benefits = [
    {
      id: 1,
      title: t.benefit1Title,
      iconColor: '#ff6900',
      gradient: 'linear-gradient(153.43494882292202deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)',
      borderColor: '#ff6900',
      iconImage: icon4
    },
    {
      id: 2,
      title: t.benefit2Title,
      iconColor: '#00b8db',
      gradient: 'linear-gradient(122.56548409610215deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)',
      borderColor: '#00b8db',
      iconImage: icon1,
      shadow: '0px 4px 4px 0px rgba(6, 182, 212, 0.25)'
    },
    {
      id: 3,
      title: t.benefit3Title,
      iconColor: '#00b8db',
      gradient: 'linear-gradient(122.56548409610215deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)',
      borderColor: '#00b8db',
      iconImage: icon3
    },
    {
      id: 4,
      title: t.benefit4Title,
      iconColor: '#f6339a',
      gradient: 'linear-gradient(113.46534996107374deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)',
      borderColor: '#f6339a',
      iconImage: icon2
    }
  ]

  return (
    <section className={styles.joinExperts} id="experts">
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <div className={styles.badgeDot}></div>
            <span>{t.expertsBadge}</span>
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>{t.expertsTitle}</h2>
            <div className={styles.subtitle}>
              <p>{t.expertsSubtitle}</p>
            </div>
          </div>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => {
            const [cardRef, isIntersecting] = useIntersectionObserver({
              threshold: 0.15,
              rootMargin: '0px 0px -100px 0px',
              once: false
            })
            
            return (
              <div
                key={benefit.id}
                ref={cardRef}
                className={`${styles.benefitCard} ${isIntersecting ? styles.animate : ''}`}
                style={{
                  background: benefit.gradient,
                  borderTopColor: benefit.borderColor,
                  boxShadow: benefit.shadow || 'none',
                  transitionDelay: `${index * 120}ms`
                }}
              >
                <div className={styles.iconContainer} style={{ background: benefit.iconColor }}>
                  <img src={benefit.iconImage} alt={benefit.title} className={styles.icon} />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default JoinExperts
