import styles from './sign-in.module.scss'
import React, { useEffect, useRef } from 'react'
import { Forms } from '@/components/Form'
import { gsap } from 'gsap'

const SignInAdmin = () => {

  const imgRef = useRef(null)

  useEffect(() => {

    const el = imgRef.current

    gsap.from( el, {
      scale: 2,
      opacity: 0.5,
    })

    gsap.to( el, {
      scale: 1.1,
      opacity: 1,
      duration: 2
    })

  }, [])

  return (
    <div className={styles.signInContainer}>

      <img src="https://images.alphacoders.com/934/934847.jpg" className={styles.bgImg} ref={imgRef}/>
      
      <Forms.FormAdmins.FormSignIn />

    </div>
  )
}

export default SignInAdmin