import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './WhyUs.module.css'
// Phone mockup images for different languages
import phoneMockupAr from '../../assets/images/WhyUs/iPhone 12 Pro 6.1_ Mockup.png'
import phoneMockupEn from '../../assets/images/WhyUs/3.png'
import icon1 from '../../assets/images/WhyUs/Container.png'
import icon2 from '../../assets/images/WhyUs/Container (1).png'
import icon3 from '../../assets/images/WhyUs/Container (2).png'
import icon4 from '../../assets/images/WhyUs/Container (3).png'
import icon5 from '../../assets/images/WhyUs/Container (4).png'
import icon6 from '../../assets/images/WhyUs/Container (5).png'

function PhoneWithAnimation({ phoneMockup }) {
  const [phoneRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
    once: false
  })
  
  return (
    <div 
      ref={phoneRef} 
      className={`${styles.phone} ${isIntersecting ? styles.animate : ''}`}
      style={{ transitionDelay: '0.1s' }}
    >
      <img src={phoneMockup} alt="Phone Mockup" />
    </div>
  )
}

function WhyUs() {
  const { language } = useLanguage()
  const t = translations[language]
  
  // Select phone mockup based on language
  const phoneMockup = language === 'en' ? phoneMockupEn : phoneMockupAr
  
  const features = [
    {
      id: 1,
      title: t.feature1Title,
      description: t.feature1Desc,
      iconColor: '#f6339a',
      borderColor: '#f6339a',
      gradient: 'linear-gradient(113.14555449336422deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)',
      position: { top: '250px', left: '0px' },
      width: '323px',
      iconImage: icon4
    },
    {
      id: 2,
      title: t.feature2Title,
      description: t.feature2Desc,
      iconColor: '#ff6900',
      borderColor: '#ff6900',
      gradient: 'linear-gradient(149.7987398027659deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)',
      position: { top: '260.94px', left: '919.5px' },
      width: '323px',
      iconImage: icon2
    },
    {
      id: 3,
      title: t.feature3Title,
      description: t.feature3Desc,
      iconColor: '#f6339a',
      borderColor: '#f6339a',
      gradient: 'linear-gradient(109.3395015673774deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)',
      position: { top: '1px', left: '876px' },
      width: '304px',
      iconImage: icon1
    },
    {
      id: 4,
      title: t.feature4Title,
      description: t.feature4Desc,
      iconColor: '#ff6900',
      borderColor: '#ff6900',
      gradient: 'linear-gradient(149.7987398027659deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)',
      position: { top: '493px', left: '82px' },
      width: '323px',
      iconImage: icon6
    },
    {
      id: 5,
      title: t.feature5Title,
      description: t.feature5Desc,
      iconColor: '#00b8db',
      borderColor: 'rgba(0, 184, 219, 0.3)',
      gradient: 'linear-gradient(153.08127566367557deg, rgba(0, 184, 219, 0.1) 0%, rgba(43, 127, 255, 0.1) 100%)',
      position: { top: '0px', left: '40px' },
      width: '323px',
      iconImage: icon3
    },
    {
      id: 6,
      title: t.feature6Title,
      description: t.feature6Desc,
      iconColor: '#00b8db',
      borderColor: 'rgba(0, 184, 219, 0.3)',
      gradient: 'linear-gradient(153.08127566367557deg, rgba(0, 184, 219, 0.1) 0%, rgba(43, 127, 255, 0.1) 100%)',
      position: { top: '497px', left: '840px' },
      width: '323px',
      iconImage: icon5
    }
  ]

  return (
    <section className={styles.whyUs} id="features">
      <div className={styles.badge}>
        <div className={styles.badgeDot}></div>
        <span>{t.featuresBadge}</span>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>{t.featuresTitle}</h2>
        <p className={styles.subtitle}>{t.featuresSubtitle}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.circles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
        </div>
        <PhoneWithAnimation phoneMockup={phoneMockup} />
        <div className={styles.features}>
          {features.map((feature, index) => {
            const [cardRef, isIntersecting] = useIntersectionObserver({
              threshold: 0.15,
              rootMargin: '0px 0px -100px 0px',
              once: false
            })
            
            // تحديد إذا كانت البطاقة على اليسار أو اليمين بناءً على موضعها
            // البطاقات على اليسار: left < 500px
            // البطاقات على اليمين: left >= 500px
            const isLeft = parseInt(feature.position.left) < 500
            const directionClass = isLeft ? styles.fromLeft : styles.fromRight
            
            return (
              <div
                key={feature.id}
                ref={cardRef}
                className={`${styles.featureCard} ${directionClass} ${isIntersecting ? styles.animate : ''}`}
                style={{
                  background: feature.gradient,
                  borderColor: feature.borderColor,
                  width: feature.width,
                  ...feature.position,
                  transitionDelay: `${index * 100 + 300}ms` // تأخير بعد ظهور الجوال
                }}
              >
              <div className={styles.iconContainer} style={{ background: feature.iconColor }}>
                <img src={feature.iconImage} alt={feature.title} className={styles.icon} />
              </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
