import React from 'react'
import styles from './LoaderTarget.module.scss'

const LoaderTarget = () => {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loading}>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className={styles.loading}>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className={styles.loading}>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

    )
}

export { LoaderTarget }