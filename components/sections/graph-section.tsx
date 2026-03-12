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
        position: "relative",
        minHeight: "100vh",
        paddingTop: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "42px",
            fontWeight: 600,
            marginBottom: "16px"
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
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          Pike maps ideas into an explorable network where discoveries connect across disciplines.
        </motion.p>
      </div>

      <div
        style={{
          width: "100%",
          height: "70vh",
          maxWidth: "1200px",
          position: "relative"
        }}
      >
        <KnowledgeGraph />
      </div>
    </section>
  )
}
