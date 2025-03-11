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
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
        sizes: "16x16",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
        sizes: "32x32",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
        sizes: "48x48",
      },
    ],
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jenzeradvisory.com",
    title: "Jenzer Advisory | Operational Excellence & Asset Management",
    description: "Partnering with energy and industrial leaders to drive sustainable performance.",
    siteName: "Jenzer Advisory FZ-LLC",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
        width: 800,
        height: 600,
        alt: "Jenzer Advisory Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenzer Advisory | Operational Excellence & Asset Management",
    description: "Partnering with energy and industrial leaders to drive sustainable performance.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png"],
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
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png"
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'