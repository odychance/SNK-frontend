import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const anim = ({titleRef, imgRef}) => {
    const title = titleRef.current
    const img = imgRef.current
    const targets = [title, img].filter(el => el)

    gsap.set([title, img].filter(el => el), {
        opacity: 0,
        y: targets.length % 2 ? 200 : -200
    })
    gsap.to(title, {
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


    gsap.to(img, {
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