import React, { useState } from 'react'
import styles from './FocusedTitan.module.scss'
import { Buttons } from '@/components/Shared'
import { UpdateTitan, DeleteTitan } from '../Forms/index'

const FocusedTitan = ({ titanInfo, setTitanInfo, admin }) => {

    const [ updateTitanModal, setUpdateTitanModal ] = useState(false)
    const [ deleteTitanModal, setDeleteTitanModal ] = useState(false)

    const closeTitanInfo = () => {
        setTitanInfo(null)
    }

    const openCloseModalUpdate = () => {
        setUpdateTitanModal(!updateTitanModal)
    }

    const openCloseModalModal = () => {
        setDeleteTitanModal(!deleteTitanModal)
    }

    return (
    <div className={styles.containerInfo}>
        { titanInfo === null ? (
            <div className={styles.emptyTarget}>
                <h1>The Nine Titans!</h1>

                <img src='/Media/Images/snk-military-divisions/backgroundImg.png' />
            </div>
        ) : (
            <div className={styles.containerTitanInfo}>
                
                <Buttons.ButtonClose openCloseModal={closeTitanInfo} />

                <h1>{titanInfo?.name}</h1>

                <img src={titanInfo?.picture} className={styles.imgTitan} />

                <div>
                    <h1>Who is its latest host?
                        <p>{titanInfo?.host}</p>
                    </h1>

                    <h1>What's that's special skill?
                        <p>{titanInfo?.skill}</p>
                    </h1>

                    <h1>What we know about its story?
                        <p>{titanInfo?.history}</p>
                    </h1>
                </div>


                { admin !== "si" ? null : (
                    <>
                        <div className={styles.ButtonsOptions}>
                            <Buttons.ButtonDelete setModalDeleteConfirm={openCloseModalModal}/>
                            <Buttons.ButtonEdit setModalUpdate={openCloseModalUpdate}/>
                        </div>
        
                        <UpdateTitan updateTitanModal={updateTitanModal} openCloseModalUpdate={openCloseModalUpdate} titanInfo={titanInfo}/>
                        <DeleteTitan titanInfo={titanInfo} admin={admin} openCloseModalModal={openCloseModalModal} deleteTitanModal={deleteTitanModal}/>
                    </>
                )}


            </div>
        )}
    </div>
  )
}

export { FocusedTitan }