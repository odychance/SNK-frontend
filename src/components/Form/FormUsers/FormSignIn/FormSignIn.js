import styles from './FormSignIn.module.scss'
import { Buttons } from '@/components/Shared'
import Alert from '@/components/Alert/Alert'
import { Msg } from '@/components/Shared'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { InitialValues, ValidationSchema } from './FormikValidation.FormSignIn'
import { gsap } from 'gsap'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import Link from 'next/link'

const FormSignIn = () => {

    const [ authenticateUser ] = useMutation(ApolloMutations.AUTHENTICATE_USER)
    const [ msg, setMsg ] = useState('')
    
    const formRef = useRef(null)
    const aRef = useRef(null)
    const router = useRouter()
    
    const formik = useFormik({
        initialValues: InitialValues,
        validationSchema: ValidationSchema,
        onSubmit: async values => {
            const { email, password } = values
            try {                
                const data = await authenticateUser({
                    variables: {
                        input: {
                            email,
                            password
                        }
                    }
                })
                const { token } = data.data.authenticateUser
                localStorage.setItem("token", token)

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
        const ael = aRef.current

        gsap.from(el, {
            x: 200,
            opacity: 0,
        }),
        gsap.to(el ,{
            x: 0,
            duration: 1,
            opacity: 1,
        }),

        gsap.from(ael, {
            x: 200,
            opacity: 0,
        }),
        gsap.to(ael, {
            x: 0,
            duration: 1,
            opacity: 1,
        })
    }, [])

  return (
    <>
        <form className={styles.containerForm} type="submit" onSubmit={formik.handleSubmit} ref={formRef}>
            <h1 className={styles.signin}>SIGN IN HERE!</h1>

            <div className={styles.element}>
                <label>EMAIL</label>
                <input
                    placeholder='Type your email'
                    type='email'
                    id='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />

                {formik.touched.email && formik.errors.email ? <Msg>All fields is required</Msg> : null}

            </div>

            <div className={styles.element}>
                <label>PASSWORD</label>
                <input
                    placeholder='Type your password'
                    type='password'
                    id='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />

                {formik.touched.password && formik.errors.password ? <Msg>All fields is required</Msg> : null}

            </div>


            {
                msg || formik.touched.email === '' ? (
                    <>
                        <div className={styles.notAllowed}>
                            <Buttons.Button>Sign up</Buttons.Button>
                        </div>

                        <Msg>{msg}</Msg>
                    </>
                ) : (
                    <div onClick={formik.handleSubmit}>
                            <Buttons.Button>Login</Buttons.Button>
                    </div>
                )
            }

        </form>
        <Link href='/join/sign-up' className={styles.goToRegister} ref={aRef}>
            <p>I have not an account</p>
        </Link>

        <Link href="/join/admin/sign-in" className={styles.joinAdminBtn}>
            <p>Login as Admin</p>
        </Link>
</>
)
}

export { FormSignIn }