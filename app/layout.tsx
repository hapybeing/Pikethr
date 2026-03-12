import "./globals.css"
import { ReactNode } from "react"
import Navbar from "@/components/navbar/navbar"

export const metadata = {
  title: "Pike",
  description: "Explore human knowledge as a living universe",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">

        <Navbar />

        <main className="relative">
          {children}
        </main>

      </body>
    </html>
  )
}
