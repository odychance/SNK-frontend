import React, { useEffect, useState } from 'react'
import styles from './CreateDivision.module.scss'
import classNames from 'classnames'
import { Buttons } from '@/components/Shared/Buttons'
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { ApolloMutations } from '@/Apollo'
import { InitialValues, ValidationSchema } from './CreateDivision.formik'
import { Msg } from '@/components/Shared'
import { useRouter } from 'next/router'

const CreateDivision = ({ createModal }) => {

    const router = useRouter(null)
    
    const [ newMilitaryDivision ] = useMutation(ApolloMutations.NEW_MILITARY_DIVISION)

    const [ message, setMessage ] = useState("")


    const formik = useFormik({
        initialValues: InitialValues,
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            const { division, purpose, picture } = values

            try {
                if( division === "" || purpose === "" || picture === "") {
                    setMessage("All fields required")
                    setTimeout(() => {
                        setMessage("")
                    }, 2000);
                    return
                }

                await newMilitaryDivision({
                    variables: {
                        input: {
                            division,
                            purpose,
                            picture
                        }
                    }
                })
                
                router.push('/military-divisions')

            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
    <div className={classNames(styles.containerModal, { [ styles.modalActived ] : createModal })}>
    
        <div className={styles.containerMsg}>
            <Msg>{message}</Msg>
        </div>

        <form
            type="submit"
            onSubmit={formik.handleSubmit}
        >
            <div className={styles.section}>
                <label >Select a Division to create: </label>
                <select
                    name="division"
                    id="division"
                    value={formik.values.division}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">-- Select an option --</option>
                    <option value="GARRISON_REGIMENT">-- GARRISON REGIMENT --</option>
                    <option value="MILITARY_POLICE_BRIGADE">-- MILITARY POLICE BRIGADE --</option>
                    <option value="RECRUIT_TROOP">-- RECRUIT TROOP --</option>
                    <option value="SCOUT_REGIMENT">-- SCOUT REGIMENT --</option>
                </select>

            </div>

            <div className={styles.section}>
                <label >Type something about it: </label>
                <textarea
                    placeholder='Type a resume of this division'
                    name="purpose"
                    id="purpose"
                    value={formik.values.purpose}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            <div className={styles.section}>
                <label >Add a picture: </label>
                <input
                    placeholder='Add a URL Link of a picture'
                    name="picture"
                    id="picture"
                    value={formik.values.picture}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            <div className={styles.containerBtn} onClick={formik.handleSubmit} type="submit">
                <Buttons.Button>Add Now</Buttons.Button>
            </div>
        </form>
    </div>
  )
}

export { CreateDivision }