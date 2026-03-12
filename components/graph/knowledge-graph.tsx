"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

import { createGraph, addNode, addEdge } from "@/lib/graph-algorithms"
import { GraphEngine } from "./graph-engine"

function GraphScene() {

  const { graph, engine } = useMemo(() => {

    const graph = createGraph()

    addNode(graph, { id:"physics", label:"Physics", x:0,y:0,vx:0,vy:0,mass:1 })
    addNode(graph, { id:"math", label:"Mathematics", x:0,y:0,vx:0,vy:0,mass:1 })
    addNode(graph, { id:"ai", label:"Artificial Intelligence", x:0,y:0,vx:0,vy:0,mass:1 })
    addNode(graph, { id:"philosophy", label:"Philosophy", x:0,y:0,vx:0,vy:0,mass:1 })

    addEdge(graph,{source:"math",target:"physics",strength:1})
    addEdge(graph,{source:"math",target:"ai",strength:1})
    addEdge(graph,{source:"philosophy",target:"physics",strength:0.6})

    const engine = new GraphEngine(graph)

    engine.initializePositions(10,10)

    return { graph, engine }

  }, [])

  const nodeRefs = useRef<THREE.Mesh[]>([])
  const lineRefs = useRef<THREE.Line[]>([])

  useFrame(() => {

    engine.step()

    graph.nodes.forEach((node,i)=>{

      const mesh = nodeRefs.current[i]
      if(!mesh) return

      mesh.position.x = node.x
      mesh.position.y = node.y

    })

    graph.edges.forEach((edge,i)=>{

      const line = lineRefs.current[i]
      if(!line) return

      const a = graph.nodes.find(n=>n.id===edge.source)!
      const b = graph.nodes.find(n=>n.id===edge.target)!

      const positions = new Float32Array([
        a.x,a.y,0,
        b.x,b.y,0
      ])

      line.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions,3)
      )

      line.geometry.computeBoundingSphere()

    })

  })

  return (

    <group>

      {graph.nodes.map((node,i)=>(
        <mesh
          key={node.id}
          ref={(el)=>{
            if(el) nodeRefs.current[i] = el
          }}
          position={[node.x,node.y,0]}
        >
          <sphereGeometry args={[0.15,16,16]} />
          <meshStandardMaterial
            color="#7C7CFF"
            emissive="#4444ff"
          />
        </mesh>
      ))}

      {graph.edges.map((edge,i)=>{

        const geometry = new THREE.BufferGeometry()

        const material = new THREE.LineBasicMaterial({
          color:"#ffffff",
          transparent:true,
          opacity:0.2
        })

        const line = new THREE.Line(geometry,material)

        return (
          <primitive
            key={i}
            object={line}
            ref={(el:THREE.Line|null)=>{
              if(el) lineRefs.current[i] = el
            }}
          />
        )

      })}

    </group>

  )

}

export default function KnowledgeGraph(){

  return (

    <div className="w-full h-full">

      <Canvas camera={{position:[0,0,8],fov:60}}>

        <ambientLight intensity={0.6} />

        <pointLight
          position={[10,10,10]}
          intensity={1.2}
        />

        <GraphScene />

        <OrbitControls
          enableZoom
          enablePan
          enableRotate
        />

      </Canvas>

    </div>

  )

}
