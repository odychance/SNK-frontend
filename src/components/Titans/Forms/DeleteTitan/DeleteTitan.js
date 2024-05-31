import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './DeleteTitan.module.scss'
import { Buttons } from '@/components/Shared'

import { useMutation } from '@apollo/client'
import { ApolloMutations } from '@/Apollo'
import { useRouter } from 'next/router'

const DeleteTitan = ({ titanInfo, openCloseModalModal, deleteTitanModal}) => {

    const [ changeSvg, setChangeSvg ] = useState(false)

    const [ deleteTitan ] = useMutation(ApolloMutations.DELETE_TITAN)
    const router = useRouter(null)

    const confirmDelete = async () => {
        setChangeSvg(!changeSvg)

        try {
            await deleteTitan({
                variables: {
                    id: titanInfo.id
                }
            })

            setTimeout(() => {
                router.push('/titans')
            }, 2000);

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={classNames(styles.containerModal, { [ styles.modalActived ] : deleteTitanModal})}>

        <div className={styles.containerFormConfirm}>

            <div className={classNames(styles.containerImages, { [ styles.switchSvg ] : changeSvg})}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="#AB1111">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="#6BAB40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <span>Wait! you are about to delete information that cannot be recovered, <br/>are you sure to continue?</span>

            <div className={styles.containerButtons}>
                    <div onClick={confirmDelete}>
                        <Buttons.Button>Yes, Delete!</Buttons.Button>
                    </div>
                    <div onClick={openCloseModalModal}>
                        <Buttons.Button>No, Cancel.</Buttons.Button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export { DeleteTitan }