import { gsap } from "gsap";

const anim = ({ stateModal, formRef, containerFormRef }) => {
    const form = formRef?.current
    const containerForm = containerFormRef?.current

    if(stateModal) {
        gsap.set(containerForm, {
            opacity: 0,
            scale: 1.1
        })
        gsap.set(form, {
            yPercent: 150,
        })
        gsap.to(containerForm, {
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

    if(!stateModal) {
        gsap.set(containerForm, {
            opacity: 1,
            scale: 1
        })
        gsap.set(form, {
            yPercent: -50,
        })
        gsap.to(containerForm, {
            opacity: 0,
            scale: 1.1,
            duration: .5
        })
        gsap.to(form, {
            yPercent: 150,
            ease: "power4.easeInOut",
            duration: 1
        })
        return
    }
}

export default anim