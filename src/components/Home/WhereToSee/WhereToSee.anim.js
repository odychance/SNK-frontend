import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const anim = ({titleRef, imgRef}) => {
    const title = titleRef.current
    const img = imgRef.current

    gsap.fromTo(title, {
        opacity: 0,
        y: -200
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: title,
            start: "top 20%",
            end: "top 5%",
            ease: "power4.easeInOut",
            scrub: true,
        }
    })

    gsap.fromTo(img, {
        opacity: 0,
        y: 200
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: img,
            start: "top 95%",
            end: "top 60%",
            ease: "power4.easeInOut",
            scrub: true,
        }
    })
}

export default anim