import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const animTarget = ({targetRef}) => {
    const target = [...targetRef.current.children]

    target.forEach((el, i) => {
        gsap.fromTo(el, {
            opacity: 0,
            y: i % 2 === 0 ? -100 : 100
        }, {
            opacity: 1,
            y: 0,
            delay: .3,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 40%",
                scrub: true,
                toggleActions: "play complete reverse complete",
                ease: "power4.easeInOut",
            }

        })
    })
}

export default animTarget