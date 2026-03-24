import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Services.module.css'

function ServiceIcon({ type }) {
  if (type === 'electricity') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path d="M13 2L5 13h5l-1 9 8-11h-5l1-9z" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'wifi') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path d="M2 8a17 17 0 0 1 20 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M5 12a12 12 0 0 1 14 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M8.5 16a7 7 0 0 1 7 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="19.5" r="1.5" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'smart-home') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1v-8.5z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M7 5a5 5 0 0 1 10 0c0 2.2-1.3 3.8-2.4 5.2-.9 1.1-1.6 2.1-1.6 3.3V15h-2v-1.5c0-1.2-.7-2.2-1.6-3.3C8.3 8.8 7 7.2 7 5z" fill="currentColor" />
      <rect x="9" y="16.5" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="9.5" y="19.5" width="5" height="1.8" rx="0.9" fill="currentColor" />
    </svg>
  )
}

function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const servicesByLanguage = {
    ar: [
      {
        id: 'electrical',
        title: 'الخدمات الكهربائية',
        bullets: [
          'التمديدات الكهربائية، تركيب لوحات التحكم، ومعالجة مشاكل الأحمال.',
          'فحص القواطع وتجهيز البنية التحتية للأنظمة الذكية.'
        ],
        iconType: 'electricity',
        iconColor: '#00b8db',
        borderColor: '#00b8db',
        gradient: 'linear-gradient(107.18deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)'
      },
      {
        id: 'network',
        title: 'الشبكات والإنترنت المنزلي',
        bullets: [
          'تركيب شبكات الإنترنت اللاسلكية وتقوية الإشارة وتوسيع التغطية.',
          'توزيع الشبكة، ربط الأجهزة الذكية، وإعداد أجهزة الراوتر وأنظمة Mesh.'
        ],
        iconType: 'wifi',
        iconColor: '#ff6900',
        borderColor: '#ff6900',
        gradient: 'linear-gradient(134.07deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)'
      },
      {
        id: 'smart-home',
        title: 'الأجهزة والأنظمة الذكية',
        bullets: [
          'تركيب أنظمة المنزل الذكي وكاميرات المراقبة.',
          'أنظمة الإنذار والحماية، والتحكم الذكي بالإضاءة والتكييف.',
          'ربط الأنظمة بالتطبيقات الذكية وصيانة أعطالها.'
        ],
        iconType: 'smart-home',
        iconColor: '#f6339a',
        borderColor: '#f6339a',
        gradient: 'linear-gradient(101.86deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)'
      },
      {
        id: 'ac',
        title: 'خدمات التكييف والتبريد',
        bullets: [
          'تركيب الأجهزة الجديدة، صيانة الأعطال والتسريبات، وتنظيف وتعقيم المكيفات.',
          'تعبئة غاز الفريون، فحص ضعف التبريد، وصيانة أجهزة السبليت والمركزي واستبدال قطع الغيار.'
        ],
        iconType: 'ac',
        iconColor: '#00b8db',
        borderColor: '#00b8db',
        gradient: 'linear-gradient(107.18deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)',
        shadow: '0px 4px 4px 0px rgba(6, 182, 212, 0.25)'
      }
    ],
    en: [
      {
        id: 'electrical',
        title: 'Electrical Services',
        bullets: [
          'Electrical wiring, control panel installation, and load issue handling.',
          'Breaker inspection and infrastructure readiness for smart systems.'
        ],
        iconType: 'electricity',
        iconColor: '#00b8db',
        borderColor: '#00b8db',
        gradient: 'linear-gradient(107.18deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)'
      },
      {
        id: 'network',
        title: 'Home Networks & Internet',
        bullets: [
          'Wireless network setup, stronger signal, and wider coverage.',
          'Network distribution, smart device connection, and router/Mesh setup.'
        ],
        iconType: 'wifi',
        iconColor: '#ff6900',
        borderColor: '#ff6900',
        gradient: 'linear-gradient(134.07deg, rgba(255, 105, 0, 0.1) 0%, rgba(240, 177, 0, 0.1) 100%)'
      },
      {
        id: 'smart-home',
        title: 'Smart Devices & Systems',
        bullets: [
          'Smart home systems and surveillance camera installation.',
          'Alarm and protection systems with smart lighting and AC control.',
          'Smart app integration and troubleshooting maintenance.'
        ],
        iconType: 'smart-home',
        iconColor: '#f6339a',
        borderColor: '#f6339a',
        gradient: 'linear-gradient(101.86deg, rgba(246, 51, 154, 0.1) 9.4707%, rgba(173, 70, 255, 0.1) 90.529%)'
      },
      {
        id: 'ac',
        title: 'Air Conditioning & Cooling',
        bullets: [
          'New unit installation, fault/leak maintenance, and AC cleaning/disinfection.',
          'Freon refill, cooling efficiency checks, and split/central AC maintenance.'
        ],
        iconType: 'ac',
        iconColor: '#00b8db',
        borderColor: '#00b8db',
        gradient: 'linear-gradient(107.18deg, rgba(0, 184, 219, 0.1) 11.232%, rgba(43, 127, 255, 0.1) 88.768%)',
        shadow: '0px 4px 4px 0px rgba(6, 182, 212, 0.25)'
      }
    ]
  }

  const services = servicesByLanguage[language] || servicesByLanguage.ar

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
                boxShadow: service.shadow,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={styles.iconContainer} style={{ background: service.iconColor }}>
                <ServiceIcon type={service.iconType} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.bullets}>
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={`${service.id}-bullet-${bulletIndex}`}>{bullet}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
