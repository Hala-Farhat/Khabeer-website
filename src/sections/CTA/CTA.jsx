import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './CTA.module.css'
import expert1 from '../../assets/images/Experts/Container (4).png'
import expert2 from '../../assets/images/Experts/Container (5).png'
import patternImage from '../../assets/images/hero/Globe.png'

// Figma asset URLs (valid for 7 days)
const imgProfessionalSplash1 = "https://www.figma.com/api/mcp/asset/36645af1-b162-4fa7-83a5-2ae7d9855640";
const imgProfessionalSplash2 = "https://www.figma.com/api/mcp/asset/b05d9325-1374-475e-ad08-afee5b09bb75";
const imgIcon = "https://www.figma.com/api/mcp/asset/60308d3b-8da5-4200-834b-9908e2903c75";

function CTA() {
  const { language } = useLanguage()
  const t = translations[language]
  
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
            <button className={styles.button} data-node-id="4:1138">
              <div className={styles.buttonIconWrapper}>
                <div className={styles.buttonIconContainer}>
                  <img src={imgIcon} alt="" className={styles.buttonIcon} data-node-id="4:1139" />
                </div>
              </div>
              <span data-node-id="4:1142">{t.ctaButton}</span>
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
                  <img src={imgProfessionalSplash1} alt="Expert App Screen 1" />
                </div>
                <div className={styles.phoneNotch} data-node-id="4:1147"></div>
              </div>
            </div>
          </div>
          <div ref={phone2Ref} className={`${styles.phone2} ${phone2Visible ? styles.animate : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.phoneFrame} data-node-id="4:1148">
              <div className={styles.phoneScreen} data-node-id="4:1149">
                <div className={styles.phoneScreenImage} data-node-id="4:1150">
                  <img src={imgProfessionalSplash2} alt="Expert App Screen 2" />
                </div>
                <div className={styles.phoneNotch} data-node-id="4:1151"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
