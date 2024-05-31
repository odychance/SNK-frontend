import styles from './Layout.module.scss'
import React, { useState, useRef, useEffect } from 'react'
import { Menu } from '../Menu'
import { useRouter } from 'next/router'
import { Container } from '../Shared'
import anim from './Layout.anim'
import Footer from '../Footer/Footer'
import Link from 'next/link'

import { ApolloQuerys } from "@/Apollo"
import { useQuery } from "@apollo/client"


const Layout = (props) => {

    const { data: dataUser, loading: loadingUser } = useQuery(ApolloQuerys.GET_USER)
    const { data: dataAdmin, loading: loadingAdmin } = useQuery(ApolloQuerys.GET_ADMIN)


    const { children } = props
    const [ switchActive, setSwitchActive ] = useState(false)
    const router = useRouter()
    const menubarAnim = useRef(null)
    
        useEffect(() => {
            anim({menubarAnim})
        }, [loadingAdmin || loadingUser])
    
    const logout = () => {
        setTimeout(() => {
            localStorage.removeItem('token')
            router.push('/')
        }, 1000);
    }
    
    
    const handleClick = () => {
        setSwitchActive(!switchActive)
    }
    
    return (
    <>
        { loadingAdmin || loadingUser ? null : (
            <div className={styles.container}>
                <div className={styles.containerLayout} ref={menubarAnim}>

                    <Link href='/'>
                        <img src="/Media/Images/logo1.webp" className={styles.logo}/>
                    </Link>

                    <div className={styles.layoutCenter}>
                        <p>Hey! {dataAdmin.getAdmin?.name || dataUser.getUser?.name} {dataAdmin.getAdmin?.lastname || dataUser.getUser?.lastname } {dataAdmin.getAdmin?.admin ? '(Admin)' : null}</p>
                    </div>

                    <div className={styles.layoutRight}>
                        <Menu.MenuButton handleClick={handleClick} switchActive={switchActive}/>
                        <div>
                            { dataAdmin.getAdmin?.name || dataUser.getUser?.name ? (
                                <img src="/Media/Svg/logout.svg" className={styles.logIcon} onClick={logout}/>
                            ) : (
                                <Link href='/join/sign-in'>
                                    <img src="/Media/Svg/login.svg" className={styles.logIcon}/>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <Menu.MenuBar switchActive={switchActive}/>

                <Container>
                    {children}
                </Container>

            </div>
        )

        }

        <Footer />
    </>
  )
}

export default Layout