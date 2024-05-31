import React, { useEffect, useRef } from 'react'
import styles from './ModalTarget.module.scss'
import classNames from 'classnames'
import { Buttons } from '../../Buttons'
import anim from './ModalTarget.anim'

const ModalTarget = ({data, dataAdmin, openCloseTargetModal, stateModalTarget}) => {

  // const admin = dataAdmin.getAdmin.admin

  const modalRef = useRef(null)

  useEffect(() => {
    anim({modalRef, stateModalTarget})
  }, [stateModalTarget])


  return (
    <div className={classNames(styles.containerModalTarget, {[styles.modalActive] : stateModalTarget })} onClick={openCloseTargetModal} ref={modalRef}>
      <div className={styles.containerTarget}>
        <img src={data.picture} />
        
        <div>

          {/* { admin !== 'si' ? null : (
            <div className={styles.buttonsContainer}>
              <Buttons.ButtonDelete dataDelete={data}/>
              <Buttons.ButtonEdit />
            </div>
          ) } */}

          <label>Name:</label>
          <h2>{data.name}</h2>

          <label>Titan:</label>
          <h2>{data?.titan ? data.titan : "Not a titan host"}</h2>

          <label>Skill:</label>
          <h2>{data.skills}</h2>

          <label>History:</label>
          <h2>{data.history}</h2>

        </div>


      </div>
    </div>
  )
}

export { ModalTarget }