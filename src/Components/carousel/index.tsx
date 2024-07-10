"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { heroesData } from "../interfaces/hero"
import CarouselDetails from "./carouselDetails"
import HeroPicture from "../heroPicture"

import styles from './carousel.module.scss'
import carouselModification, { enumPosition } from "../carouselModification"

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
            <motion.div key={item.id} className={styles.hero} onClick={() => handleActiveChange(1)}
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

      <div className={styles.details}>
        <CarouselDetails data={isActive[enumPosition.MIDDLE]} />
      </div>
    </main>
  )
}

export default Carousel