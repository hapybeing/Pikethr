"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const KnowledgeGraph = dynamic(
  () => import("@/components/graph/knowledge-graph"),
  { ssr: false }
)

export default function GraphSection() {
  return (
    <section className="relative py-40">

      <div className="max-w-6xl mx-auto px-6 text-center mb-20">

        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
          className="text-5xl font-semibold"
        >
          Explore Knowledge
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.2 }}
          viewport={{ once:true }}
          className="text-neutral-400 mt-4 max-w-xl mx-auto"
        >
          Pike maps ideas into an explorable network where discoveries
          connect across disciplines.
        </motion.p>

      </div>

      <div className="h-[700px] w-full">
        <KnowledgeGraph />
      </div>

    </section>
  )
}
