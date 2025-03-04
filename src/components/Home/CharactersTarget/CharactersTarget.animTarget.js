import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animTarget = ({targetRef}) => {
    const target = targetRef.current.children

    gsap.set(target, {
        yPercent: 60,
        opacity: 0,
    })
    gsap.to(target, {
        yPercent: 0,
        opacity: 1,
        stagger: { each: 1, from: "center"},
        scrollTrigger: {
            trigger: target,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            toggleActions: "play complete reverse complete",
            ease: "power1.easeOut",
        }
    })
}

export default animTarget