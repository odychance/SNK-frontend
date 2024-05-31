import styles from './Alert.module.scss'

const Alert = ({children}) => {
  return (
    <>
      { children ? (
        <div className={styles.alert}>{children}</div>
      ) : (
        null
      )}
    </>
  )
}

export default Alert