import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Pike",
  description: "Explore human knowledge as a living universe"
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
