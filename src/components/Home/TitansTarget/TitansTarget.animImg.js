import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const animImg = ({imgRef}) => {
    const img = [...imgRef.current.children]

    img.forEach((el, i) => {
        gsap.set(el, {
            x: i % 2 === 0 ? -800 : 800,
            y: -500,
            opacity: 0,
        })
        gsap.to(el, {
            x: 0,
            y: 0,
            opacity: 1,
            delay: .3,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 20%",
                scrub: true,
                toggleActions: "play complete reverse complete",
                ease: "power4.easeInOut",
            }
        })
    })
}

export default animImg