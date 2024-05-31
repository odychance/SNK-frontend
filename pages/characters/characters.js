import React, { useRef, useEffect } from 'react'
import styles from './characters.module.scss'
import Layout from '@/components/Layout/Layout'

import { Target } from '@/components/Characters'

import { useQuery } from '@apollo/client'
import { ApolloQuerys } from "@/Apollo"
// import { LoaderTarget } from 'src/components/Shared/LoaderTarget'

import { gsap } from 'gsap'

const characters = () => {

    const { data: dataUser, loading: loadingUser } = useQuery(ApolloQuerys.GET_USER)
    const { data: dataAdmin, loading: loadingAdmin } = useQuery(ApolloQuerys.GET_ADMIN) 
    const { data: dataCharacters, loading: loadingCharacters } = useQuery(ApolloQuerys.GET_CHARACTERS)

    const titleRef = useRef(null)

    if(titleRef.current === null) {
        null
    } else {
            const title = titleRef.current
    
            gsap.fromTo(title, {
                y: -400,
                opacity: 0,
                scale: 2
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 2.5,
                ease: "power4.easeInOut"
            })
        }

  return (
    <>
        <Layout>

            <div className={styles.mainContainer}>
                <div className={styles.titleContainer} ref={titleRef}>
                    <h1 className={styles.title1}>THE CHARACTERS</h1>
                    <h1 className={styles.title2}>THE CHARACTERS</h1>
                </div>
        
                <Target data={dataCharacters} dataUser={dataUser} loading={loadingCharacters} dataAdmin={dataAdmin} loadingAdmin={loadingAdmin}/>

            </div>
        </Layout>
    </>
    )
}

export default characters