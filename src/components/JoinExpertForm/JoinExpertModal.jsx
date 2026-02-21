import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../i18n/translations'
import styles from './JoinExpertModal.module.css'

// Icons
import whatsappIcon from '../../assets/images/footer/whatsapp logo.png'
import instagramIcon from '../../assets/images/footer/instagram.png'
import snapchatIcon from '../../assets/images/footer/snapchat.png'

function JoinExpertModal({ isOpen, onClose }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    specialization: '',
    address: ''
  })
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // التخصصات الأربعة من الموقع
  const specializations = [
    { id: 'ac', label: t.service1Title },
    { id: 'electricity', label: t.service2Title },
    { id: 'smart', label: t.service3Title },
    { id: 'network', label: t.service4Title }
  ]

  // منع scroll للـ body عند فتح المودال
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // إغلاق المودال عند الضغط على Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSpecializationSelect = (spec) => {
    setFormData(prev => ({
      ...prev,
      specialization: spec.label
    }))
    setIsDropdownOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // هنا يمكن إضافة منطق إرسال الفورم
    console.log('Form submitted:', formData)
    // إعادة تعيين الفورم وإغلاق المودال
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      specialization: '',
      address: ''
    })
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  const benefits = [
    t.joinFormBenefit1,
    t.joinFormBenefit2,
    t.joinFormBenefit3
  ]

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className={styles.content}>
          {/* القسم الأيمن - المعلومات */}
          <div className={styles.infoSection}>
            <div className={styles.infoHeader}>
              <h2 className={styles.infoTitle}>{t.joinFormTitle}</h2>
              <p className={styles.infoSubtitle}>{t.joinFormSubtitle}</p>
            </div>
            
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>

                  <span>{benefit}</span>
                  <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#00B8DB" strokeWidth="1.5"/>
                    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#00B8DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactSection}>
                <h3 className={styles.contactTitle}>{t.joinFormEmail}</h3>
                <div className={styles.contactItem}>

                  <span>info@khabeer</span>
                  <svg className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#2E536B" strokeWidth="1.5"/>
                    <path d="M2 7L10.165 12.7154C11.2571 13.4283 12.7429 13.4283 13.835 12.7154L22 7" stroke="#2E536B" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              
              <div className={styles.contactSection}>
                <h3 className={styles.contactTitle}>{t.joinFormSocial}</h3>
                <div className={styles.socialIcons}>
                  <div className={styles.socialItem}>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                      <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                    
                  </div>
                  <div className={styles.socialItem}>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                      <img src={instagramIcon} alt="Instagram" />
                    </a>
                    
                  </div>
                  <div className={styles.socialItem}>
                    <a href="https://snapchat.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                      <img src={snapchatIcon} alt="Snapchat" />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* القسم الأيسر - الفورم */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>{t.joinFormRequestTitle}</h3>
              <div className={styles.locationBadge}>

                <span>{t.joinFormLocationNote}</span>     
                <svg className={styles.locationIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C12 21 19 14.5 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 14.5 12 21 12 21Z" stroke="#0077B6" strokeWidth="1.5"/>
                  <circle cx="12" cy="9" r="3" stroke="#0077B6" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{t.joinFormFullName}</label>
                <div className={styles.nameInputs}>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={t.joinFormLastName}
                    className={styles.input}
                    required
                  />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t.joinFormFirstName}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>{t.joinFormPhone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+966 000 000 0000"
                  className={styles.input}
                  dir="ltr"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>{t.joinFormSpecialization}</label>
                <div className={styles.selectWrapper}>
                  <button
                    type="button"
                    className={`${styles.select} ${isDropdownOpen ? styles.selectOpen : ''}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={formData.specialization ? styles.selectedValue : styles.placeholder}>
                      {formData.specialization || t.joinFormSelectSpecialization}
                    </span>
                    <svg className={`${styles.arrow} ${isDropdownOpen ? styles.arrowUp : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className={styles.dropdown}>
                      {specializations.map((spec) => (
                        <button
                          key={spec.id}
                          type="button"
                          className={`${styles.dropdownItem} ${formData.specialization === spec.label ? styles.selected : ''}`}
                          onClick={() => handleSpecializationSelect(spec)}
                        >
                          {spec.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>{t.joinFormAddress}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t.joinFormAddressPlaceholder}
                  className={styles.input}
                  required
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                {t.joinFormSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinExpertModal
