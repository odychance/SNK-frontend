import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animTitle = ({ titleRef }) => {

    const title = titleRef.current

    gsap.fromTo(title, {
        opacity: 0,
        x: 600,
    }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "top 65%",
            scrub: true,
        }
    })

}

export default animTitle