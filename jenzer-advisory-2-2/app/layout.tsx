import type React from "react"
import "@/app/globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import type { Metadata } from "next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jenzer Advisory FZ-LLC | Operational Excellence Consulting",
  description:
    "Jenzer Advisory provides expert consulting in operational excellence, asset management, and strategic advisory services for energy, industrial, and infrastructure sectors.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-cpAomO0Usp3ARkQrhNQzGVFHg8YvLd.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-cpAomO0Usp3ARkQrhNQzGVFHg8YvLd.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'