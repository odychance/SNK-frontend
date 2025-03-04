import React, { useRef, useEffect, useState } from 'react'
import styles from './MilitaryDivisions.module.scss'
import { useQuery } from '@apollo/client'
import { ApolloQuerys } from '@/Apollo'

import { Buttons } from '../Shared'
import { CreateDivision } from './CreateDivision'
import { ModalFocused } from './ModalFocused'

import anim from './MilitaryDivision.anim'


const MilitaryDivisions = ({ admin }) => {

    const [ createModal, setCreateModal ] = useState(false)
    const [ focusedTarget, setFocusedTarget ] = useState(null)
    const [ openCloseModal, setOpenCloseModal ] = useState(false)

    const buttonRef = useRef(null)
    const containerTargetRef = useRef(null)

    
    const { data: dataMD, loading: loadingMD } = useQuery(ApolloQuerys.GET_MILITARY_DIVISIONS)

    const openCreateModal = () => {
        setCreateModal(!createModal)
    }

    const showModal = () => {
        setOpenCloseModal(!openCloseModal)
    }

    const showAndSetTarget = (el) => {
        showModal()
        setFocusedTarget(el)
    }

    const divisionsArr = dataMD?.getMilitaryDivisions

    useEffect(() => {
        anim({ buttonRef, containerTargetRef })
    }, [containerTargetRef?.current?.children !== undefined])

  return (
    <div>

        <div className={styles.container} ref={containerTargetRef}>
            {divisionsArr?.map( target => (
                <div key={target.id} className={styles.component} onClick={() => showAndSetTarget(target)}>
                    <div className={styles.tapIndicator}>
                        <h2>Tap Here</h2>
                        <img src="/Media/Svg/cursorSvg.svg" />
                    </div>
                    <img src={target.picture} />
                </div>
            ))}
        </div>

        <ModalFocused showModal={showModal} openCloseModal={openCloseModal} focusedTarget={focusedTarget} setFocusedTarget={setFocusedTarget} admin={admin}/>
            
        { admin !== "si" ? null : (
            <>
                <div className={styles.buttonAdd} onClick={openCreateModal} ref={buttonRef}>
                    <Buttons.Button>{!createModal ? "ADD DIVISiON" : "CANCEL"}</Buttons.Button>
                </div>

                <CreateDivision openCreateModal={openCreateModal} createModal={createModal} dataMD={dataMD}/>
            </>
        )}
    </div>
  )
}

export { MilitaryDivisions }