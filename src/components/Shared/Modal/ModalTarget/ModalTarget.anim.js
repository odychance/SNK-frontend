import { gsap } from "gsap";

const anim = ({modalRef, stateModalTarget}) => {
    const modal = modalRef?.current

    if(stateModalTarget) {
        gsap.set(modal, {
            opacity: 0,
            scale: 1.2,
        })
        gsap.to(modal, {
            opacity: 1,
            scale: 1,
            duration: .3,
        })
        return
    } 

    if(!stateModalTarget) {
        gsap.set(modal, {
            opacity: 1,
            scale: 1
        })
        gsap.to(modal, {
            opacity: 0,
            scale: 1.2,
            duration: .3,
        })
        return
    }
}

export default anim