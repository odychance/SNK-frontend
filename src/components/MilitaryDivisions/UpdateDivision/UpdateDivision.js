import classNames from 'classnames'
import React, { useEffect } from 'react'
import styles from './UpdateDivision.module.scss'
import { useFormik } from 'formik'
import { Buttons } from '@/components/Shared'
import { InitialValues, ValidationSchema } from './UpdateDivision.formik'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const UpdateDivision = ({ modalUpdateDivision, focusedTarget, showModalUpdate }) => {

    const [ updateMilitaryDivision ] = useMutation(ApolloMutations.UPDATE_MILITARY_DIVISION)

    const router = useRouter()

    const formik = useFormik({
        initialValues: InitialValues(focusedTarget),
        validationSchema: ValidationSchema,
        onSubmit: async values => {

            const { division, purpose, picture } = values

            try {
                
                await updateMilitaryDivision({
                    variables: {
                        id: focusedTarget.id,
                        input: {
                            division,
                            purpose,
                            picture
                        }
                    }
                })

                setTimeout(() => {
                    router.push('/military-divisions')
                }, 1000);

            } catch (error) {
                console.log(error)
            }
        }
    })

    useEffect(() => {
        formik.setValues({
            division: focusedTarget?.division,
            purpose: focusedTarget?.purpose,
            picture: focusedTarget?.picture
        })
    }, [focusedTarget])

  return (
    <div className={classNames(styles.containerModalUpdate, { [ styles.modalActived ] : modalUpdateDivision })}>
        
        <form
            type="submit"
            onSubmit={formik.handleSubmit}
        >
            <div className={styles.section}>
                <label >Is the right Division? </label>
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
                <label >Is something wrong about it? </label>
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
                <label >Wanna modify the picture? </label>
                <input
                    placeholder='Add a URL Link of a picture'
                    name="picture"
                    id="picture"
                    value={formik.values.picture}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            <div className={styles.containerSubmitBtn} onClick={formik.handleSubmit}>
                <Buttons.Button>Update now</Buttons.Button>
            </div>  
        </form>

        <div className={styles.containerBtnClose} onClick={showModalUpdate}>
            <Buttons.ButtonClose />
        </div>
    </div>
  )
}

export { UpdateDivision }