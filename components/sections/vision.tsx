"use client"

import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section className="relative py-48 px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-semibold max-w-3xl mx-auto leading-tight"
      >
        Mapping Humanity's
        <br />
        Intellectual Cosmos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-neutral-400 max-w-xl mx-auto mt-6"
      >
        Pike is building a dynamic representation of human understanding —
        where ideas evolve, collide, and generate new discoveries.
      </motion.p>

    </section>
  )
}
