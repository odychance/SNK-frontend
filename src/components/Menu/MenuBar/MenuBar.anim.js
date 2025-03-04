import { gsap } from 'gsap'

const Anim = ({switchActive, navRef}) => {
    const el = navRef.current

    if(switchActive) {
        gsap.set(el.children, {
          opacity: 0,
          x: 300
        })
        gsap.to(el.children, {
          duration: 1,
          opacity: 1,
          x: 0,
          stagger: { each: 0.2},
          ease: "power4.easeOut",
        })
      } else {
        gsap.set(el.children, {
          opacity: 1,
          x: 0
        })
        gsap.to(el.children, {
          opacity: 0,
          x: 1000,
          stagger: { each: -0.2},
          duration: 1
        })
      }
  return
}

export default Anim