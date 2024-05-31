import React from 'react'
import styles from './WatchMoreBtn.module.scss'

const WatchMoreBtn = ({text}) => {
  return <h2 className={styles.watchMore}>{text}</h2> 
}

export { WatchMoreBtn }