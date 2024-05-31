import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const animDivisions = ({militaryPoliceRef, scoutingLegionRef, stationaryGuardRef}) => {

    const militaryPolice = militaryPoliceRef.current
    const scoutingLegion = scoutingLegionRef.current
    const stationaryGuard = stationaryGuardRef.current

    gsap.fromTo(militaryPolice, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: militaryPolice,
            start: "top 90%",
            end: "top: 50%",
            scrub: true,
        }
    })
    
    gsap.fromTo(scoutingLegion, {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: scoutingLegion,
            start: "top 90%",
            end: "top: 50%",
            scrub: true,
        }
    })

    gsap.fromTo(stationaryGuard, {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: stationaryGuard,
            start: "top 90%",
            end: "top: 50%",
            scrub: true,
        }
    })

}

export default animDivisions