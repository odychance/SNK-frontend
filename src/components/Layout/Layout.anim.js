import { gsap } from "gsap";

const anim = ({menubarAnim}) => {
    const menubar = menubarAnim.current

    gsap.fromTo(menubar, {
        y: 0,
    }, {
        y: 80,
        ease: "power4.out",
        delay: 2.4,
        duration: 1
    })
}

export default anim