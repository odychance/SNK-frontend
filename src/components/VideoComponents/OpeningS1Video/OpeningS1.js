import styles from './OpeningS1.module.scss'
import { useEffect, useRef } from 'react'
import anim from './Opening.anim'

export const OpeningS1 = () => {

  const animVideo = useRef(null) 

  useEffect(() => {

    anim({animVideo})

  }, [])

  return (
    <div className={styles.containerVideo} ref={animVideo}>
        <video className={styles.video} autoPlay muted loop>
            <source src='/Media/Video/OriginalOpening.mp4' type="video/mp4"/>
        </video>
    </div>
  )
}