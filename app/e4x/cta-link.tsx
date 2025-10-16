"use client"
import Link from "next/link"
import type React from "react"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export function CtaLink({ href, children, ...rest }: React.ComponentProps<typeof Link>) {
  const sp = useSearchParams()

  const target = useMemo(() => {
    // Normalize Link's string | UrlObject
    let hrefStr = ""
    if (typeof href === "string") hrefStr = href
    else if (href && typeof href === "object") {
      const { pathname = "", query, hash = "" } = href as any
      const qs = query ? new URLSearchParams(query as Record<string, string>).toString() : ""
      hrefStr = pathname + (qs ? `?${qs}` : "") + (hash || "")
    }

    // Leave schemes (mailto:, tel:), protocol-relative (//), and in-page #anchors untouched
    if (/^[a-z][a-z0-9+.-]*:/.test(hrefStr) || /^\/\//.test(hrefStr) || hrefStr.startsWith("#")) return hrefStr

    // Safely merge UTM-like params for internal links
    const url = new URL(hrefStr || "/", "https://example.local")
    ;["utm_source", "utm_medium", "utm_campaign", "utm_content", "from"].forEach((k) => {
      const v = sp.get(k)
      if (v && !url.searchParams.has(k)) url.searchParams.set(k, v)
    })
    return url.pathname + (url.search || "") + (url.hash || "")
  }, [href, sp])

  return (
    <Link href={target} {...rest}>
      {children}
    </Link>
  )
}
