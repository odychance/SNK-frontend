import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import YmirBg from '/public/Media/Images/ymirBg.jpg'

const NotFound = ({textPage = "page currently <br/>under maintenance."}) => {
  return (
    <div className={styles.containerComponent}>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: textPage }} />
      <Image src={YmirBg} alt='ymir' className={styles.bgImage} />
    </div>
  )
}

export default NotFound