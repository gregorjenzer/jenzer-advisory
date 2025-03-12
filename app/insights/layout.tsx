import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industry Insights | Jenzer Advisory FZ-LLC",
  description:
    "Expert perspectives on operational excellence, asset management, and leadership in energy and industrial sectors.",
  openGraph: {
    title: "Industry Insights | Jenzer Advisory FZ-LLC",
    description:
      "Expert perspectives on operational excellence, asset management, and leadership in energy and industrial sectors.",
    url: "https://jenzeradvisory.com/insights",
    siteName: "Jenzer Advisory FZ-LLC",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-Ecc95sAhBYG0owU3RWePQcJVoLSIK3.png",
        width: 800,
        height: 600,
        alt: "Jenzer Advisory Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

