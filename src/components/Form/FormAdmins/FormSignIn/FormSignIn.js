import styles from './FormSignIn.module.scss'
// import { Buttons } from '@/components/Shared/Buttonss/Buttons/Buttons'
import { Msg, Buttons } from '@/components/Shared'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { InitialValues, ValidationSchema } from './FormikValidation.FormSignIn'
import { gsap } from 'gsap'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import Link from 'next/link'

const FormSignIn = () => {

  const [ msg, setMsg ] = useState('')
  const [ authenticateAdmin ] = useMutation(ApolloMutations.AUTHENTICATE_ADMIN)

  const router = useRouter()
  const formRef = useRef(null)

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: ValidationSchema,
    onSubmit: async values => {

      const { email, password } = values
      
      try {
        
        const data = await authenticateAdmin({
          variables: {
            input: {
              email,
              password
            }
          }
        })

        const { token } = data.data.authenticateAdmin
        // console.log(token)
        localStorage.setItem('token', token)
        
        setTimeout(() => {
          router.push('/')
        }, 2000);

      } catch (error) {
        setMsg(error.message)
        setTimeout(() => {
          setMsg('')
        }, 2000);
      }

    }
  })

  useEffect(() => {
    const el = formRef.current
    gsap.from( el, {
      y: 0,
      opacity: 0,
      scale: 0.3,
    })

    gsap.to(el, {
      y: -700,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 1
    })
  }, [])

  return (
    <>
      <form className={styles.formContainer} type='submit' onSubmit={formik.handleSubmit} ref={formRef}>
        <h1 className={styles.signIn}>LOGIN AS ADMIN!</h1>

        <div className={styles.elements}>
          <label>EMAIL</label>
          <input
            placeholder="Type your email here"
            type='email'
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />

        { formik.touched.email && formik.errors.email ? <Msg children="All fields required" setMsg={true}/> : null}

        </div>


        <div className={styles.elements}>
          <label>PASSWORD</label>
          <input
            placeholder="Type your password here"
            type='password'
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />

        { formik.touched.password && formik.errors.password ? <Msg children="All fields required" /> : null}

        </div>

      { msg || formik.values.email === '' || formik.values.password === '' ? (
          <>
            <div className={styles.notAllowed}>
              <Buttons.Button children="LOGIN"/>
            </div>

            <Msg children={msg}/>
          </>
        ) : (
            <div onClick={formik.handleSubmit}>
              <Buttons.Button>LOGIN</Buttons.Button>
            </div>
        )
      }

        <Link href="/join/admin/sign-up" className={styles.goToRegisterAdm}>
          <p>Go to register an admin</p>
        </Link>
      </form>
    </>
  )
}

export { FormSignIn }