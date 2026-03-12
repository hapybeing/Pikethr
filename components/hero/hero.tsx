"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useMouse } from "@/hooks/use-mouse"
import { useEffect, useState } from "react"

export default function Hero() {

  const mouse = useMouse()

  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY,[0,400],[1,0])

  const [offset,setOffset] = useState({x:0,y:0})

  useEffect(()=>{

    const x = (mouse.x - window.innerWidth/2) / 40
    const y = (mouse.y - window.innerHeight/2) / 40

    setOffset({x,y})

  },[mouse])

  return (

    <motion.section
      style={{opacity}}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <motion.div
        animate={{x:offset.x,y:offset.y}}
        transition={{type:"spring",stiffness:40}}
        className="absolute w-[900px] h-[900px] rounded-full
        bg-[var(--color-accent)] opacity-[0.05] blur-[140px] hero-glow"
      />

      <div className="relative z-10 text-center space-y-10 px-6">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.9}}
          className="text-[64px] md:text-[104px] font-semibold tracking-tight"
        >
          The Universe
          <br/>
          of Knowledge
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.2,duration:0.8}}
          className="max-w-xl mx-auto text-neutral-400 text-lg"
        >
          Pike transforms the entirety of human knowledge into an explorable
          interactive universe.
        </motion.p>

        <motion.button
          whileHover={{scale:1.06}}
          whileTap={{scale:0.96}}
          className="px-8 py-3 rounded-full bg-[var(--color-accent)]
          text-white font-medium shadow-glow transition-all"
        >
          Explore the Graph
        </motion.button>

      </div>

    </motion.section>

  )
}
