import type { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import { Check } from "lucide-react"
import { StickyCTA } from "./sticky-cta"
import { CtaLink } from "./cta-link"
import { mto } from "./utils"

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jenzeradvisory.com").replace(/\/$/, "")
const isAbsoluteUrl = (u?: string) => !!u && /^(https?:)?\/\//i.test(u)
const PREORDER_URL = process.env.NEXT_PUBLIC_E4X_PREORDER_URL || ""
const SHOW_PREORDER = Boolean(isAbsoluteUrl(PREORDER_URL))

const OG =
  process.env.NEXT_PUBLIC_E4X_OG_URL && /^(https?:)?\/\//.test(process.env.NEXT_PUBLIC_E4X_OG_URL)
    ? process.env.NEXT_PUBLIC_E4X_OG_URL!
    : `${SITE}/og/e4x`

export const metadata: Metadata = {
  title: "Engage for Excellence™ (E4X) | Jenzer Advisory",
  description:
    "A practical playbook for safer, faster, more reliable operations—by turning authentic engagement into daily routines.",
  alternates: { canonical: `${SITE}/e4x` },
  openGraph: {
    title: "Engage for Excellence™ (E4X) | Jenzer Advisory",
    description:
      "A practical playbook for safer, faster, more reliable operations—by turning authentic engagement into daily routines.",
    url: `${SITE}/e4x`,
    images: [{ url: OG, width: 1200, height: 630, alt: "E4X — Jenzer Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engage for Excellence™ (E4X) | Jenzer Advisory",
    description:
      "A practical playbook for safer, faster, more reliable operations—by turning authentic engagement into daily routines.",
    images: [OG],
  },
}

export default function E4XPage() {
  return (
    <main className="min-h-screen bg-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-white text-[color:var(--e4x-navy)] px-3 py-2 rounded-md shadow"
      >
        Skip to content
      </a>

      <StickyCTA showPreorder={SHOW_PREORDER} preorderUrl={PREORDER_URL} />

      <Script
        id="ld-e4x"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Engage for Excellence (E4X)",
            bookEdition: "First",
            isbn: ["978-3-9526392-0-7", "978-3-9526392-1-4", "978-3-9526392-2-1"],
            author: { "@type": "Person", name: "Dr. Gregor Jenzer" },
            publisher: { "@type": "Organization", name: "Jenzer Advisory" },
            inLanguage: "en",
            url: `${SITE}/e4x`,
            workExample: SHOW_PREORDER ? [{ "@type": "Product", url: PREORDER_URL }] : undefined,
          }),
        }}
      />

      <Script
        id="ld-e4x-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jenzer Advisory",
            url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jenzeradvisory.com").replace(/\/$/, ""),
          }),
        }}
      />

      <Script
        id="ld-e4x-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jenzeradvisory.com").replace(/\/$/, "") + "/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "E4X",
                item:
                  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jenzeradvisory.com").replace(/\/$/, "") + "/e4x",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section id="hero" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, rgba(10,22,40,0.06) 0%, rgba(10,22,40,0) 60%)",
            maskImage: "radial-gradient(75% 55% at 70% 20%, black 40%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            background:
              "repeating-linear-gradient(45deg, var(--e4x-navy), var(--e4x-navy) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(-45deg, var(--e4x-navy), var(--e4x-navy) 1px, transparent 1px, transparent 18px)",
          }}
        />
        <div id="content" className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-widest text-slate-500">
                <span className="rounded-full border px-2 py-0.5 border-[color:var(--e4x-silver)]/60 transition-colors hover:bg-[color:var(--e4x-silver)]/25">
                  ADIPEC 2025
                </span>{" "}
                • Presentation
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-[color:var(--e4x-navy)] md:text-5xl lg:text-6xl text-balance">
                <span className="font-extrabold tracking-tight">Engage</span>
                <span className="italic font-light mx-1">for</span>
                <span className="font-extrabold tracking-tight">Excellence</span>™ (E4X)
              </h1>
              {/* Subtitle (two lines) */}
              <div className="text-slate-700 text-lg md:text-xl leading-relaxed">
                <span className="block">A Practical Leadership Playbook for High-Hazard Industries</span>
                <span className="block">Driving Safety, Reliability, and Purpose through Authentic Engagement</span>
              </div>

              {/* Tagline / hook */}
              <p
                className="mt-4 text-slate-600 italic leading-relaxed border-l-4 pl-4"
                style={{ borderColor: "var(--e4x-gold, #caa86a)" }}
              >
                What if the key to safer, more reliable operations isn't another rule—but the way leaders show up?
              </p>
              <div className="hidden sm:flex gap-4 text-sm text-slate-600">
                <a href="#whats-inside" className="hover:text-[#0a1628] underline-offset-2 hover:underline">
                  What's inside
                </a>
                <a href="#about" className="hover:text-[#0a1628] underline-offset-2 hover:underline">
                  About the book
                </a>
                <CtaLink href="/e4x/pilot-kit" className="hover:text-[#0a1628] underline-offset-2 hover:underline">
                  Pilot Kit
                </CtaLink>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaLink
                href="/e4x/pilot-kit"
                className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--e4x-navy)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1a2638] focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Get the Pilot Kit
              </CtaLink>

              {SHOW_PREORDER ? (
                <a
                  href={PREORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order Engage for Excellence on Amazon (opens in a new tab)"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--e4x-navy)] bg-white px-8 py-4 text-base font-semibold text-[color:var(--e4x-navy)] transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
                >
                  Order on Amazon
                </a>
              ) : (
                <a
                  href={mto(
                    "E4X | Launch updates",
                    "Hi Gregor,\n\nPlease add me to E4X launch updates.\n\nName:\nOrganization:\nRole:\nLinkedIn (optional):\n",
                  )}
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--e4x-navy)] bg-white px-8 py-4 text-base font-semibold text-[color:var(--e4x-navy)] transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
                >
                  Get launch updates
                </a>
              )}

              <a
                href={mto(
                  "E4X | Intro call request",
                  "Hi Gregor,\n\nI'd like to speak about E4X. A quick intro call would be great.\n\nName:\nOrganization:\nRole:\nPhone/WhatsApp:\nTime zone:\nContext/goal in one line:\n",
                )}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--e4x-navy)] bg-white px-8 py-4 text-base font-semibold text-[color:var(--e4x-navy)] transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Speak with Gregor
              </a>
            </div>
          </div>

          {/* Right: Book Cover */}
          <div className="flex flex-col items-center gap-3 lg:items-end">
            <div className="relative w-full max-w-md aspect-[2/3] rounded-2xl shadow-2xl overflow-hidden bg-white">
              <Image
                src="/images/engage-cover-v3.jpg"
                alt="Engage for Excellence (E4X) book cover by Dr. Gregor Jenzer"
                fill
                className="object-top object-cover"
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
            <p className="text-sm text-slate-500">By Dr. Gregor Jenzer • Jenzer Advisory</p>
          </div>
        </div>
      </section>

      {/* What's Inside E4X */}
      <section id="whats-inside" className="bg-slate-50 border-y border-[color:var(--e4x-silver)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[color:var(--e4x-navy)] md:text-4xl">
                What's Inside E4X
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
                Three interconnected pillars that transform engagement from abstract concept into concrete daily
                practice.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Pillar 1 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg space-y-4">
                <h3 className="text-xl font-bold text-[color:var(--e4x-navy)]">People & Culture</h3>
                <p className="text-slate-600 leading-relaxed">
                  No-blame culture with fair accountability; leaders show up off-shift and listen.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg space-y-4">
                <h3 className="text-xl font-bold text-[color:var(--e4x-navy)]">Systems & Discipline</h3>
                <p className="text-slate-600 leading-relaxed">4W transparency, weekly cadence, owners & dates.</p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg space-y-4">
                <h3 className="text-xl font-bold text-[color:var(--e4x-navy)]">Purpose & Alignment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Connect daily tasks to mission; recognize effort; link engagement to outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section id="about" className="bg-white py-16 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--e4x-navy)]">About the Book</h2>
            <p className="text-slate-700 leading-relaxed">
              In <em>Engage for Excellence (E4X)</em>, Dr. Gregor Jenzer shows how authentic leadership
              behaviors—visibility, transparency, and fair accountability—become the strongest safety barrier in
              high-hazard industries.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Drawing on two decades leading refineries, gas plants, and megaprojects across Europe and the Middle East,
              E4X blends people-focused leadership with disciplined operational practices to cut incidents, reduce
              downtime, and build sustainable engagement.
            </p>
            <p className="text-slate-700 leading-relaxed">
              It's a practical playbook for leaders at every level—from supervisors to boards—to turn "soft" engagement
              into hard outcomes: fewer incidents, stronger reliability, and more resilient teams.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Six Core Behaviors that transform silence into candid reporting.",
                "Nine E4X Cards—practical routines that embed trust, discipline, and purpose.",
                "Field-tested stories from midnight near-misses to high-stakes turnarounds.",
                "A phased roadmap that builds sustainable culture change.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-[color:var(--e4x-navy)]" aria-hidden="true">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/downloads/e4x-sample-chapter.pdf"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--e4x-navy)] px-6 py-3 font-semibold text-[color:var(--e4x-navy)] hover:bg-slate-50 transition-all focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Download sample chapter
              </a>
              <a
                href={mto(
                  "E4X | Launch updates",
                  "Hi Gregor,\n\nPlease add me to E4X launch updates.\n\nName:\nOrganization:\nRole:\nLinkedIn (optional):\n",
                )}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--e4x-navy)] px-6 py-3 font-semibold text-[color:var(--e4x-navy)] hover:bg-slate-50 transition-all focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Get launch updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Cards Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Dark-Corners Visits — leaders show up",
                "4W Near-Miss Log — Who/What/When/Where",
                "Link Tasks to Purpose — why today matters",
                "Tough-Love Accountability — fair & firm",
                "Know Legal Duty — roles & consequences",
                "Daily Micro-Actions — tiny daily habits",
                "Serve First — remove friction",
                "Weekly Threats & Opportunities Review — owners & dates",
                "Measure: Engage → Outcome — lead & lag",
              ].map((card, index) => (
                <CtaLink
                  key={index}
                  href={`/e4x/pilot-kit?from=card-${index + 1}`}
                  data-analytics={`card-${index + 1}`}
                  className="rounded-2xl border-2 border-[color:var(--e4x-silver)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[color:var(--e4x-navy)]/20 block"
                >
                  <p className="font-semibold text-[color:var(--e4x-navy)] leading-relaxed">{card}</p>
                </CtaLink>
              ))}
            </div>

            {/* CTA Strip */}
            <div className="flex flex-col gap-4 items-center justify-center pt-8 sm:flex-row">
              <CtaLink
                href="/e4x/pilot-kit"
                className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--e4x-navy)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1a2638] focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Try 2 cards this month — get the Pilot Kit
              </CtaLink>
              <a
                href={mto(
                  "E4X | Training & briefing inquiry",
                  "Hi Gregor,\n\nI'm interested in E4X training / briefings.\n\nName:\nOrganization:\nRole:\nAudience size & seniority:\nPreferred format (60–90 min / half-day / full-day / virtual):\nTarget dates:\nLocation:\n",
                )}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--e4x-navy)] bg-white px-8 py-4 text-base font-semibold text-[color:var(--e4x-navy)] transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Ask about training & briefings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Credibility Band */}
      <section
        id="testimonials"
        className="bg-white border-y py-16 md:py-24"
        style={{ borderColor: "color-mix(in oklab, var(--e4x-silver) 60%, transparent)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--e4x-navy)]">What leaders say about E4X</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Field-tested perspectives from senior operators and reliability leaders.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                quote:
                  "'Leading by learning'—I saw Gregor turn steep challenges into better performance on complex units. E4X distills that journey into a systematic method to run safer, more reliable, purpose-driven operations.",
                author: "Stijn van Els",
                role: "Senior energy executive (Shell, Port of Rotterdam, HyCC, EVOS, TenneT)",
              },
              {
                quote:
                  "E4X turns lofty engagement talk into habits that stick on the night shift—exactly what keeps high-hazard assets safe and reliable.",
                author: "Tor Arnesen",
                role: "Former Managing Director Shell Norway; Chair PeoplewithE and multiple energy boards",
              },
              {
                quote:
                  "E4X provides the practical handrails that can turn your asset truly into an asset of the future—by your people, for your people.",
                author: "Hein Tils",
                role: "Creator of Shell's Asset-of-the-Future model; former GM Future Assets, Shell",
              },
              {
                quote:
                  "Reliability is the cornerstone of safe operations and growth. An approach like E4X addresses equipment and people reliability in a holistic way.",
                author: "Stefan Irrgang",
                role: "Former Global Process Owner Asset Integrity & Reliability, Shell",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1"
                style={{
                  borderColor: "transparent",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  WebkitBoxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  outline: "1px solid color-mix(in oklab, var(--e4x-silver) 40%, transparent)",
                }}
              >
                <blockquote className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block text-2xl leading-none"
                      style={{ color: "var(--e4x-gold)" }}
                    >
                      "
                    </span>
                    <p className="text-[color:var(--e4x-ink)] text-base md:text-lg leading-relaxed">{t.quote}</p>
                  </div>
                </blockquote>
                <figcaption className="mt-4">
                  <div className="font-semibold text-[color:var(--e4x-navy)]">{t.author}</div>
                  <div className="text-sm text-slate-600">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--e4x-navy)] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-1 rounded-2xl overflow-hidden border border-[color:var(--e4x-silver)] bg-white shadow-sm">
            {/* FAQ Item 1 */}
            <div className="border-b border-[color:var(--e4x-silver)] last:border-b-0 p-6">
              <h3 className="font-semibold text-[color:var(--e4x-navy)] mb-2">Formats & availability</h3>
              <p className="text-slate-700 leading-relaxed">
                Hardcover, paperback, eBook, audiobook. Pre-order opens soon; shipping via Amazon KDP / IngramSpark.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-[color:var(--e4x-silver)] last:border-b-0 p-6">
              <h3 className="font-semibold text-[color:var(--e4x-navy)] mb-2">Who is E4X for?</h3>
              <p className="text-slate-700 leading-relaxed">
                Leaders in high-hazard and capital-intensive industries; consultants and trainers.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-[color:var(--e4x-silver)] last:border-b-0 p-6">
              <h3 className="font-semibold text-[color:var(--e4x-navy)] mb-2">Can we run a pilot?</h3>
              <p className="text-slate-700 leading-relaxed">
                Yes—90-day pilot available.{" "}
                <a
                  href="/contact?topic=e4x-pilot"
                  className="text-[color:var(--e4x-navy)] font-semibold underline underline-offset-2 hover:text-[#1a2638] transition-colors"
                >
                  Contact us to get started
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div
            className="rounded-2xl bg-white shadow-lg overflow-hidden"
            style={{
              borderTop: "2px solid var(--e4x-gold)",
            }}
          >
            <div className="grid gap-8 md:grid-cols-[280px_1fr] p-8 md:p-10">
              {/* Left: Headshot */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/photo-gregor-jenzer.jpg"
                    alt="Dr. Gregor Jenzer"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 256px, 280px"
                  />
                </div>
              </div>

              {/* Right: Bio Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--e4x-navy)]">About the Author</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Dr. Gregor Jenzer is a leadership advisor specializing in safety, reliability, and operational
                    excellence in high-hazard industries. With over two decades of experience leading complex energy
                    assets and transformation programs, he has helped organizations turn engagement from abstract
                    concept into measurable performance improvement.
                  </p>
                  <p>
                    His work spans upstream oil & gas, refining, chemicals, and renewables—from the North Sea to the
                    Middle East. Gregor holds a PhD in Chemical Engineering and an EMBA-Global from London Business
                    School & Columbia Business School, and serves on multiple energy and technology boards. E4X distills
                    his field-tested methods into a practical playbook that works on the night shift.
                  </p>
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={mto(
                      "E4X | Intro call request",
                      "Hi Gregor,\n\nI'd like to speak about E4X. A quick intro call would be great.\n\nName:\nOrganization:\nRole:\nPhone/WhatsApp:\nTime zone:\nContext/goal in one line:\n",
                    )}
                    className="inline-flex items-center justify-center rounded-xl bg-[color:var(--e4x-navy)] px-6 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-[#1a2638] focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
                  >
                    Speak with Gregor
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gregor-jenzer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[color:var(--e4x-navy)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--e4x-navy)] transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA Band */}
      <section className="bg-[color:var(--e4x-navy)] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="space-y-8 before:block before:h-[2px] before:bg-[color:var(--e4x-gold)] before:rounded-full before:mb-4 before:mx-auto before:w-16">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
              Make engagement your strongest safety barrier.
            </h2>

            <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
              <CtaLink
                href="/e4x/pilot-kit"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[color:var(--e4x-navy)] shadow-lg transition-all hover:bg-[#1a2638] focus:outline-none focus:ring-4 focus:ring-[color:var(--e4x-navy)]/50"
              >
                Get the Pilot Kit
              </CtaLink>

              {SHOW_PREORDER ? (
                <a
                  href={PREORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order Engage for Excellence on Amazon (opens in a new tab)"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  Order on Amazon
                </a>
              ) : (
                <a
                  href={mto(
                    "E4X | Launch updates",
                    "Hi Gregor,\n\nPlease add me to E4X launch updates.\n\nName:\nOrganization:\nRole:\nLinkedIn (optional):\n",
                  )}
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  Get launch updates
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
