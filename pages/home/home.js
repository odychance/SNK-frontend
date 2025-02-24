import React, { useRef } from "react"
import styles from './home.module.scss'
import Layout from "@/components/Layout/Layout"
import Footer from "@/components/Footer"
import { CharactersTarget, TitansTarget, MilitaryDivisions, Summaries, AboutAnime, WhereToSee } from "@/components/Home"
import { Separator } from "@/components/Shared"
import { ApolloQuerys } from "@/Apollo"
import { useQuery } from "@apollo/client"
import { OpeningS1 } from "@/components/VideoComponents/OpeningS1Video"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {

  const { data: dataUser, loading: loadingUser } = useQuery(ApolloQuerys.GET_USER)
  const { data: dataAdmin, loading: loadingAdmin } = useQuery(ApolloQuerys.GET_ADMIN)
  const { data: dataBackOfs, loading: loadingBackOfs } = useQuery(ApolloQuerys.GET_BACK_OFS)

  const firstTitleRef = useRef(null)
  const title1 = firstTitleRef.current

  const lastTitleRef = useRef(null)
  const title2 = lastTitleRef.current

    gsap.to(title1, {
        y: 100,
        // duration: 5,
        opacity: 1,
        scrollTrigger: {
            trigger: title1,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut",
        }
    })

    gsap.to(title2, {
        y: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: title2,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut",
        }
    })
  

  return (
    <Layout dataUser={dataUser} loadingUser={loadingUser} dataAdmin={dataAdmin} loadingAdmin={loadingAdmin}>
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <div className={styles.videoContainer}>
                    <OpeningS1 />
                </div>
            </div>

            <div className={styles.title}>
                <h1 ref={firstTitleRef}>Shingeki no Kyojin</h1>
                <h1 ref={lastTitleRef}>進撃の巨人</h1>
            </div>

                <CharactersTarget />

                <Separator height={100} />

                <TitansTarget />

                <Separator height={100} />

                <MilitaryDivisions />

                <Summaries />

                <Separator height={100} />

                <WhereToSee data1={dataUser} loading1={loadingUser} data2={dataAdmin} loading2={loadingAdmin}/>

                <Separator height={100} />

                <AboutAnime data={dataBackOfs} loading={loadingBackOfs} />
        </div>
    </Layout>
)
}

export default HomePage