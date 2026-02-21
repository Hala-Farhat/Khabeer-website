import ReactGA from 'react-ga4'

const isInitialized = !!import.meta.env.VITE_GA_MEASUREMENT_ID

export const trackEvent = (category: string, action: string, label?: string) => {
  if (isInitialized) {
    ReactGA.event({
      category,
      action,
      label
    })
  }
}

export const Analytics = {
  // Navigation Events
  navClick: (section: string) => {
    trackEvent('Navigation', 'Click', section)
  },

  // Language Events
  languageChange: (language: string) => {
    trackEvent('Language', 'Change', language)
  },

  // Join Expert Modal Events
  joinExpertModalOpen: () => {
    trackEvent('Join Expert', 'Modal Open')
  },

  joinExpertModalClose: () => {
    trackEvent('Join Expert', 'Modal Close')
  },

  joinExpertFormSubmit: (specialty: string) => {
    trackEvent('Join Expert', 'Form Submit', specialty)
  },

  joinExpertFormSuccess: () => {
    trackEvent('Join Expert', 'Form Success')
  },

  joinExpertFormError: (error: string) => {
    trackEvent('Join Expert', 'Form Error', error)
  },

  // Social Links Events
  socialClick: (platform: string) => {
    trackEvent('Social', 'Click', platform)
  },

  // CTA Events
  ctaClick: (ctaName: string) => {
    trackEvent('CTA', 'Click', ctaName)
  },

  // Download App Events
  downloadAppClick: (store: string) => {
    trackEvent('Download App', 'Click', store)
  },

  // Footer Events
  footerLinkClick: (link: string) => {
    trackEvent('Footer', 'Link Click', link)
  },

  // Scroll Events
  scrollToSection: (section: string) => {
    trackEvent('Scroll', 'To Section', section)
  }
}

export default Analytics
