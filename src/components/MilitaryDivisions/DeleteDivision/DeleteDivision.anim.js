import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const anim = ({modalRef, modalDeleteDivision}) => {

    const modal = modalRef.current

    if(modalDeleteDivision) {
        gsap.fromTo(modal, {
            y: -100,
            opacity: 0,
            scale: 1.2
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .5,
            ease: "power4.easeInOut",
        })
    } else {
        gsap.fromTo(modal, {
            y: 0,
            opacity: 1,
            scale: 1
        }, {
            y: 100,
            opacity: 0,
            scale: 1.2,
            duration: .5,
            ease: "power4.easeInOut",
        })
    }

}

export default anim