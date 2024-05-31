import classNames from 'classnames'
import styles from './MenuButton.module.scss'

const MenuButton = ({handleClick, switchActive}) => {

  return (
    <>
      <div className={classNames(styles.buttonContainer, { [ styles.buttonContainerActive] : switchActive })} onClick={handleClick}>
        <div className={classNames(styles.topLine, { [ styles.topLineActive] : switchActive })}/>
        <div className={classNames(styles.middleLine, { [ styles.middleLineActive] : switchActive })}/>
        <div className={classNames(styles.bottomLine, { [ styles.bottomLineActive] : switchActive })}/>
      </div>

        {/* { switchActive ? (
            <div className={styles.buttonContainerActive} onClick={handleClick}>
                <div className={styles.topLineActive} />
                <div className={styles.middleLineActive} />
                <div className={styles.bottomLineActive} />
            </div>
            ) : (
            <div className={styles.buttonContainer} onClick={handleClick}>
                <div className={styles.topLine} />
                <div className={styles.middleLine} />
                <div className={styles.bottomLine} />
            </div>
        )} */}
    </>
  )
}

export { MenuButton } 