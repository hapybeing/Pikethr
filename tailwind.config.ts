import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050509",
        foreground: "#E6E6F0",
        accent: "#7C7CFF",
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,124,255,0.35)",
      },
    },
  },
  plugins: [],
}

export default config
