import React, { useRef } from 'react'
import styles from './WhereToSee.module.scss'
import anim from './WhereToSee.anim'
import Link from 'next/link'

const WhereToSee = ({ data1, data2 }) => {

  const titleRef = useRef(null)
  const imgRef = useRef(null)

  anim({titleRef, imgRef})


  return (
    <div className={styles.mainContainer}>
      <h1 ref={titleRef}>Go to see the playlist of this incredible anime!</h1>

          <div className={styles.target} ref={imgRef}>

            { data2.getAdmin?.name || data1.getUser?.name ? <img src="https://m.media-amazon.com/images/I/A1wNzvBQHUL.jpg" /> :  <img src="https://wallpaperaccess.com/full/4851878.png" />}
 
            
            { data2.getAdmin?.name || data1.getUser?.name ? <Link href="/wheretosee"><h2>Click here to see all chapters!</h2></Link> : <Link href="/join/sign-in"><h2>Please Login to see the chapters Lists</h2></Link> }
          </div>


        
    </div>
  )
}

export { WhereToSee }
