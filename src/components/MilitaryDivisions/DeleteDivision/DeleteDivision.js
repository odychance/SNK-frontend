import React, { useState, useRef, useEffect } from 'react'
import styles from './DeleteDivision.module.scss'
import { ApolloMutations } from '@/Apollo'
import { useMutation } from '@apollo/client'
import classNames from 'classnames'
import { Buttons } from '@/components/Shared'
import { useRouter } from 'next/router'
import anim from './DeleteDivision.anim'

const DeleteDivision = ({ focusedTarget, showAndSetTarget, modalDeleteDivision }) => {

    const [ deleteMilitaryDivision ] = useMutation(ApolloMutations.DELETE_MILITARY_DIVISION)

    const [ changeSvg, setChangeSvg ] = useState(false)

    const modalRef = useRef(null)
    const router = useRouter()

    const confirmDelete = async () => {
        
        try {
            
            await deleteMilitaryDivision({
                variables: {
                    id: focusedTarget.id
                }
            })
            
            setChangeSvg(!changeSvg)
            setTimeout(() => {
                router.push('/military-divisions')
            }, 2000);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        anim({modalRef, modalDeleteDivision})
    }, [modalDeleteDivision])

    return (
        <div className={classNames(styles.containerDelete, { [ styles.modalActived ] : modalDeleteDivision})} ref={modalRef}>
            <div className={classNames(styles.containerSvg, { [ styles.switchSvg ] : changeSvg})}>
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
                    <div onClick={showAndSetTarget}>
                        <Buttons.Button>No, Cancel.</Buttons.Button>
                    </div>
            </div>
    </div>
  )
}

export { DeleteDivision }