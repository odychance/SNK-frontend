import { gsap } from "gsap";

const anim = ({ stateModal, formRef, containerFormRef }) => {

    const form = formRef?.current
    const containerForm = containerFormRef?.current

    if(stateModal) {
        gsap.fromTo(containerForm, {
            opacity: 0,
            scale: 1.1
        }, {
            opacity: 1,
            scale: 1,
            duration: .5
        })

        gsap.fromTo(form, {
            yPercent: 150,
        }, {
            yPercent: -50,
            ease: "back.inOut",
            duration: 1
        })
        return
    }

    if(!stateModal) {
        gsap.fromTo(containerForm, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 1.1,
            duration: .5
        })

        gsap.fromTo(form, {
            yPercent: -50,
        }, {
            yPercent: 150,
            ease: "power4.easeInOut",
            duration: 1
        })
        return
    }

}

export default anim