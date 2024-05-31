import styles from './Button.module.scss'

const Button = ({children}) => {
  return (
    <button className={styles.button} type='button'>{children}</button>
  )
}

export { Button }