import React, { useEffect, useRef } from 'react'
import styles from './AboutAnime.module.scss'
import { Buttons } from '@/components/Shared'
import Link from 'next/link'
import anim from './AboutAnime.anim'
import animTitle from './AboutAnime.animTitle'

const AboutAnime = ({data, loading }) => {

    const aboutContainerRef = useRef(null)

    const titleRef = useRef(null)
    
    useEffect(() => {
        animTitle({titleRef})
        anim({ aboutContainerRef })
    }, [!loading])

  return (
    <>
        { loading ? null : (
            <div className={styles.AboutContainer}>
                <h1 ref={titleRef}>Aditional information <br/>about the anime</h1>
        
                <div className={styles.targetContainer} ref={aboutContainerRef}>
                    {data.getBackOfs.map( target => (
                        <div className={styles.target} key={target.id}>
                                <img src={target.imgRef} />
        
                                <div className={styles.textContainer}>
                                    <h2>{target.title}</h2>
                                    <span>{target.description}</span>
                                </div>
                        </div>
                    ))}
                </div>
        
                <Link href='BackOfs'>
                    <Buttons.WatchMoreBtn text="More Info!" />
                </Link>
            </div>
        )}
    </>
  )
}

export { AboutAnime }