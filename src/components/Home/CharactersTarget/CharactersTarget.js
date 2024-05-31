import styles from './charactersTarget.module.scss'
import { useEffect, useRef } from 'react'
import { Buttons } from '@/components/Shared'
import anim from './CharactersTarget.anim'
import animTarget from './CharactersTarget.animTarget'
import Link from 'next/link'

const CharactersTarget = () => {

    const characters = [
        { name: "Sasha", lastname: "Braus", image: "/Media/Images/sashaB.png", id:"2"},
        { name: "Zeke", lastname: "Yeager", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c40443d-1cfc-4e9c-95c5-b7635de03d38/dfjwl9o-0d1df6ff-e52d-464e-9c05-939dfed39a55.png/v1/fill/w_752,h_1063/zeke_yeager_render_by_kiss_and_kancer_dfjwl9o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzBjNDA0NDNkLTFjZmMtNGU5Yy05NWM1LWI3NjM1ZGUwM2QzOFwvZGZqd2w5by0wZDFkZjZmZi1lNTJkLTQ2NGUtOWMwNS05MzlkZmVkMzlhNTUucG5nIiwid2lkdGgiOiI8PTkwNSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IBDY4RlUpwARku6BbRXqwDvV4iM-QUc2Bi30frRQ9FU", id:"5"},
        { name: "Eren", lastname: "Yeager", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17945c27-4d87-49e9-87f1-8f09067550bb/ddbnwnk-428d3473-c85a-4690-b510-b0bb605a4998.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3OTQ1YzI3LTRkODctNDllOS04N2YxLThmMDkwNjc1NTBiYlwvZGRibnduay00MjhkMzQ3My1jODVhLTQ2OTAtYjUxMC1iMGJiNjA1YTQ5OTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SlDeH08bPCXjcb3W2FwK0H7NMSNmxoJpsp6nc3hmr6Q", id:"1"},
        { name: "Jean", lastname: "Aot", image: "https://i.pinimg.com/originals/8d/ee/ab/8deeab19a99a4b1fcaa41fad1b240686.png", id:"3"},
        { name: "Hange", lastname: "Zoe", image: "/Media/Images/hangeZ.png", id:"4"},
      ]
    
      const sketchTarget = useRef(null)
      const refOpacity1 = useRef(null)
      const refOpacity2 = useRef(null)
      anim({sketchTarget, refOpacity1, refOpacity2})

      const targetRef = useRef(null)    
    
      useEffect(() => {
        animTarget({targetRef})
      }, [targetRef.children])


  return (
    <div className={styles.charactersContainer}>
        <div className={styles.title} ref={sketchTarget}>
            <h1 className={styles.charactersTitleBg} ref={refOpacity1}>| ¡Some of the characters! |</h1>
            <h1 className={styles.charactersTitle}>| ¡Some of the characters! |</h1>
            <h1 className={styles.charactersTitleBg} ref={refOpacity2}>| ¡Some of the characters! |</h1>
        </div>

        <div className={styles.characterContainer} ref={targetRef}>
            {characters.map( (character) => (
                <div className={styles.target} key={character.id}>
                    <div>
                        <Link href={'/characters'}>
                            <h2 className={styles.charactersName}>{character.name} <br/>{character.lastname}</h2>
                            <h3 className={styles.hoverName}>{character.name} {character.lastname}</h3>
                            <img src={character.image} alt="Prueba" className={styles.imageCharacter}/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        
        <Link href="/characters">
            <Buttons.WatchMoreBtn text="WATCH ALL!"/>
        </Link>

    </div> 
  )
}

export { CharactersTarget }