import gsap from 'gsap'

const anim = ({modalRef, modalDeleteDivision}) => {
    const modal = modalRef.current

    if(modalDeleteDivision) {
        gsap.set(modal, {
            y: -100,
            opacity: 0,
            scale: 1.2
        })
        gsap.to(modal, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .5,
            ease: "power4.easeInOut",
        })
    } else {
        gsap.set(modal, {
            y: 0,
            opacity: 1,
            scale: 1
        })
        gsap.to(modal, {
            y: 100,
            opacity: 0,
            scale: 1.2,
            duration: .5,
            ease: "power4.easeInOut",
        })
    }
}

export default anim