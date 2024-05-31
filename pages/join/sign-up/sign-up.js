import styles from './sign-up.module.scss'
import { Forms } from '@/components/Form'
import { Videos } from '@/components/VideoComponents'

const signUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerVideo}>
        <Videos.OpeningVideo />
      </div>

      <Forms.FormUsers.FormSignUp />

    </div>
  )
}

export default signUp