import React, { useEffect, useRef } from 'react'
import styles from './ModalUpdate.module.scss'
import classNames from 'classnames'
import { Buttons } from '../../Buttons'
import { useFormik } from 'formik'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import anim from './ModalUpdate.anim'
import { InitialValues, ValidationSchema } from './ModalUpdate.Formik'

const ModalUpdate = ({ dataTarget, setDataTarget, modalUpdate, setModalUpdate }) => {

  const [ updateCharacter ] = useMutation(ApolloMutations.UPDATE_CHARACTER)

  const router = useRouter()
  const containerRef = useRef(null)
  const formRef = useRef(null)
  
  const formik = useFormik({
    initialValues: InitialValues(dataTarget),
    // initialValues: {
      //   name: dataTarget?.name,
      //   titan: dataTarget?.titan,
      //   skills: dataTarget?.skills,
      //   history: dataTarget?.history,
      //   picture: dataTarget?.picture
      // },
      
      validationSchema: ValidationSchema(),
      
      onSubmit: async values => {
        
        const { name, skills, titan, history, picture } = values
        
        try {
          await updateCharacter({
            variables: {
              id: dataTarget.id,
              input: {
                name,
                skills,
                titan,
                history,
                picture
              }
            }
          })
          
          setTimeout(() => {
            router.push('/characters')
          }, 2000);
        
        } catch (error) {
          console.log(error)
        }
      }
    })
    
    const openCloseUpdateModal = () => {
      setModalUpdate(!modalUpdate)
    }
    
    useEffect(() => {
      anim({containerRef, formRef, modalUpdate})
    }, [modalUpdate])
    
    useEffect(() => {
      formik.setValues({
        name: dataTarget?.name,
        titan: dataTarget?.titan,
        skills: dataTarget?.skills,
        history: dataTarget?.history,
        picture: dataTarget?.picture
      })
    }, [dataTarget]) 
    
    return (
      <div className={classNames(styles.modalContainer, { [ styles.modalActive ] : modalUpdate })} ref={containerRef}>

      <Buttons.ButtonClose openCloseModal={openCloseUpdateModal}/>

      <form ref={formRef}>

        <img src="https://i.pinimg.com/originals/1a/0d/42/1a0d42e6862ea5fe5a5a5587050e18aa.png" />

        <div>
          <label>Let's edit name?</label>
          <input
            placeholder='Ej. Eren Yaegar'
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>Have another titan's name?</label>
          <input
            placeholder='Ej. Attack titan'
            type="text"
            id="titan"
            name="titan"
            value={formik.values.titan}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>is another special skill?</label>
          <input
            placeholder='Have some new skill(?)'
            type="text"
            id="skills"
            name="skills"
            value={formik.values.skills}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>have a better summary story?</label>
          <input
            placeholder='Type some information about that character'
            type="text"
            id="history"
            name="history"
            value={formik.values.history}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label>have a better picture?</label>
          <input
            placeholder='Ej. https://i.pinimg.com/origins/e7050e18aa.png'
            type="text"
            id="picture"
            name="picture"
            value={formik.values.picture}
            onChange={formik.handleChange}
          />
        </div>

        <div onClick={formik.handleSubmit} className={styles.btnUpdate}>
          <Buttons.Button children="Update character"/>
        </div>

      </form>

    </div>
  )
}

export { ModalUpdate }