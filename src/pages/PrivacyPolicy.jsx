import React from 'react'
import NavbarSection from '../sections/NavbarSection/NavbarSection'
import FooterSection from '../sections/FooterSection/FooterSection'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'
import styles from './PrivacyPolicy.module.css'

function PrivacyPolicy() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={styles.container}>
      <NavbarSection />
      <div className={styles.content}>
        <h1 className={styles.title}>{t.privacyTitle}</h1>
        <div className={styles.divider}></div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyIntroTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyIntroText1}
          </p>
          <p className={styles.paragraph}>
            {t.privacyIntroText2}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyDataTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyDataText}
          </p>
          
          <h3 className={styles.subsectionTitle}>{t.privacyClientDataTitle}</h3>
          <p className={styles.paragraph}>
            {t.privacyClientDataText}
          </p>

          <h3 className={styles.subsectionTitle}>{t.privacyProviderDataTitle}</h3>
          <p className={styles.paragraph}>
            {t.privacyProviderDataText}
          </p>

          <h3 className={styles.subsectionTitle}>{t.privacyTechDataTitle}</h3>
          <p className={styles.paragraph}>
            {t.privacyTechDataText}
          </p>

          <h3 className={styles.subsectionTitle}>{t.privacyAIDataTitle}</h3>
          <p className={styles.paragraph}>
            {t.privacyAIDataText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyLegalBasisTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyLegalBasisText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyUsageTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyUsageText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacySharingTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacySharingText1}
          </p>
          <p className={styles.paragraph}>
            {t.privacySharingText2}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacySecurityTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacySecurityText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyRetentionTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyRetentionText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyRightsTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyRightsText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyTransferTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyTransferText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.privacyUpdateTitle}</h2>
          <p className={styles.paragraph}>
            {t.privacyUpdateText}
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.paragraph}>
            {t.privacyConflictText}
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default PrivacyPolicy
