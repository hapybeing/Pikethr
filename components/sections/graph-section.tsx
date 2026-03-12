"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const KnowledgeGraph = dynamic(
  () => import("@/components/graph/knowledge-graph"),
  { ssr: false }
)

export default function GraphSection() {
  return (
    <section
      id="graph-section"
      style={{
        padding: "140px 20px",
        textAlign: "center"
      }}
    >

      <div style={{ maxWidth: "900px", margin: "0 auto", marginBottom: "60px" }}>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "42px",
            fontWeight: 600,
            marginBottom: "20px"
          }}
        >
          Explore Knowledge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "#aaa",
            fontSize: "18px"
          }}
        >
          Pike maps ideas into an explorable network where discoveries connect across disciplines.
        </motion.p>

      </div>

      <div
        style={{
          height: "600px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <KnowledgeGraph />
      </div>

    </section>
  )
}
