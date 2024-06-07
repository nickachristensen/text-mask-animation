'use client'

import { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import styles from './page.module.css'

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
]

export default function Home() {
  return (
    <div className={styles.container}>
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
    </div>
  )
}

export function MaskText() {
  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "0px 0px -50% 0px"});

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.15 * i}})
  }

  return(
    <div ref={body} className={styles.body}>
      {
        phrases.map((phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}
