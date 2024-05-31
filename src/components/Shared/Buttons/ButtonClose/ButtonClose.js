import React from 'react'
import styles from './ButtonClose.module.scss'

const ButtonClose = ({openCloseModal}) => {
  return (
    <div onClick={openCloseModal} className={styles.closeModal}>
        <div className={styles.leftBar}></div>
        <div className={styles.rightBar}></div>
    </div>
    )
}

export { ButtonClose }