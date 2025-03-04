import React, {useRef, useEffect} from 'react'
import styles from './titans.module.scss'
import Layout from '@/components/Layout/Layout'

import { Titans } from '@/components/Titans'

import { useQuery } from '@apollo/client'
import { ApolloQuerys } from '@/Apollo'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const TitansPage = () => {

    
    const { data: dataUser, loading: loadingUser } = useQuery(ApolloQuerys.GET_USER)
    const { data: dataAdmin, loading: loadingAdmin } = useQuery(ApolloQuerys.GET_ADMIN)
    const { data: dataTitans, loading: loadingTitans } = useQuery(ApolloQuerys.GET_TITANS)
    
    const animRef = useRef(null)
    const animation = animRef?.current
    
    const anim = () => {
        gsap.fromTo( animation, {
            opacity: 0
        }, {
            opacity: .8,
            duration: 3
        })
    }

    useEffect(() => {
        if(animRef.current !== null) {
            anim()
        }
    }, [animRef.current])


  return (
    <>
        <Layout>
            <div className={styles.titansContainer} ref={animRef}>
                <h1>TITANS</h1>
                <Image src="/Media/Images/Historia-de-Ymir-Fritz.webp" className={styles.img1} width={100} height={100} unoptimized alt="imagen"/>

                <div>
                    <Image src="/Media/Images/ymir-fritz-fundadora.webp" className={styles.img2} width={100} height={100} unoptimized alt="imagen"/>
                </div>
            </div>

            <Titans dataUser={dataUser} dataAdmin={dataAdmin} loadingUser={loadingUser} loadingAdmin={loadingAdmin} dataTitans={dataTitans}/>
        </Layout>
    </>
    )
}

export default TitansPage