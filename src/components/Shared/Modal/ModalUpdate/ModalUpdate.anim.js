import { gsap } from "gsap";

const anim = ({containerRef, formRef, modalUpdate}) => {
    const container = containerRef.current
    const form = formRef.current

    if(modalUpdate) {
        gsap.set(container, {
            opacity: 0,
            scale: 1.1
        })
        gsap.set(form, {
            yPercent: -200
        })
        gsap.to(container, {
            opacity: 1,
            scale: 1,
            duration: .5
        })
        gsap.to(form, {
            yPercent: -50,
            ease: "back.inOut",
            duration: 1
        })
        return
    }

    if(!modalUpdate) {
        gsap.set(container, {
            opacity: 1,
            scale: 1
        })
        gsap.set(form, {
            yPercent: -50
        })
        gsap.to(container, {
            opacity: 0,
            scale: 1.1,
            duration: .5
        })
        gsap.to(form, {
            yPercent: -200,
            ease: "power4.easeInOut",
            duration: 1
        })
        return
    }
}

export default anim