import styles from './Msg.module.scss'
import React from 'react'

const Msg = ({children}) => {

  return (
    <>
      { children === '' ? null : <div className={styles.containerMsg} ><h2>{children}</h2></div> }
    </>
  )
}

export { Msg }