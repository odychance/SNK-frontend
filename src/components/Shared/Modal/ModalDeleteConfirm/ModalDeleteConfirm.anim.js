import { gsap } from 'gsap'

const anim = ({containerRef, modalDeleteConfirm}) => {
    const container = containerRef.current

    if(modalDeleteConfirm) {
        gsap.set(container, {
            opacity: 0,
            scale: 1.2
        })
        gsap.to(container, {            
            opacity: 1,
            scale: 1,
            duration: .3,
        })
        return 
    }
    
    if(!modalDeleteConfirm) {
        gsap.set(container, {
            opacity: 1,
            scale: 1
        })
        gsap.to(container, {
            opacity: 0,
            scale: 1.2,
            duration: .3,
        })
        return
    }
}

export default anim