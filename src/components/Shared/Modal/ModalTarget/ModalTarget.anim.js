import { gsap } from "gsap";

const anim = ({modalRef, stateModalTarget}) => {
    const modal = modalRef?.current

    if(stateModalTarget) {
        gsap.fromTo(modal, {
            opacity: 0,
            scale: 1.2,
        }, {
            opacity: 1,
            scale: 1,
            duration: .3,
        })
        return
    } 

    if(!stateModalTarget) {
        gsap.fromTo(modal, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 1.2,
            duration: .3,
        })
        return
    }
}

export default anim