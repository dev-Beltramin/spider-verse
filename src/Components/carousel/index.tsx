"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { heroesData } from "../interfaces/hero"
import CarouselDetails from "./carouselDetails"
import HeroPicture from "../heroPicture"

import styles from './carousel.module.scss'
import carouselModification, { carouselMobile, enumPosition } from "../carouselModification"

interface propsDetails {
  heroes: heroesData[]
  activeId: string
}

const Carousel = ({ heroes, activeId }: propsDetails) => {


  const [isActive, setIsActive] = useState<heroesData[] | null>(null)
  const [heroIndex, setHeroIndex] = useState<number>(
    heroes.findIndex(hero => hero.id === activeId) - 1
  )


  const handleActiveChange = (newDirection: number) => {
    setHeroIndex((prev) => prev + newDirection)
  }

  const transitionAudio = useMemo(() => new Audio('/songs/transition.mp3'), [])


  const voiceHeroes: Record<string, HTMLAudioElement> = useMemo(() => ({
    "spider-man-616": new Audio('/songs/spider-man-616.mp3'),
    "mulher-aranha-65": new Audio('/songs/mulher-aranha-65.mp3'),
    "spider-man-1610": new Audio('/songs/spider-man-1610.mp3'),
    "sp-dr-14512": new Audio('/songs/sp-dr-14512.mp3'),
    "spider-ham-8311": new Audio('/songs/spider-ham-8311.mp3'),
    "spider-man-90214": new Audio('/songs/spider-man-90214.mp3'),
    "spider-man-928": new Audio('/songs/spider-man-928.mp3')
  }), [])

 

  const handleTouchStart =(e:React.TouchEvent<HTMLDivElement>)=>{
     
  }

  useEffect(() => {

    if (!isActive) {
      return;
    }

    transitionAudio.play()

    const voice = voiceHeroes[isActive[enumPosition.MIDDLE].id]

    voice.volume = 0.3
    voice.play()


  }, [isActive, transitionAudio])

  useEffect(() => {
    const visibleHeroes = ((heroIndex % heroes.length) + heroes.length) % heroes.length

    const visibleItems = [...heroes, ...heroes].slice(visibleHeroes, visibleHeroes + 3)

    setIsActive(visibleItems)
  }, [heroes, heroIndex])



  useEffect(() => {
    const htmlEl = document.querySelector("html")

    if (!htmlEl || !isActive) {
      return
    }
    const currentId = isActive[enumPosition.MIDDLE].id
    htmlEl.style.backgroundImage = `url("/spiders/${currentId}-background.png")`

    htmlEl.classList.add("hero-page");


    return () => {
      htmlEl.classList.remove("hero-page");
    };


  }, [isActive])

  if (!isActive) {
    return null
  }


  return (
    <main className={styles.container}>
      <div className={styles.carousel}  >
        <AnimatePresence mode="popLayout">
          {Array.isArray(isActive) && isActive.map((item, position) => (
            <motion.div key={item.id} className={styles.hero}
              onClick={() => handleActiveChange(1)}

              initial={{ x: -1500, scale: "0.75" }}
              animate={{ x: 0, ...carouselModification(position) }}
              transition={{ duration: 0.8 }}
              exit={{ x: 0, opacity: 0, scale: 1 }}
             

            >
              <HeroPicture hero={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div className={styles.details} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
        <CarouselDetails data={isActive[enumPosition.MIDDLE]} />
      </motion.div>
    </main>
  )
}

export default Carousel