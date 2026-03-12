"use client"

import { useEffect } from "react"
import { initScrollEngine } from "@/lib/scroll-engine"

export function useScroll() {
  useEffect(() => {
    initScrollEngine()
  }, [])
}
