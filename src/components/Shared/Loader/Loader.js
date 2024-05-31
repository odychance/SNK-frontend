import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from './Loader.module.scss'
import { gsap } from 'gsap'

const Loader = () => {

    const loadingRef = useRef(null)
    const router = useRouter(null)

    useEffect(() => {
        const loader = loadingRef.current

        const handleRouteChange = () => {
            gsap.fromTo(loader, {
                top: "-200vh"
            }, {
                top: "-18vh",
                duration: 1
            })
            
            setTimeout(() => {
                gsap.fromTo(loader, {
                    top: "-18vh"
                }, {
                    top: "-200vh",
                    duration: 1
                })
            }, 2000);


            
        }
        router.events.on("routeChangeStart", handleRouteChange)

        return () => {
            router.events.off("routeChangeStart", handleRouteChange)
        }

    }, [])


  return (
    <div className={styles.containerLoader} ref={loadingRef}>
        <div className={styles.loading} />
        <img src="/Media/Images/logo1.webp" className={styles.logo} />
    </div>
  )
}

export { Loader }