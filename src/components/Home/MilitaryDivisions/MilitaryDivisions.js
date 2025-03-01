import React, { useRef } from 'react'
import styles from './MilitaryDivisions.module.scss'
import { Separator, Buttons } from '@/components/Shared'
import animTitle from './MilitaryDivisions.animTitle'
import animDivisions from './MilitaryDivisions.animDivisions'
import Link from 'next/link'
import Image from 'next/image'

const MilitaryDivisions = () => {

    const titleRef = useRef(null)
    animTitle({titleRef})

    const militaryPoliceRef = useRef(null)
    const scoutingLegionRef = useRef(null)
    const stationaryGuardRef = useRef(null)
    animDivisions({militaryPoliceRef, scoutingLegionRef, stationaryGuardRef})



  return (
    <div className={styles.divisionsContainer}>
        <div className={styles.containerTitle} ref={titleRef}>
            <h1 className={styles.title2}>What military unit do you prefer?</h1>
            <h1 className={styles.title}>What military unit do you prefer?</h1>
        </div>

        <Image src="/Media/Images/snk-military-divisions/backgroundImg.png" className={styles.backgroundImg}  fill alt="image" unoptimized/>

        <div className={styles.divisionTarget}>
            <div className={styles.scoutingLegion} ref={scoutingLegionRef}>
                <img src="https://i.pinimg.com/originals/3c/e3/07/3ce307efc1ca80cdefd51256fb0a30ce.png" className={styles.legion} />
                <h2>"A dream is not only about never giving up, but about sacrificing yourself for what you want to achieve."</h2>
                <h2>Commander Erwin Smith.</h2>
            </div>

            <div className={styles.militaryPolice} ref={militaryPoliceRef}>
                <img src="https://c.wallhere.com/photos/be/78/anime_Attack_on_Titans_Shingeki_no_Kyojin-1860341.jpg!d" className={styles.police} />
                <h2>"everyone had to be drunk on something to keep pushing on... Everyone.. was slave to something."</h2>
                <h2>Commander Kenny Akerman.</h2>
            </div>

            <div className={styles.stationaryGuard} ref={stationaryGuardRef}>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53bcf84b-5beb-40ce-bfec-156ae1e58b7f/d6hx2b2-5ae657ce-b8b8-4ace-97d0-c6bf908e1481.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzYmNmODRiLTViZWItNDBjZS1iZmVjLTE1NmFlMWU1OGI3ZlwvZDZoeDJiMi01YWU2NTdjZS1iOGI4LTRhY2UtOTdkMC1jNmJmOTA4ZTE0ODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MIVipmb-zQfWeYZaQuGf1KxZCQ9_N1WmKyAuU8ccHnQ" className={styles.guard} />
                <h2>"If a powerful external enemy appeared to threaten humanity, humanity would probably unite and stop fighting each other."</h2>
                <h2>Commander Pixis Dot.</h2>
            </div>
        </div>
        
        <Link href='/military-divisions'>
            <Buttons.WatchMoreBtn text="Military Groups"/>
        </Link>

        <Separator height={100} />
    </div>
  )
}

export { MilitaryDivisions }