"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useMemo } from "react"

function Nodes() {
  const nodes = useMemo(() => {
    const arr = []
    for (let i = 0; i < 80; i++) {
      arr.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 10
      ])
    }
    return arr
  }, [])

  return (
    <>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos as any}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#8ab4ff" />
        </mesh>
      ))}
    </>
  )
}

export default function KnowledgeGraph() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%"
      }}
      camera={{ position: [0, 0, 8] }}
    >
      <ambientLight intensity={0.6} />

      <Nodes />

      <OrbitControls enableZoom enablePan enableRotate />
    </Canvas>
  )
}
