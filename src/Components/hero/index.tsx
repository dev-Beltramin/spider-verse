"use client"

import { motion } from 'framer-motion'
import HeroPicture from "../heroPicture"
import { heroesData } from "../interfaces/hero"
import styles from './hero.module.scss'
import { heroFont } from "@/fonts"
import Link from 'next/link'

interface heroProps {
  heroes: heroesData[]
}


const Hero = ({ heroes }: heroProps) => {


  return (
    <>
      <div className={styles.title}>
        <motion.h2 className={`${heroFont.className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>Personagens</motion.h2>
      </div>
      <motion.main className={styles.container}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero) => (
          <motion.div key={hero.id} className={`${styles.imageContainer} ${styles[hero.id]}`}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <Link href={`/detalhes/${hero.id}`}>
              <HeroPicture hero={hero} />

            </Link>
          </motion.div>
        ))}

      </motion.main>
    </>
  )
}

export default Hero