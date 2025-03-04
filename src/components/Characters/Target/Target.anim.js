import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LoaderTarget } from "@/components/Shared";

gsap.registerPlugin(ScrollTrigger)

const anim = ({targetRef}) => {

    if(targetRef.current?.children !== undefined) {

        const target = [...targetRef.current?.children]
        
        target.forEach( (el, i) => {
          gsap.set(el, {
            x: i % 2 === 0 ? -400 : 400,
          })
          gsap.to(el, {
            x: 0,
            opacity: .5,
            delay: .3,
            stagger: {each: 1, from: 'top'},
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
              toggleActions: "play complete reverse complete",
              ease: "power1.easeOut",
            }
          })
        })

    } else {
        <LoaderTarget />
    }
}

export default anim