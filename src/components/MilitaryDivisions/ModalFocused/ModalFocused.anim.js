import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({ staticItemsRef, dynamicItemsRef }) => {
    const staticItems = staticItemsRef.current.children
    const dynamicItems = dynamicItemsRef?.current.children

    gsap.set(staticItems, {
        x: -200,
        opacity: 0,
        scale: .6
    })
    gsap.set(dynamicItems, {
        y: 300,
        opacity: 0,
        scale: .6
    })
    gsap.to(staticItems, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.easeInOut",
    }) 
    gsap.to(dynamicItems, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.easeInOut",
    }) 
}

export default anim