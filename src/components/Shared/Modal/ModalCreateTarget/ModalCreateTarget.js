import React, { useEffect, useRef, useState } from 'react'
import styles from './ModalCreateTarget.module.scss'
import { Buttons } from '/src/components/Shared'
import { InitialValues, ValidationSchema } from './ModalCreateTarget.FormikValidation'
import { useFormik } from 'formik'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { Msg } from '../../Msg'
import classNames from 'classnames'
import anim from './ModalCreateTarget.anim'


const ModalCreateTarget = ({stateModal, openCloseModal}) => {

  const [ message, setMessage ] = useState('')

  const formRef = useRef(null)
  const containerFormRef = useRef(null)

  const [ newCharacter ] = useMutation(ApolloMutations.NEW_CHARACTER)
  const router = useRouter()

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      const { name, titan, skills, history, picture } = values

      try {        
        
        const data = await newCharacter({
          variables: {
            input: {
              name,
              titan,
              skills,
              history,
              picture,
            }
          }
        })

        setTimeout(() => {
          router.push("/characters")
        }, 1500);

      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    anim({ stateModal, formRef, containerFormRef })
  }, [stateModal])

  return (
    <div className={classNames(styles.modalContainer, { [styles.modalActive] : stateModal })} ref={containerFormRef}>

      <Buttons.ButtonClose openCloseModal={openCloseModal}/>

      <form className={styles.formContainer} type='submit' onSubmit={formik.handleSubmit} ref={formRef}>

        <img src="https://i.pinimg.com/originals/1a/0d/42/1a0d42e6862ea5fe5a5a5587050e18aa.png" />

        <div>
          <label>What character will we create? *</label>
          <input
            placeholder='Ej. Armin Arlet'
            type='text'
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>Have some special skill? *</label>
          <input
            placeholder='Ej. Intelligence'
            type='text'
            id="skills"
            value={formik.values.skills}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>Is a titan host?</label>
          <input
            placeholder='Ej. Colossal Titan'
            type='text'
            id="titan"
            value={formik.values.titan}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>What&apos;s his(er) story? *</label>
          <input
            placeholder='Type some information about that character'
            type='text'
            id="history"
            value={formik.values.history}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>Add a link of a picture of that character *</label>
          <input
            placeholder='Ej. https://i.pinimg.com/origins/e7050e18aa.png'
            type='text'
            id="picture"
            value={formik.values.picture}
            onChange={formik.handleChange}
          />
        </div>

        <div onClick={formik.handleSubmit} className={styles.btnCreate}>
          <Buttons.Button>Create character</Buttons.Button>
        </div>

        {formik.touched.name && formik.errors.name || formik.touched.skills && formik.errors.skills || formik.touched.history && formik.errors.history || formik.touched.picture && formik.errors.picture ? <Msg>Some field are required</Msg> : null}

      </form>
      

      <Msg>{message}</Msg>
    </div>
  )
}

export { ModalCreateTarget }