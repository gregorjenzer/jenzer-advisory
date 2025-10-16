"use client"
import { CtaLink } from "./cta-link"
import { mto } from "./utils"
import { useEffect, useState } from "react"

type Props = { showPreorder: boolean; preorderUrl?: string }

export function StickyCTA({ showPreorder, preorderUrl }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-20% 0px 0px 0px",
      threshold: 0.1,
    })
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
      <div className="rounded-2xl bg-white/95 backdrop-blur shadow-xl ring-1 ring-slate-200 p-3 flex gap-2">
        <CtaLink
          href="/e4x/pilot-kit"
          data-analytics="pilot-sticky"
          className="flex-1 rounded-xl bg-[#0a1628] text-white py-3 text-center font-semibold"
        >
          Get the Pilot Kit
        </CtaLink>
        {showPreorder ? (
          <a
            href={preorderUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="preorder-sticky"
            className="flex-1 rounded-xl border-2 border-[#0a1628] text-[#0a1628] py-3 text-center font-semibold"
          >
            Order
          </a>
        ) : (
          <a
            href={mto(
              "E4X | Launch updates",
              "Hi Gregor,\n\nPlease add me to E4X launch updates.\n\nName:\nOrganization:\nRole:\n",
            )}
            data-analytics="updates-sticky"
            className="flex-1 rounded-xl border-2 border-[#0a1628] text-[#0a1628] py-3 text-center font-semibold"
          >
            Updates
          </a>
        )}
      </div>
    </div>
  )
}
