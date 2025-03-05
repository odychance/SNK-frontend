import React, { useEffect, useRef } from 'react'
import styles from './MenuBar.module.scss'
import classNames from 'classnames'
import Anim from './MenuBar.anim'
import Link from 'next/link'
//CAMBIOS
const MenuBar = ({switchActive}) => {

  const navRef = useRef(null)  
  
  useEffect(() => {

    Anim({switchActive ,navRef})
      
  }, [switchActive])
  

  return (
    <nav className={classNames(styles.barContainer, {[styles.barActive]: switchActive})} ref={navRef}>
      <div className={styles.containerElements}>
        <Link href='/characters'>
          <p className={styles.text}>Characters</p>
          <div className={styles.imgWrapper}>
            <img src="https://wallpapercave.com/wp/wp8694974.jpg" alt="" className={styles.img} />
          </div>
        </Link>
      </div>

      <div className={styles.containerElements}>
      <Link href='/titans'>
        <p className={styles.text}>Titans</p>
        <div className={styles.imgWrapper}>
          <img src="https://www.latercera.com/resizer/zgMdnEk2a1IOwi-NIqMS-fkRmKE=/arc-anglerfish-arc2-prod-copesa/public/O5P35GANJVCWZCRVI5EBJJ73GE.jpg" alt="" className={styles.img} />
        </div>
      </Link>
      </div>
      <div className={styles.containerElements}>
        <Link href='/military-divisions'>
          <p className={styles.text}>Military Divisions</p>
          <div className={styles.imgWrapper}>
            <img src="https://wallpaperaccess.com/full/36626.jpg" alt="" className={styles.img} />
          </div>
        </Link>
      </div>
      <div className={styles.containerElements}>
        <Link href='/summaries'>
          <p className={styles.text}>Summary of anime</p>
          <div className={styles.imgWrapper}>
            <img src="https://cdn.alfabetajuega.com/alfabetajuega/2021/04/Historia-de-Ymir-Fritz.jpg" alt="" className={styles.img}/>
          </div>
        </Link>
      </div>
      <div className={styles.containerElements}>
        <Link href='/backof'>
          <p className={styles.text}>Back Of</p>
          <div className={styles.imgWrapper}>
            <img src="https://i.ytimg.com/vi/7nrLuuZ-ZS4/maxresdefault.jpg" alt="" className={styles.img} />
          </div>
        </Link>
      </div>
      <div className={styles.containerElements}>
        <Link href='/play'>
          <p className={styles.text}>Where to see</p>
          <div className={styles.imgWrapper}>
            <img src="https://beebom.com/wp-content/uploads/2023/01/Attack-on-Titan-Season-4-Part-3-Everything-You-Need-to-Know.jpg" alt="" className={styles.img} />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export { MenuBar }