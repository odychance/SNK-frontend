import React, { useState } from 'react'
import styles from './CreateTitan.module.scss'
import classNames from 'classnames'
import { Buttons } from '@/components/Shared'
import { InitialValues, ValidationSchema } from './CreateTitan.formik'
import { useFormik } from 'formik'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { Msg } from '@/components/Shared'

const CreateTitan = ({panelCreate, titanInfo}) => {

    const router = useRouter()

    const [ newTitan ] = useMutation(ApolloMutations.NEW_TITAN)

    const [ message, setMessage ] = useState('')

    const formik = useFormik({
        initialValues: InitialValues(titanInfo),
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            const { name, host, picture, skill, history } = values

            try {
                if(name === '' || host === '' || picture === '' || skill === '' || history === '') {
                    setMessage('All fields required')
                    setTimeout(() => {
                        setMessage('')
                    }, 2000);
                    return
                }


                await newTitan({
                    variables: {
                        input: {
                            name,
                            host,
                            picture,
                            skill,
                            history
                        }
                    }
                })

                router.push('/titans')
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <div className={classNames(styles.formContainer, { [styles.formActive] : panelCreate})}>

            <Msg children={message} />

            <form
                onSubmit={formik.handleSubmit}
                type="submit"
            >
                <h2>Create Titan!</h2>

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
                    <label>Latest Host</label>
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
                    <Buttons.Button children="Add Now" />
                </div>
            </form>
        </div>
    )
}

export { CreateTitan } 