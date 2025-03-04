import { gsap } from "gsap";

const anim = ({menubarAnim}) => {
    const menubar = menubarAnim.current

    gsap.set(menubar, {
        y: 0,
    })
    gsap.to(menubar, {
        y: 80,
        ease: "power4.out",
        delay: 2.4,
        duration: 1
    })
}

export default anim