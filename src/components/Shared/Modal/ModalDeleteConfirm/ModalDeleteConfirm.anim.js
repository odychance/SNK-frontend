import { gsap } from 'gsap'

const anim = ({containerRef, modalDeleteConfirm}) => {
    const container = containerRef.current

    if(modalDeleteConfirm) {
        gsap.fromTo(container, {
            opacity: 0,
            scale: 1.2
        }, {            
            opacity: 1,
            scale: 1,
            duration: .3,
        })
        return 
    }
    
    if(!modalDeleteConfirm) {
        gsap.fromTo(container, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 1.2,
            duration: .3,
        })
        return
    }
}

export default anim