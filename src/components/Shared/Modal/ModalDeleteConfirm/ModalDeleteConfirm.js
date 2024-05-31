import React, { useEffect, useRef, useState } from 'react'
import styles from './ModalDeleteConfirm.module.scss'
import classNames from 'classnames'
import { Buttons } from '../../Buttons'

import { useMutation } from '@apollo/client'
import { ApolloMutations } from '@/Apollo'
import { useRouter } from 'next/router'
import anim from './ModalDeleteConfirm.anim'

const ModalDeleteConfirm = ({ modalDeleteConfirm, data, openCloseDeleteModal }) => {

    const [ changeSvg, setChangeSvg ] = useState(false)

    const [ deleteCharacter ] = useMutation(ApolloMutations.DELETE_CHARACTER)
    const router = useRouter(null)
    const containerRef = useRef(null)

    useEffect(() => {
        anim({containerRef, modalDeleteConfirm})
    }, [modalDeleteConfirm])

    const confirmDelete = async () => {

        setChangeSvg(!changeSvg)

        try {
            await deleteCharacter({
                variables: {
                    id: data.id
                }
            })
            
            setTimeout(() => {
                router.push('characters')
            }, 2000);

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className={classNames(styles.modalContainer, { [styles.modalActive] : modalDeleteConfirm})}>
        <div ref={containerRef}>

            <div className={classNames(styles.containerCenter, { [styles.succesDelete] : changeSvg })}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="#AB1111">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="#6BAB40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h2>Are you sure that you want delete this character?</h2>
                <h2>Character successfully eliminated</h2>

            </div>

            <div className={styles.containerButtons}>
                <div onClick={confirmDelete}>
                    <Buttons.Button>Yes, Delete!</Buttons.Button>
                </div>
                <div onClick={openCloseDeleteModal}>
                    <Buttons.Button>No, Cancel.</Buttons.Button>
                </div>
            </div>

        </div>
    </div>
  )
}

export { ModalDeleteConfirm }