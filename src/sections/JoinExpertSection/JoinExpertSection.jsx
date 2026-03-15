import React from 'react'
import JoinExpertForm from '../../components/JoinExpertForm/JoinExpertForm'
import styles from './JoinExpertSection.module.css'

function JoinExpertSection() {
    return (
        <section className={styles.joinExpertSection} id="join-form">
            <div className={styles.container}>
                <JoinExpertForm />
            </div>
        </section>
    )
}

export default JoinExpertSection
