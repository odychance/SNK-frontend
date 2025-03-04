import styles from './sign-up.module.scss'
import { useEffect, useRef }from 'react'
import { Forms } from '@/components/Form'
import { gsap } from 'gsap'
import Image from 'next/image'

const SignUpAdmin = () => {

  const imgRef = useRef(null)

  useEffect(() => {
    const anim = imgRef.current
    gsap.set(anim, {
      x: -500,
      scale: 1.9,
    })
    gsap.to(anim, {
      x: 0,
      duration: 2,
      scale: 1,
      ease: "power1"
    })
  }, [])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundImage} ref={imgRef}>
        <Image src="https://images2.alphacoders.com/606/606224.png" alt="imagen" layout='fill' objectFit='cover' />
      </div>
      <Forms.FormAdmins.FormSignUp />
    </div>
  )
}

export default SignUpAdmin