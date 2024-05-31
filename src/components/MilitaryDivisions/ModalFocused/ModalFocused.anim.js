import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({ staticItemsRef, dynamicItemsRef }) => {

    const staticItems = staticItemsRef.current.children
    const dynamicItems = dynamicItemsRef?.current.children

    gsap.fromTo(staticItems, {
        x: -200,
        opacity: 0,
        scale: .6
    }, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.easeInOut",
    }) 

    gsap.fromTo(dynamicItems, {
        y: 300,
        opacity: 0,
        scale: .6
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.easeInOut",
    }) 



}

export default anim