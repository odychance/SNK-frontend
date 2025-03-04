import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const anim = ({titleRef}) => {
    const title = titleRef.current

    gsap.set(title, {
        scale: 0,
        opacity: 0
    })
    gsap.to(title, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: title,
            start: "top 95%",
            end: "top 80%",
            scrub: true,
            ease: "power4.easeInOut",
        }
    })
}

export default anim