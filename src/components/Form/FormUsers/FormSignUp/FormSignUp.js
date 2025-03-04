import styles from './FormSignUp.module.scss'
import { Buttons } from '@/components/Shared'
import { Msg } from '@/components/Shared'
import { useState, useEffect, useRef } from 'react'
import { useMutation } from '@apollo/client'
import { ApolloMutations } from '@/Apollo'
import { InitialValues, ValidationSchema } from './FormikValidation.FormSignUp'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import {gsap} from 'gsap'
import Link from 'next/link'

const FormSignUp = () => {

    const [ msg, setMsg ] = useState('')
    const [ newUser ] = useMutation(ApolloMutations.NEW_USER)
    
    const formRef = useRef(null)
    const aRef = useRef(null)
    const router = useRouter()
    
    const formik = useFormik({
        initialValues: InitialValues,
        validationSchema: ValidationSchema,
        onSubmit: async values => {
            const { name, lastname, email, repeatEmail, password, repeatPassword } = values
            try {
                if(email !== repeatEmail) {
                    setMsg("Emails fields don't match")
                    setTimeout(() => {
                        setMsg('')
                    }, 2000);
                    return null
                };

                if(password !== repeatPassword) {
                    setMsg("Password fields don't match")
                    setTimeout(() => {
                        setMsg('')
                    }, 2000);
                    return null
                };
                
                await newUser({
                    variables: {
                        input: {
                            name,
                            lastname,
                            email,
                            password
                        }
                    }
                })
                router.push('/join/sign-in')
            } catch (error) {
                setMsg(error.message)
                setTimeout(() => {
                    setMsg('')
                }, 3000);
            }
        }
    })
     
    useEffect(() => {
        const el = formRef.current
        const ael = aRef.current

        gsap.set(el, {
            x: 200,
            opacity: 0,
        })
        gsap.set(ael, {
            x: 200,
            opacity: 0
        })
        gsap.to(el ,{
            x: 0,
            opacity: 1,
            duration: 1,
        })
        gsap.to(ael, {
            x: 0,
            opacity: 1,
            duration: 1,
        })
    }, [])

  return (
        <>
            <form className={styles.containerForm} type="submit" onSubmit={formik.handleSubmit} ref={formRef}>
                <h1 className={styles.signup}>SIGN UP HERE!</h1>
                <div className={styles.element}>
                    <label>NAME</label>
                    <input
                        placeholder='First name'
                        type='text'
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? <Msg setMsg={true} >All fields required</Msg> : null}
                </div>
                <div className={styles.element}>
                    <label>LAST NAME</label>
                    <input
                        placeholder='Last name'
                        type='text'
                        id='lastname'
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? <Msg>All fields required</Msg> : null}
                </div>
                <div className={styles.element}>
                    <label>EMAIL</label>
                    <input
                        placeholder='Type your email'
                        type='email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <Msg>All fields required</Msg> : null}
                </div>
                <div className={styles.element}>
                    <label>REPEAT EMAIL</label>
                    <input
                        placeholder='Repeat your email'
                        type='email'
                        id='repeatEmail'
                        value={formik.values.repeatEmail}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.repeatEmail && formik.errors.repeatEmail ? <Msg>All fields required</Msg> : null}
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
                    {formik.touched.password && formik.errors.password ? <Msg>All fields required</Msg> : null}
                </div>
                <div className={styles.element}>
                    <label>REPEAT PASSWORD</label>
                    <input
                        placeholder='Repeat your password'
                        type='password'
                        id='repeatPassword'
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.repeatPassword && formik.errors.repeatPassword ? <Msg>All fields required</Msg> : null}
                </div>
                {
                    msg || formik.touched.name === '' ? (
                        <>
                            <div className={styles.notAllowed}>
                                <Buttons.Button>Sign up</Buttons.Button>
                            </div>
                            <Msg>{msg}</Msg>
                        </>
                    ) : (
                        <div onClick={formik.handleSubmit}>
                                <Buttons.Button>Sign up</Buttons.Button>
                        </div>
                    )
                }
            </form>
            <Link href='/join/sign-in' className={styles.goToLogin} ref={aRef}>
                <p>I already have an account</p>
            </Link>
        </> 
    )
}

export { FormSignUp }