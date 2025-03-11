import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "25+ Years of Leadership in Energy & Industrial Operations | Jenzer Advisory",
  description:
    "Hard-won leadership lessons from decades of solving complex operational challenges in energy and industrial sectors.",
  openGraph: {
    title: "25+ Years of Leadership in Energy & Industrial Operations | Jenzer Advisory",
    description:
      "Hard-won leadership lessons from decades of solving complex operational challenges in energy and industrial sectors.",
    url: "https://jenzeradvisory.com/insights/leadership-lessons",
    siteName: "Jenzer Advisory FZ-LLC",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unknown-2-jzQYZL9nvltUXFIY1hMVwB7sMGDgCD.png",
        width: 1200,
        height: 630,
        alt: "Leadership Lessons in Energy and Industrial Operations",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2023-09-05T00:00:00Z",
    authors: ["Dr. Gregor Jenzer"],
  },
}

export default function LeadershipArticle() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl py-12 px-4 md:px-6">
        <Button variant="ghost" size="sm" asChild className="mb-8 hover:bg-transparent hover:text-accent">
          <Link href="/#insights" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
        </Button>

        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground bg-accent/10 px-3 py-1 rounded-full">Leadership</span>
            <span className="text-xs text-muted-foreground">By Dr. Gregor Jenzer | 5-Minute Read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            25+ Years of Leadership: Hard-Won Lessons in Energy & Industrial Operations
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Insights from Decades of Solving Complex Operational Challenges
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-bold">Introduction</h3>
          <p>
            Leadership in industrial operations is not about titles, it's about delivering measurable results, building
            resilient teams, and driving change. Over my 25+ years in asset-intensive industries, I've led operations
            across oil & gas, petrochemicals, and power generation, solving critical challenges in efficiency, safety,
            and performance optimization. Here are my top leadership lessons.
          </p>

          <h3 className="text-xl font-bold">1. People Drive Performance, Not Just Processes</h3>
          <p>
            Technology and systems matter, but people are the core drivers of operational success. The best-performing
            teams I've led shared three key traits:
          </p>
          <ul>
            <li>Clear ownership and accountability: Everyone understands their role in delivering results.</li>
            <li>High engagement levels: Employees feel empowered to contribute to improvements.</li>
            <li>Embedded safety culture: Proactive risk awareness leads to fewer incidents.</li>
          </ul>
          <p>
            At Rheinland Refinery, I led a transformation that moved the Employee Engagement Score from the bottom
            quartile to the top, driving significant operational gains.
          </p>

          <h3 className="text-xl font-bold">2. Crisis Management: Decisiveness & Communication Are Key</h3>
          <p>In high-risk industries, delays in decision-making cost millions. Effective leaders:</p>
          <ul>
            <li>Avoid analysis paralysis: Make data-backed decisions with confidence.</li>
            <li>Communicate with clarity: Transparency ensures team alignment during crises.</li>
            <li>Adapt quickly: Pivot strategies when new data emerges.</li>
          </ul>
          <p>
            At two refineries in the Middle East, I led a refinery-wide initiative that reduced incidents by 50% and cut
            production losses by 75%, demonstrating the power of engaged leadership.
          </p>

          <h3 className="text-xl font-bold">3. Change Management: Leading Through Resistance</h3>
          <p>Organizational change is often met with skepticism. To drive lasting improvements:</p>
          <ul>
            <li>Secure buy-in early: Engage key stakeholders from the start.</li>
            <li>Lead by example: Senior management must actively support initiatives.</li>
            <li>Deliver quick wins: Small, visible successes build momentum.</li>
          </ul>

          <h3 className="text-xl font-bold">4. The Future of Leadership in Industrial Operations</h3>
          <p>
            Future leaders must combine deep industry knowledge with adaptability, emotional intelligence, and digital
            acumen. The energy sector is changing, and leaders must evolve with it.
          </p>

          <div className="bg-accent/10 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-bold mb-2">Facing leadership or operational challenges?</h4>
            <p className="mb-4">
              Jenzer Advisory FZ-LLC provides strategic leadership guidance and transformation support.
            </p>
            <Button asChild className="bg-accent text-navy hover:bg-gold-dark">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

