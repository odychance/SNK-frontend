import React, { useState, useRef, useEffect } from 'react'
import styles from './ModalFocused.module.scss'
import classNames from 'classnames'
import { Buttons } from '@/components/Shared'
import { DeleteDivision } from '../DeleteDivision'
import { UpdateDivision } from '../UpdateDivision'
import anim from './ModalFocused.anim'

const ModalFocused = ({ showModal, openCloseModal, focusedTarget, setFocusedTarget, admin }) => {

    const containerRef = useRef(null)
    const staticItemsRef = useRef(null)
    const dynamicItemsRef = useRef(null)


    const showAndSetTarget = () => {
        showModal()
        setFocusedTarget(null)
        setModalDeleteDivision(false)
        setModalUpdateDivision(false)
    }

    const [ modalDeleteDivision, setModalDeleteDivision ] = useState(false)
    const [ modalUpdateDivision, setModalUpdateDivision ] = useState(false)

    const showModalDelete = () => {
        setModalDeleteDivision(!modalDeleteDivision)
    }

    const showModalUpdate = () => {
        setModalUpdateDivision(!modalUpdateDivision)
    }

    useEffect(() => {

        anim({ staticItemsRef, dynamicItemsRef, openCloseModal })

    }, [openCloseModal])

  return (
    <div className={classNames(styles.containerModal, { [ styles.ModalActived ] : openCloseModal })} ref={containerRef}>
        
        <div className={styles.btnClose}>
            <Buttons.ButtonClose openCloseModal={showAndSetTarget} />
        </div>

        <div className={styles.containerInfo} ref={staticItemsRef}>

                <div>
                    <img src={focusedTarget?.division === "GARRISON_REGIMENT" ? "/Media/Images/Comandante-Pixis.jpeg" : null} />
                    <img src={focusedTarget?.division === "MILITARY_POLICE_BRIGADE" ? "/Media/Images/Comandante-Naill.jpeg" : null} />
                    <img src={focusedTarget?.division === "SCOUT_REGIMENT" ? "/Media/Images/Comandante-Erwin.jpeg" : null} />
                    <img src={focusedTarget?.division === "RECRUIT_TROOP" ? "/Media/Images/Comandante-Keith.png" : null} />

                    <h2>{focusedTarget?.division === "GARRISON_REGIMENT" ? "If we lose, we die. If we win, we live!" : null}</h2>
                    <h2>{focusedTarget?.division === "MILITARY_POLICE_BRIGADE" ? "Dismantle your gear, Erwin!" : null}</h2>
                    <h2>{focusedTarget?.division === "SCOUT_REGIMENT" ? "Our battle is a gamble without guarantee." : null}</h2>
                    <h2>{focusedTarget?.division === "RECRUIT_TROOP" ? "Survival is not for the weak." : null}</h2>
                </div>


                <div className={styles.containerTargetInfo} ref={dynamicItemsRef}> 
                    <img src={focusedTarget?.picture} />
                    <h3>{focusedTarget?.division.replace(/_/g, " ")}</h3>
                    <h3>{focusedTarget?.purpose}</h3>
                </div>

        </div>
    
        { admin !== "si" ? null : (
            <>
                <div className={styles.containerButtons}>
                    <Buttons.ButtonEdit modalUpdate={modalUpdateDivision} setModalUpdate={setModalUpdateDivision} />
                    <Buttons.ButtonDelete modalDeleteConfirm={modalDeleteDivision} setModalDeleteConfirm={setModalDeleteDivision}/>
                </div>
            
                    <DeleteDivision focusedTarget={focusedTarget} showAndSetTarget={showModalDelete} modalDeleteDivision={modalDeleteDivision}/>
                    <UpdateDivision modalUpdateDivision={modalUpdateDivision} focusedTarget={focusedTarget} showModalUpdate={showModalUpdate}/>
            </>
        )}
    </div>
  )
}

export { ModalFocused }