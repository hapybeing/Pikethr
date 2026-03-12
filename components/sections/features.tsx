"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Global Knowledge Graph",
    description:
      "Every concept, discovery, and field becomes a node in a living network."
  },
  {
    title: "Explorable Idea Space",
    description:
      "Navigate knowledge visually instead of reading disconnected documents."
  },
  {
    title: "Discovery Engine",
    description:
      "Reveal hidden relationships between disciplines and research."
  }
]

export default function Features() {
  return (
    <section className="relative py-40 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {features.map((feature, i) => (

          <motion.div
            key={feature.title}
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:i * 0.12 }}
            viewport={{ once:true }}
            className="p-10 rounded-xl border border-[var(--glass-border)]
            bg-[var(--glass-bg)] backdrop-blur-glass"
          >

            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-neutral-400 leading-relaxed text-sm">
              {feature.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}
