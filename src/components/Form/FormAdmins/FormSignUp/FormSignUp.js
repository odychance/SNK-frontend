import styles from './FormSignUp.module.scss'
import { Buttons } from '@/components/Shared'
import { Msg } from '@/components/Shared'
import { useEffect, useState, useRef } from 'react'
import { useMutation } from '@apollo/client'
import { ApolloMutations } from '@/Apollo'
import { InitialValues, ValidationSchema } from './FormikValidation.FormSignUp'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import Link from 'next/link'


const FormSignUp = () => {

  const [ msg, setMsg ] = useState('')
  const [ newAdmin ] = useMutation(ApolloMutations.NEW_ADMIN)

  const router = useRouter()
  const formRef = useRef(null)
  const infoRef = useRef(null)

  
  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      const { name, lastname, email, repeatEmail, password, repeatPassword } = values

      try {
        if(email !== repeatEmail) {
          setMsg("Email fields don't match")
          setTimeout(() => {
            setMsg('')
          }, 2000);
          return null
        }

        if(password !== repeatPassword) {
          setMsg("Password fields don't match")
          setTimeout(() => {
            setMsg('')
          }, 2000);  
          return null
        }  
  
        const data = await newAdmin({
          variables: {
            input: {
              name,
              lastname,
              email,
              password
            }
          }
        })

        setTimeout(() => {
          router.push('/join/admin/sign-in')
          
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

    const formel = formRef.current
    const infoel = infoRef.current

    gsap.from(formel, {
      x: 500,
      opacity: 0,
      duration: 1
    }),
    gsap.to(formel, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 1.5
    }),

    gsap.from(infoel, {
      opacity: 0,
      x: 100,
      duration: 2
    }),
    gsap.to(infoel, {
      x: 0,
      opacity: 1,
      duration: 2,
      delay: 1.5
    })
  }, [])

  return (
    <>
    <form className={styles.containerForm} type="submit" onSubmit={formik.handleSubmit} ref={formRef}>

      <h1>Admins register panel</h1>

      <div className={styles.elements}>
        <label>NAME</label>
        <input
          placeholder="Type your name"
          type='text'
          id='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          />

          {formik.touched.name && formik.errors.name ? <Msg>All fields required</Msg> : null} 

        <label>LASTNAME</label>
        <input
          placeholder='Type your lastname'
          type='text'
          id='lastname'
          value={formik.values.lastname}
          onChange={formik.handleChange}  
        />

          {formik.touched.lastname && formik.errors.lastname ? <Msg>All fields required</Msg> : null} 

        
        <label>EMAIL</label>
        <input
          placeholder="Type your email"
          type='email'
          id='email'
          value={formik.values.email}
          onChange={formik.handleChange}  
        />

          {formik.touched.email && formik.errors.email ? <Msg>All fields required</Msg> : null} 

        <label>REPEAT EMAIL</label>
        <input
          placeholder='Repeat your email'
          type='repeatEmail'
          id='repeatEmail'
          value={formik.values.repeatEmail}
          onChange={formik.handleChange}
        />

          {formik.touched.repeatEmail && formik.errors.repeatEmail ? <Msg>All fields required</Msg> : null} 

        <label>PASSWORD</label>
        <input
          placeholder="Type your password"
          type='password'
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}  
        />

          {formik.touched.password && formik.errors.password ? <Msg>All fields required</Msg> : null} 

        <label>REPEAT PASSWORD</label>
        <input
          placeholder='Repeat your password'
          type='password'
          id='repeatPassword'
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
        />

          {formik.touched.repeatPassword && formik.errors.repeatPassword ? <Msg>All fields required</Msg> : null} 

        <label>ADMIN PASSWORD</label>
        <input
          placeholder="Type the Admin password"
          type="password"
          id="adminPass"
          value={formik.values.adminPass}
          onChange={formik.handleChange}
          />
      </div>

      {formik.touched.adminPass && formik.errors.adminPass ? <Msg>All fields required</Msg> : null} 

      { formik.values.adminPass !== "ody23897812" ? (
        <div className={styles.adminPassBtn} ref={infoRef}>
          <Buttons.Button>CREATE ADMIN ACC</Buttons.Button>
        </div>
      ) : (
        <>
          <div className={styles.allowedBtn} onClick={formik.handleSubmit}>
            <Buttons.Button>CREATE ADMIN ACC</Buttons.Button>
          </div>

          <Msg>{msg}</Msg>
        </>
      )}
      
        <Link href='/join/admin/sign-in' className={styles.goToLoginAdm} >
          <p> Im already an admin </p>
        </Link>
    </form>
    </>
  )
}

export { FormSignUp }