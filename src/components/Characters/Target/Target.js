import React, { useState, useRef, useEffect } from 'react'
import styles from './Target.module.scss'
import anim from './Target.anim'
import { Separator, LoaderTarget, Modal, Buttons } from '@/components/Shared'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Target = ({data, dataUser, loading, dataAdmin, loadingAdmin}) => {

  const [ stateModal, setStateModal ] = useState(false)
  const [ stateModalTarget, setStateModalTarget ] = useState(false)
  const [ modalInfo, setModalInfo ] = useState(true)
  const [ modalDeleteConfirm, setModalDeleteConfirm] = useState(false)
  const [ modalUpdate, setModalUpdate ] = useState(false)
  const [ dataTarget, setDataTarget ] = useState({})

  const admin = dataAdmin?.getAdmin?.admin
  
  const targetRef = useRef(null)
  useEffect(() => {
      anim({targetRef})
  }, [!loading && targetRef.children])


  const openCloseDeleteModal = () => {
    setModalDeleteConfirm(!modalDeleteConfirm)
  }


  const openCloseModal = () => {
    setStateModal(!stateModal)
  }

  const openCloseTargetModal = () => {
      setStateModalTarget(!stateModalTarget)
  }

  return (
    <>
      <div className={styles.mainContainer}>

        { !loading ? (
          <div className={styles.targetContainer} ref={targetRef}>
            {data?.getCharacters?.map( data => (
                <div
                  key={data.id}
                  className={styles.finalTarget}
                  onClick={() => { setModalInfo(data)}}
                  onMouseEnter={ () => setDataTarget(data)}
                >
  
                  { admin !== "si" ? null : (
                    <div className={styles.containerBtns}>
                      <Buttons.ButtonDelete modalDeleteConfirm={modalDeleteConfirm} setModalDeleteConfirm={setModalDeleteConfirm}/>
                      <Buttons.ButtonEdit modalUpdate={modalUpdate} setModalUpdate={setModalUpdate}/>
                    </div>
                  )}
  
                  <div onClick={openCloseTargetModal}>
  
                    <img src={data.picture} alt={data.name} className={styles.imgCharacter} />
                    
                    <div>
  
                      <label>Name:</label>
                      <h2>{data.name}</h2>
      
                      <label>Skill:</label>
                      <h2>{data.skills}</h2>
  
                    </div>
  
                  </div>
  
  
                </div>              
                ))}

          </div>
              ) : (
                <>
              <LoaderTarget />
            </>
        )
      }

        { loadingAdmin ? null : (
          admin === "si" ? (
            
            <div className={styles.modalBtn} onClick={openCloseModal}>
              <Buttons.Button children="NEW CHARACTER" />
            </div>

          ) : 
          null
          )}

        <Modal.ModalDeleteConfirm modalDeleteConfirm={modalDeleteConfirm} setModalDeleteConfirm={setModalDeleteConfirm} data={modalInfo} openCloseDeleteModal={openCloseDeleteModal}/>
        <Modal.ModalTarget data={modalInfo} dataAdmin={dataAdmin} openCloseTargetModal={openCloseTargetModal} stateModalTarget={stateModalTarget} admin={admin}/>
        
        <Separator height={80} />

      </div>

        <Modal.ModalCreateTarget stateModal={stateModal} openCloseModal={openCloseModal}/>
        <Modal.ModalUpdate modalUpdate={modalUpdate} setModalUpdate={setModalUpdate} dataTarget={dataTarget} setDataTarget={setDataTarget} />

        {/* { !modalDeleteConfirm ? null : <ModalDeleteConfirm modalDeleteConfirm={modalDeleteConfirm} setModalDeleteConfirm={setModalDeleteConfirm} data={data}/>} */}
        
      

    </>
  )
}

export { Target }