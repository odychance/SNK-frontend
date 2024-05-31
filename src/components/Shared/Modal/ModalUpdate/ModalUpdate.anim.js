import { gsap } from "gsap";

const anim = ({containerRef, formRef, modalUpdate}) => {
    const container = containerRef.current
    const form = formRef.current

    if(modalUpdate) {
        gsap.fromTo(container, {
            opacity: 0,
            scale: 1.1
        }, {
            opacity: 1,
            scale: 1,
            duration: .5
        })

        gsap.fromTo(form, {
            yPercent: -200
        }, {
            yPercent: -50,
            ease: "back.inOut",
            duration: 1
        })
        return
    }

    if(!modalUpdate) {
        gsap.fromTo(container, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 1.1,
            duration: .5
        })

        gsap.fromTo(form, {
            yPercent: -50
        }, {
            yPercent: -200,
            ease: "power4.easeInOut",
            duration: 1
        })
        return
    }

}

export default anim