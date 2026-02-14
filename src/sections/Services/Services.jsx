import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Services.module.css'
import acImage from '../../assets/images/services/ChatGPT Image 7 فبراير 2026، 10_36_29 ص 1.png'
import electricityImage from '../../assets/images/services/Vector (7).png'
import smartHomeImage from '../../assets/images/services/Group (3).png'
import networkImage from '../../assets/images/services/Layer 1 (1).png'

function Services() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const services = [
    {
      id: 1,
      title: t.service1Title,
      description: t.service1Desc,
      image: acImage,
      borderColor: '#f6339a',
      gradient: 'linear-gradient(103.99080091333762deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)',
      contentGradient: 'linear-gradient(143.04905109339757deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)',
      shadowColor: 'rgba(0, 184, 219, 0.2)'
    },
    {
      id: 2,
      title: t.service2Title,
      description: t.service2Desc,
      image: electricityImage,
      borderColor: '#d7db00',
      gradient: 'linear-gradient(110.13209657337484deg, rgba(215, 219, 0, 0.1) 11.232%, rgba(244, 255, 43, 0.1) 88.768%)',
      contentGradient: 'linear-gradient(152.92115693324047deg, rgba(219, 215, 0, 0.1) 11.232%, rgba(244, 255, 43, 0.1) 88.768%)',
      shadowColor: 'rgba(215, 219, 0, 0.2)'
    },
    {
      id: 3,
      title: t.service3Title,
      description: t.service3Desc,
      image: smartHomeImage,
      borderColor: '#00b8db',
      gradient: 'linear-gradient(110.13429888800938deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)',
      contentGradient: 'linear-gradient(152.92115693324047deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)',
      shadowColor: 'rgba(236, 72, 153, 0.2)'
    },
    {
      id: 4,
      title: t.service4Title,
      description: t.service4Desc,
      image: networkImage,
      borderColor: '#ff6900',
      gradient: 'linear-gradient(138.94351272436435deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)',
      contentGradient: 'linear-gradient(170.7273982227997deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)',
      shadowColor: 'rgba(255, 105, 0, 0.2)'
    }
  ]

  return (
    <section className={styles.services} id="services">
      <div className={styles.badge}>
        <div className={styles.badgeDot}></div>
        <span>{t.servicesBadge}</span>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>{t.servicesTitle}</h2>
        <p className={styles.subtitle}>{t.servicesSubtitle}</p>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => {
          const [cardRef, isIntersecting] = useIntersectionObserver({
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px',
            once: false
          })
          
          return (
            <div
              key={service.id}
              ref={cardRef}
              className={`${styles.card} ${isIntersecting ? styles.animate : ''}`}
              style={{
                borderColor: service.borderColor,
                background: service.gradient,
                boxShadow: `0px 0px 30px 0px ${service.shadowColor}`,
                transitionDelay: `${index * 100}ms`
              }}
            >
            <div className={styles.imageContainer}>
              <img src={service.image} alt={service.title} />
            </div>
            <div 
              className={styles.cardContent}
              style={{
                background: service.contentGradient
              }}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
