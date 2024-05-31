import { gsap } from "gsap"

const anim  = ({animVideo}) => {
    const video = animVideo.current

    gsap.from(video, {
      opacity: 0,
      scale: 10,
    })
    
    gsap.to(video, {
      opacity: 1,
      scale: 1,
      duration: 3
    })

}

export default anim