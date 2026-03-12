"use client"

import { motion } from "framer-motion"

const links = [
  { name: "Universe", href: "#" },
  { name: "Knowledge", href: "#" },
  { name: "Research", href: "#" },
  { name: "Vision", href: "#" }
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <div className="flex items-center gap-10 px-8 py-3 rounded-full backdrop-blur-glass bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-glow">
        
        <div className="text-sm font-semibold tracking-wide">
          Pike
        </div>

        <div className="flex items-center gap-6 text-sm text-neutral-300">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
