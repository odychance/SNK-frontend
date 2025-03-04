import React, { useEffect, useRef } from 'react'
import styles from './titansTarget.module.scss'
import { Buttons } from '@/components/Shared'
import anim from './TitansTarget.anim'
import animImg from './TitansTarget.animImg'
import Link from 'next/link'

const TitansTarget = () => {

    const titans = [
        { id: 2, titan: "Female Titan", image: 'https://sm.ign.com/ign_latam/screenshot/default/annie-leonhart-is-the-female-titan_2tuh.jpg'},
        { id: 3, titan: "Colossus Titan", image: 'https://s3.artes9.com/2014/02/titan-colosal.jpg'},
        { id: 4, titan: "Attack Titan", image: 'https://i0.wp.com/otakuorbit.com/wp-content/uploads/2022/01/Screenshot-2022-01-11-185129.png?ssl=1'},
        { id: 1, titan: "Armored Titan", image: 'https://codigoesports.com/wp-content/uploads/2022/01/Attack-on-Titan-Titan-Acorazado.jpg'},
        { id: 5, titan: "Beast Titan", image: 'https://areajugones.sport.es/wp-content/uploads/2022/02/beast-titan.jpg'},
        { id: 6, titan: "Cart Titan", image: 'https://www.mundodeportivo.com/alfabeta/hero/2023/04/titan-carguero-tamano-real-cosplay.jpg?width=1200'},
        { id: 7, titan: "Jaw Titan", image: 'https://pbs.twimg.com/media/FOa-oqHUcAUNxj-?format=jpg&name=large'},
        { id: 8, titan: "War Hammer Titan", image: 'https://sm.ign.com/ign_latam/screenshot/default/tvanimejin-ji-noju-ren-the-final-season-pvmp4still034_p92y.jpg'},
        { id: 9, titan: "Founding Titan (EREN)", image: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/04/Ataque-a-los-titanes-El-amanecer-de-la-humanidad-Anime-Titan-Fundador-Titan-de-Ataque.jpg?fit=2436%2C1366&quality=50&strip=all&ssl=1'},
    ]

    const titleRef = useRef(null)
    anim({titleRef})

    const imgRef = useRef(null)
    useEffect(() => {
        animImg({imgRef})
    }, [imgRef.children])


  return (
    <div className={styles.mainContainer}>
        <div className={styles.titansContainer}>
            <h1 className={styles.titansTitle} ref={titleRef}>Watch amazing titans!</h1>


            <div className={styles.containerTarget} ref={imgRef}>
                {titans.map( titan => (
                    <div className={styles.skewImage} key={titan.id}>
                        <h2 className={styles.titanName}>{titan.titan}</h2>
                        <img src={titan.image} alt="Titan" className={styles.targetImage} />
                    </div>
                ))}
            </div>

            <img src='https://images5.alphacoders.com/120/1203843.png' alt='background image' className={styles.backroungImage}/>
        </div>

        <Link href="/titans" className={styles.refButton}>
            <Buttons.WatchMoreBtn text="LOOK AT TITANS!" />
        </Link>
    </div>
  )
}

export { TitansTarget }