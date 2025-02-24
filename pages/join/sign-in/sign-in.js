import styles from './sign-in.module.scss'
import { Forms } from '@/components/Form'
import {Videos} from '@/components/VideoComponents'

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerVideo}>
        <Videos.LeviVideo />
      </div>

      <Forms.FormUsers.FormSignIn />
    </div>
  )
}

export default SignIn