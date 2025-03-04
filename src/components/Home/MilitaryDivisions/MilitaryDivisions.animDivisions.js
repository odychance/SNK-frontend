import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const animDivisions = ({militaryPoliceRef, scoutingLegionRef, stationaryGuardRef}) => {

    const militaryPolice = militaryPoliceRef.current
    const scoutingLegion = scoutingLegionRef.current
    const stationaryGuard = stationaryGuardRef.current
    const targets = [militaryPolice, scoutingLegion, stationaryGuard].filter(el => el)

    gsap.set(targets, {
        opacity: 0
    })
    gsap.set(militaryPolice, {
        y: 100,
    })
    gsap.set(scoutingLegion, {
        x: 100,
    })
    gsap.set(stationaryGuard, {
        x: -100,
    })
    gsap.to(militaryPolice, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: militaryPolice,
            start: "top 90%",
            end: "top: 50%",
            scrub: true,
        }
    })
    gsap.to(scoutingLegion, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: scoutingLegion,
            start: "top 90%",
            end: "top: 50%",
            scrub: true,
        }
    })
    gsap.to(stationaryGuard, {
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