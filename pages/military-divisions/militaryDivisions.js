import React, { useRef, useEffect } from 'react'
import styles from './militaryDivisions.module.scss'
import Layout from '@/components/Layout/Layout'
import { MilitaryDivisions } from '@/components/MilitaryDivisions'

import { useQuery } from '@apollo/client'
import { ApolloQuerys } from "@/Apollo"

import gsap from 'gsap'

const MilitaryDivisionsPage = () => {

    const { data: dataAdmin, loading: loadingAdmin } = useQuery(ApolloQuerys.GET_ADMIN)
    const admin = dataAdmin?.getAdmin?.admin
    const containerRef = useRef(null)
    const titleRef = useRef()
    const imageRef = useRef(null)

    useEffect(() => {
        const title = titleRef?.current?.children
        const img = imageRef?.current

        gsap.fromTo(title, {
            x: 200,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 3,
            ease: "power4.easeInOut"
        })

        gsap.fromTo(img, {
            scale: 1.2,
            opacity: 0.1
        }, {
            scale: 1,
            opacity: .6,
            duration: 2,
            ease: "power4.easeInOut"
        })

    }, [!loadingAdmin])



  return (
    <>
        <Layout>

            <div className={styles.pageTitle} ref={containerRef}>
                <div ref={titleRef}>
                    <h1>MILITARY</h1>
                    <h1>DIVISIONS</h1>
                </div>
                <img src='/Media/Images/Background-Img1.webp' alt='background image' ref={imageRef} />
            </div>

            <MilitaryDivisions admin={admin}/>
        </Layout>
    </>
    )
}

export default MilitaryDivisionsPage