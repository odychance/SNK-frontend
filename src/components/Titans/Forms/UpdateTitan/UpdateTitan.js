import React, { useState, useEffect } from 'react'
import styles from './UpdateTitan.module.scss'
import classNames from 'classnames'
import { Buttons } from '@/components/Shared'
import { InitialValues, ValidationSchema } from './UpdateTitan.formik'
import { useFormik } from 'formik'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const UpdateTitan = ({ updateTitanModal, openCloseModalUpdate, titanInfo }) => {

    const [ updateTitan ] = useMutation(ApolloMutations.UPDATE_TITAN)


    const router = useRouter()

    const formik = useFormik({
        initialValues: InitialValues(titanInfo),
        validationSchema: ValidationSchema,
        onSubmit: async values => {

            const { name, host, history, picture, skill} = values

            try {
                await updateTitan({
                    variables: {
                        id: titanInfo.id,
                        input: {
                            name, 
                            host,
                            history,
                            picture,
                            skill
                        }
                    }
                })

                setTimeout(() => {
                    router.push('/titans')
                }, 1000);

            } catch ( error ) {
                console.log(error)
            }
        }
        
    })

    useEffect(() => {
        formik.setValues({
            name: titanInfo?.name,
            host: titanInfo?.host,
            history: titanInfo?.history,
            picture: titanInfo?.picture,
            skill: titanInfo?.skill,
        })
    }, [titanInfo])

  return (
    <div className={classNames(styles.containerModalUpdate, { [ styles.modalUpdateActived ] : updateTitanModal })}>
        
        <form>
            <h2>Update Titan!</h2>

            <div>
                <label>Name</label>
                <input 
                    placeholder="Titan's name"
                    name="name"
                    id="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                
                />
            </div>
            <div>
                <label>Host</label>
                <input 
                    placeholder='Titan host'
                    name="host"
                    id="host"
                    type="text"
                    value={formik.values.host}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>Skill</label>
                <input 
                    placeholder='Titan skill'
                    name="skill"
                    id="skill"
                    type="text"
                    value={formik.values.skill}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>History</label>
                <input 
                    placeholder="Titan's history"
                    name="history"
                    id="history"
                    type="text"
                    value={formik.values.history}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>Picture</label>
                <input 
                    placeholder='Add a link of titan'
                    name="picture"
                    id="picture"
                    type="text"
                    value={formik.values.picture}
                    onChange={formik.handleChange}
                />
            </div>
            <div onClick={formik.handleSubmit}>
                <Buttons.Button children="Update Now" />
            </div>
        </form>

        <div>
            <Buttons.ButtonClose openCloseModal={openCloseModalUpdate} />
        </div>
    </div>
  )
}

export { UpdateTitan }