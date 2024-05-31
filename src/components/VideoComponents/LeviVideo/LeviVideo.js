import styles from './LeviVideo.module.scss'

export const LeviVideo = () => {

  return (
    <div className={styles.containerVideo}>
        <video className={styles.video} autoPlay muted loop>
            <source src='/Media/Video/LeviCrazy.mp4' type="video/mp4"/>
        </video>
    </div>
  )
}