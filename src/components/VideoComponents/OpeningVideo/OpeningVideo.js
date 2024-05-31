import styles from './OpeningVideo.module.scss'

export const OpeningVideo = () => {

  return (
    <div className={styles.containerVideo}>
        <video className={styles.video} autoPlay muted loop>
            <source src='/Media/Video/Opening.mp4' type="video/mp4"/>
        </video>
    </div>
  )
}

