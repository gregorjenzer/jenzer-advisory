import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"
import { mto } from "../utils"

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jenzeradvisory.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "E4X Pilot Kit | Jenzer Advisory",
  description:
    "Download the E4X Pilot Kit with practical tools and templates to drive engagement excellence in your organization.",
  alternates: {
    canonical: `${SITE}/e4x/pilot-kit`,
  },
  openGraph: {
    title: "E4X Pilot Kit | Jenzer Advisory",
    description:
      "Download the E4X Pilot Kit with practical tools and templates to drive engagement excellence in your organization.",
    url: `${SITE}/e4x/pilot-kit`,
    siteName: "Jenzer Advisory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E4X Pilot Kit | Jenzer Advisory",
    description:
      "Download the E4X Pilot Kit with practical tools and templates to drive engagement excellence in your organization.",
  },
}

const downloads = [
  {
    title: "4W Near-Miss & Risk Log",
    description:
      "4-week bow-tie style log to capture weak signals early, assign owners & dates, and close actions fast",
    href: "/downloads/e4x-4w-log.pdf",
  },
  {
    title: "Dark-Corners Visits Guide",
    description:
      "Show up off-shift, ask three honest questions, fix one thing fast—build trust and surface risks early",
    href: "/downloads/e4x-dark-corners.pdf",
  },
  {
    title: "Weekly Threats & Opportunities Review",
    description:
      "30-60 minute forum to keep hazards visible, assign proportionate actions, and close the loop before risks escalate",
    href: "/downloads/e4x-weekly-tor.pdf",
  },
  {
    title: "E4X Quick Start Guide",
    description: "Launch a 4-week micro-pilot with Dark-Corners visits, 4W logs, and purpose lines—prove value quickly",
    href: "/downloads/e4x-quick-start.pdf",
  },
  {
    title: "Pulse Mini Survey",
    description: "1-2 minute, 5-question pulse to track trust, voice, discipline, purpose, and recognition—run monthly",
    href: "/downloads/e4x-pulse-mini.pdf",
  },
]

export default function PilotKitPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back link */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/e4x"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#0a1628] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to E4X
        </Link>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#0a1628] sm:text-5xl lg:text-6xl">E4X Pilot Kit</h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Download practical tools and templates to launch your Engage for Excellence pilot and start driving measurable
          improvements in safety, reliability, and purpose.
        </p>
      </div>

      {/* Downloads section */}
      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {downloads.map((download, index) => (
            <a
              key={index}
              href={download.href}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#0a1628]/20 focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:ring-offset-2"
              download
            >
              <div className="flex-shrink-0 rounded-lg bg-slate-50 p-3 group-hover:bg-[#0a1628]/5 transition-colors">
                <FileText className="h-6 w-6 text-[#0a1628]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-[#0a1628] group-hover:text-[#0a1628]/80 transition-colors">
                  {download.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{download.description}</p>
              </div>
              <div className="flex-shrink-0">
                <Download className="h-5 w-5 text-slate-400 group-hover:text-[#0a1628] transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0a1628] sm:text-3xl">Ready to launch your pilot?</h2>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
            Work with Dr. Jenzer and his team to implement a customized 90-day E4X pilot in your organization.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={mto(
                "E4X | 90-day pilot request",
                "Hi Gregor,\n\nWe'd like to explore an E4X 90-day pilot.\n\nName:\nOrganization:\nRole:\nSite/asset:\nTeam size:\nObjectives (safety/reliability/engagement):\nEarliest start date:\nLocation & time zone:\n",
              )}
              className="inline-flex items-center justify-center rounded-full bg-[#0a1628] px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0a1628]/90 focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:ring-offset-2 transition-all"
            >
              Request a 90-day pilot
            </a>
            <a
              href={mto(
                "E4X | Launch updates",
                "Hi Gregor,\n\nPlease add me to E4X launch updates.\n\nName:\nOrganization:\nRole:\nLinkedIn (optional):\n",
              )}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#0a1628] bg-white px-8 py-3 text-base font-semibold text-[#0a1628] hover:bg-[#0a1628] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:ring-offset-2 transition-all"
            >
              Get book updates
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
