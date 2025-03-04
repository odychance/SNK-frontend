import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const animTitle = ({titleRef}) => {
    const title = titleRef.current

    gsap.set(title, { opacity: 0 })
    gsap.to(title, {
        opacity: 1,
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    })
}

export default animTitle