import { gsap } from 'gsap'

const Anim = ({switchActive, navRef}) => {

    const el = navRef.current

    if(switchActive) {
        gsap.fromTo(el.children, {
          opacity: 0,
          x: 300
        }, {
          duration: 1,
          opacity: 1,
          x: 0,
          stagger: { each: 0.2},
          ease: "power4.easeOut",
        })
  
      } else {
        gsap.fromTo(el.children, {
          opacity: 1,
          x: 0
        }, {
          opacity: 0,
          x: 1000,
          stagger: { each: -0.2},
          duration: 1
        })
  
        // gsap.from(txt, { })
        // gsap.to(txt, { opacity: 0, x: 1000, duration: 1.75})
  
        // gsap.from(txt2, { })
        // gsap.to(txt2, { opacity: 0, x: 1000, duration: 1.5})
  
        // gsap.from(txt3, { })
        // gsap.to(txt3, { opacity: 0, x: 1000, duration: 1.25})
  
        // gsap.from(txt4, { })
        // gsap.to(txt4, { opacity: 0, x: 1000, duration: 1})
  
        // gsap.from(txt5, { })
        // gsap.to(txt5, { opacity: 0, x: 1000, duration: 0.75})
  
        // gsap.from(txt6, { })
        // gsap.to(txt6, { opacity: 0, x: 1000, duration: 0.5})
  
      }
  
  return
}

export default Anim