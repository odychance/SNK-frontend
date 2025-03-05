import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import YmirBg from '/public/Media/Images/ymirBg.jpg'

const NotFound = () => {
  return (
    <div className={styles.containerComponent}>
      <p className={styles.text}>page currently <br/>under maintenance.</p>
      <Image src={YmirBg} alt='ymir' className={styles.bgImage} />
    </div>
  )
}

export default NotFound