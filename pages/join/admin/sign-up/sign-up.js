import styles from './sign-up.module.scss'
import { useEffect, useRef }from 'react'
import { Forms } from '@/components/Form'
import { gsap } from 'gsap'

const signUpAdmin = () => {

  const imgRef = useRef(null)

  useEffect(() => {
    const anim = imgRef.current

    gsap.from(anim, {
      x: -500,
      scale: 1.9
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

      <img src="https://images2.alphacoders.com/606/606224.png" className={styles.backgroundImage} ref={imgRef}/>

      <Forms.FormAdmins.FormSignUp />
        
    </div>
  )
}

export default signUpAdmin