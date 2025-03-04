import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({ aboutContainerRef }) => {
    if(aboutContainerRef.current?.children === undefined) {
        null
    } else {
        const aboutContainer = [...aboutContainerRef.current?.children]
        aboutContainer.forEach(( el, i ) => {
            gsap.set(el, {
                x: i % 2 === 0 ? -200 : 200,
                opacity: 0,
            })
            gsap.to(el, {
                x: 0,
                opacity: 1,
                delay: .3,
                stagger: { each: -1, from: "center" },
                scrollTrigger: {
                    trigger: el,
                    scrub: true,
                    start: "top 80%",
                    end: "top 50%",
                    // ease: "power4.easeInOut",
                    toggleActions: "play complete reverse complete"
                }
            })
        })
    }
}

export default anim