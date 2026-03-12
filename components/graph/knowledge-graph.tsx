"use client"

import { useEffect, useRef } from "react"
import { createGraph, addNode, addEdge } from "@/lib/graph-algorithms"
import { GraphEngine } from "./graph-engine"

export default function KnowledgeGraph() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const graph = createGraph()

    addNode(graph, { id: "physics", label: "Physics", x:0,y:0,vx:0,vy:0,mass:1 })
    addNode(graph, { id: "math", label: "Mathematics", x:0,y:0,vx:0,vy:0,mass:1 })
    addNode(graph, { id: "ai", label: "AI", x:0,y:0,vx:0,vy:0,mass:1 })
    addNode(graph, { id: "philosophy", label: "Philosophy", x:0,y:0,vx:0,vy:0,mass:1 })

    addEdge(graph, { source: "math", target: "physics", strength: 1 })
    addEdge(graph, { source: "math", target: "ai", strength: 1 })
    addEdge(graph, { source: "philosophy", target: "physics", strength: 0.6 })

    const engine = new GraphEngine(graph)

    engine.initializePositions(canvas.width, canvas.height)

    function render() {

      engine.step()

      ctx.clearRect(0,0,canvas.width,canvas.height)

      graph.edges.forEach(edge => {

        const a = graph.nodes.find(n => n.id === edge.source)!
        const b = graph.nodes.find(n => n.id === edge.target)!

        ctx.beginPath()
        ctx.moveTo(a.x + canvas.width/2, a.y + canvas.height/2)
        ctx.lineTo(b.x + canvas.width/2, b.y + canvas.height/2)
        ctx.strokeStyle = "rgba(255,255,255,0.2)"
        ctx.stroke()

      })

      graph.nodes.forEach(node => {

        ctx.beginPath()
        ctx.arc(node.x + canvas.width/2, node.y + canvas.height/2, 6, 0, Math.PI * 2)
        ctx.fillStyle = "#7C7CFF"
        ctx.fill()

      })

      requestAnimationFrame(render)

    }

    render()

  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen"
    />
  )
}
