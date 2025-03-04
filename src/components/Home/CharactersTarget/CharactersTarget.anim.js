import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({sketchTarget, refOpacity1, refOpacity2}) => {

    const sketch = sketchTarget.current
    const opacity1 = refOpacity1.current
    const opacity2 = refOpacity2.current
    const targets = [opacity1, opacity2].filter(el => el)

    gsap.set(sketch, {
        opacity: 0.2,
        x: 1500,
        scrollTrigger: {
            trigger: sketch,
            scrub: true,
            toggleActions: "play complete reverse complete",
            ease: "power1.easeInOut",
        }
    })
    gsap.to(sketch, {    
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: sketch,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            toggleActions: "play complete reverse complete",
            ease: "power1.easeInOut",
            onLeave: () => {     
                gsap.set(targets, { opacity: 1 })
                gsap.to(targets, { opacity: 0.1, stagger: 0.3 }) 
            },

            onEnterBack: () => {
                gsap.set(targets, { opacity: 0.1 })
                gsap.to(targets, { opacity: 1, stagger: 0.3 }) 
            }
        },
    })
}

export default anim