import React, { useState } from 'react'
import styles from './Titans.module.scss'
import { Buttons } from '@/components/Shared'
import { CreateTitan } from './Forms'
import { Carousel } from './Carousel'
import { FocusedTitan } from './FocusedTitan/FocusedTitan'

const Titans = ({ dataUser, dataAdmin, loadingUser, loadingAdmin, dataTitans}) => {

    const [ panelCreate, setPanelCreate ] = useState(false)
    const [ titanInfo, setTitanInfo ] = useState(null)

    const admin = dataAdmin?.getAdmin?.admin

    const activePanel = () => {
        setPanelCreate(!panelCreate)
    }

  return (
    <>
        <div className={styles.btnAdd} onClick={() => activePanel()}>
            { admin !== "si" ? null : (
                <Buttons.Button children={panelCreate ? "cancel" : "add titan"}/>
            )}
        </div>

        <div className={styles.containerCarousel}>

            <div>
                <Carousel titanInfo={titanInfo} setTitanInfo={setTitanInfo}/>
                <CreateTitan panelCreate={panelCreate} titanInfo={titanInfo}/>
            </div>

            <div />
            <div>
                <FocusedTitan titanInfo={titanInfo} setTitanInfo={setTitanInfo} admin={admin} />
            </div>

        </div>
    </>
  )
}

export { Titans }