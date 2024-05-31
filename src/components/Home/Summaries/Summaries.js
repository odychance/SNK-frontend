import styles from './summaries.module.scss'
import React, { useEffect, useRef } from 'react'
import { Separator, Buttons } from '@/components/Shared'
import animTitle from './Summaries.animTitle'
import animTarget from './Summaries.animTarget'
import Link from 'next/link'

const Summaries = () => {
    
    const recaps = [
        { season: 1 , name: "Attack on Titan: Season 1", poster: "https://flxt.tmsimg.com/assets/p10873160_b_v8_aa.jpg" },
        { season: 2 , name: "Attack on Titan: Season 2", poster: "https://i.pinimg.com/originals/63/ab/fc/63abfc98b12cbd3ae1f70e21595623a1.jpg" },
        { season: 3 , name: "Attack on Titan: Season 3", poster: "https://i.pinimg.com/originals/06/b2/b2/06b2b2c26dea031590c52c03c23d5921.jpg" }
    ]

    const titleRef = useRef(null)
    animTitle({titleRef})

    const targetRef = useRef(null)
    useEffect(() => {
        animTarget({targetRef})

    }, [targetRef])

  return (
        <div className={styles.container}>
            <h1 className={styles.title} ref={titleRef}>Some Seasons Recaps!</h1>

            <div className={styles.recapsContainer} ref={targetRef}>
                {recaps.map(el => (
                    <div className={styles.targetRecap} key={el.season}>
                            <img src={el.poster} />
                            <Link href='#'>
                                <h1> Recap of {el.name}</h1>
                            </Link>
                    </div>
                ))}
            </div>

            <Separator height={60} />

            <Link href='/Summaries' className={styles.containerBtn}>
                <Buttons.WatchMoreBtn text="See more!" />
            </Link>
        </div>
  )
}

export { Summaries }