import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({ buttonRef, containerTargetRef }) => {
    const button = buttonRef?.current
    
    gsap.set(button, {
        y: 30,
        opacity: 0
    })
    gsap.to(button, {
        y: -20,
        opacity: 1,
        scrollTrigger: {
            trigger: button,
            scrub: true,
            start: "top 15%",
            end: "top 5%",
            toggleActions: "play none reverse none",
            ease: "power1.easeOut",
        }
    })
    if(containerTargetRef?.current?.children !== undefined) {
        const containerTarget = [...containerTargetRef?.current?.children]
        containerTarget.forEach((el, i) => {
            gsap.set(el, {
                x: i % 2 ? 100 : -100,
                y: i % 2 ? 100 : -100,
                opacity: 0,

            })
            gsap.to(el, {
                x: 0,
                y: 0,
                opacity: 1,
                scrub: true,
                stagger: { each: 1, from: "center" },
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none reverse none",
                    ease: "power4.easeInOut"
                }
            })
        })
    }
}

export default anim