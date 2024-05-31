import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({sketchTarget, refOpacity1, refOpacity2}) => {

    const sketch = sketchTarget.current
    const opacity1 = refOpacity1.current
    const opacity2 = refOpacity2.current

    gsap.fromTo(sketch, {
        opacity: 0.2,
        x: 1500,
        scrollTrigger: {
            trigger: sketch,
            scrub: true,
            toggleActions: "play complete reverse complete",
            ease: "power1.easeInOut",
        }
    },{    
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
                gsap.fromTo(opacity1, {
                    opacity: 1,
                }, {
                    opacity: 0.1,
                })

                gsap.fromTo(opacity2, {
                    opacity: 1,
                }, {
                    opacity: 0.1,
                })
            },

            onEnterBack: () => {
                gsap.fromTo(opacity1, {
                    opacity: 0.1,
                }, {
                    opacity: 1,
                })

                gsap.fromTo(opacity2, {
                    opacity: 0.1,
                }, {
                    opacity: 1,
                })
            }
        },
    })
}

export default anim