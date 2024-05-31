import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LoaderTarget } from "@/components/Shared";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const anim = ({targetRef}) => {

    // useEffect(() => {

    if(targetRef.current?.children !== undefined) {

        const target = [...targetRef.current?.children]
        
        target.forEach( (el, i) => {
          gsap.from(el, {
            x: i % 2 === 0 ? -400 : 400,
            // opacity: 0,
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
            //   markers: {
            //     startColor: "blue",
            //     endColor: "blue",
            //     fontSize: "24px"
            //   }
            }
          })
        })

    } else {
        <LoaderTarget />
    }

    // }, [targetRef.current?.children !== undefined])

}

export default anim