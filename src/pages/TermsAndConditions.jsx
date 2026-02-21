import React from 'react'
import NavbarSection from '../sections/NavbarSection/NavbarSection'
import FooterSection from '../sections/FooterSection/FooterSection'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'
import styles from './TermsAndConditions.module.css'

function TermsAndConditions() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={styles.container}>
      <NavbarSection />
      <div className={styles.content}>
        <h1 className={styles.title}>{t.termsTitle}</h1>
        <div className={styles.divider}></div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsIntroTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsIntroText1}
          </p>
          <p className={styles.paragraph}>
            {t.termsIntroText2}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsRoleTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsRoleText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsAccountTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsAccountText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsEligibilityTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsEligibilityText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsServiceRequestTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsServiceRequestText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsOrderStatusTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsOrderStatusText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsCompletionTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsCompletionText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsPaymentTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsPaymentText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsAITitle}</h2>
          <p className={styles.paragraph}>
            {t.termsAIText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsReviewsTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsReviewsText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsDisputesTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsDisputesText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsProviderResponsibilityTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsProviderResponsibilityText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsMisuseTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsMisuseText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsLiabilityTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsLiabilityText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsDataTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsDataText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsDataRightsTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsDataRightsText}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.termsLawTitle}</h2>
          <p className={styles.paragraph}>
            {t.termsLawText}
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default TermsAndConditions
