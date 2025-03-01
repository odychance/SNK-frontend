import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.topContainer}>
            <div className={styles.footerLeft}>
                Know more about us!
            </div>

            <div className={styles.footerRight}>
                <h2>CONTACT US</h2>
                <div className={styles.contactUs}>
                    <div className={styles.contactIcon}>
                        <a target='_blank' href='https://wa.me/541132584511'>
                            <h3>Whatsapp</h3>
                            <Image src='/Media/Svg/whatsapp.svg' alt='wsIcon' className={styles.fbIcon} width={100} height={100} unoptimized />
                        </a>
                    </div>
                    <div className={styles.contactIcon}>
                        <a target='_blank' href='https://github.com/odychance?tab=repositories'>
                            <h3>Github</h3>
                            <Image src='/Media/Svg/github.svg' alt='ghIcon' className={styles.ghIcon} width={100} height={100} unoptimized />
                        </a>
                    </div>
                    <div className={styles.contactIcon}>
                        <a target='_blank' href='mailto:odychance96@gmail.com'>
                            <h3>Gmail</h3>
                            <Image src='/Media/Svg/gmail.svg' alt='gmailIcon' className={styles.gmailIcon} width={100} height={100} unoptimized />
                        </a>
                    </div>
                    <div className={styles.contactIcon}>
                        <a target='_blank' href='https://www.linkedin.com/in/oddychance' >
                            <h3>LinkedIn</h3>
                            <Image src='/Media/Svg/linkedIn.svg' alt='inIcon' className={styles.inIcon} width={100} height={100} unoptimized />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.bottomContainer}>
            <div />
            <h2> | SNK | Fandom | OddyChance | All rights reserved | </h2>
            Copyright © 2023 
        </div>
    </div>
  )
}

export default Footer