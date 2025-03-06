"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Factory,
  HardHat,
  Pipette,
  Power,
  CheckCircle,
  Lightbulb,
  BookOpen,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("operational")
  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  // Animation observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ status: "submitting", message: "Sending your message..." })

    const formData = new FormData(e.currentTarget)
    const formValues = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setFormStatus({
        status: "success",
        message: "Thank you! Your message has been sent successfully.",
      })

      // Reset form
      ;(e.target as HTMLFormElement).reset()

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ status: "idle", message: "" })
      }, 5000)
    } catch (error) {
      setFormStatus({
        status: "error",
        message: error instanceof Error ? error.message : "An unexpected error occurred",
      })

      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus({ status: "idle", message: "" })
      }, 5000)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-cpAomO0Usp3ARkQrhNQzGVFHg8YvLd.png"
              alt="Jenzer Advisory Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="#industries" className="text-sm font-medium hover:text-accent transition-colors">
              Industries
            </Link>
            <Link href="#results" className="text-sm font-medium hover:text-accent transition-colors">
              Results
            </Link>
            <Link href="#insights" className="text-sm font-medium hover:text-accent transition-colors">
              Insights
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-gold-dark">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-36 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6 reveal">
                <div className="space-y-4">
                  <div className="w-20 h-1 bg-accent"></div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Driving Operational Excellence & Asset Performance Across Energy & Industry
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Helping Energy & Industrial Leaders Maximize Efficiency, Minimize Risk, and Improve Performance.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg" className="bg-accent text-navy hover:bg-gold-dark">
                    <Link href="#contact">
                      Book a Strategy Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                    <Link href="#services">Explore Our Solutions</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal">
                <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unknown-4-z0776WKa5B2i28szyxdplpOBIa9cCy.png"
                    width={800}
                    height={600}
                    alt="Modern industrial facility with advanced control systems"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal">
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Industry Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Global Regions Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Core Service Areas</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client-Focused Solutions</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 max-w-3xl mx-auto text-center md:text-left md:mx-0 reveal">
              <div className="space-y-2">
                <div className="w-20 h-1 bg-accent mx-auto md:mx-0"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Specialized Consulting Solutions
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  We deliver expert advisory services tailored to the unique challenges of asset-intensive industries.
                </p>
              </div>
            </div>

            <Tabs defaultValue="operational" className="mt-12">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
                <TabsTrigger value="operational">Operational Efficiency</TabsTrigger>
                <TabsTrigger value="asset">Asset Performance</TabsTrigger>
                <TabsTrigger value="risk">Risk Mitigation</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
              </TabsList>
              <TabsContent value="operational" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Operational Efficiency & Continuous Improvement</CardTitle>
                    <CardDescription>
                      Transform your operations with proven methodologies and cutting-edge technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Lean & Six Sigma Implementation</span>
                          <p className="text-sm text-muted-foreground">
                            Streamline processes, eliminate waste, and drive continuous improvement
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Digital Transformation</span>
                          <p className="text-sm text-muted-foreground">
                            Leverage AI, automation, and data analytics to optimize operations
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Performance Metrics & KPIs</span>
                          <p className="text-sm text-muted-foreground">
                            Implement robust measurement systems aligned with industry benchmarks
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="asset" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Maximizing Asset Performance & Reliability</CardTitle>
                    <CardDescription>
                      Optimize asset lifecycle and reliability through data-driven strategies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Reliability-Centered Maintenance</span>
                          <p className="text-sm text-muted-foreground">
                            Implement predictive maintenance strategies using advanced analytics
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Asset Lifecycle Optimization</span>
                          <p className="text-sm text-muted-foreground">
                            Maximize return on assets through strategic maintenance and upgrades
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Performance Monitoring</span>
                          <p className="text-sm text-muted-foreground">
                            Real-time monitoring and optimization of asset performance
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="risk" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Proactive Risk Mitigation & Compliance</CardTitle>
                    <CardDescription>
                      Protect your operations with comprehensive risk management strategies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Risk Assessment & Management</span>
                          <p className="text-sm text-muted-foreground">
                            Identify and mitigate operational risks before they impact performance
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Compliance & Safety</span>
                          <p className="text-sm text-muted-foreground">
                            Ensure adherence to industry regulations and safety standards
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Crisis Management</span>
                          <p className="text-sm text-muted-foreground">
                            Develop robust contingency plans and response strategies
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="leadership" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Leadership for Critical Transitions & Growth</CardTitle>
                    <CardDescription>Guide your organization through transformational change</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Change Management</span>
                          <p className="text-sm text-muted-foreground">
                            Lead successful organizational transformations
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Interim Leadership</span>
                          <p className="text-sm text-muted-foreground">
                            Provide experienced leadership during critical transitions
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <span className="font-medium">Strategic Advisory</span>
                          <p className="text-sm text-muted-foreground">
                            Guide strategic decision-making and growth initiatives
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Not sure which service fits? Let's discuss your specific needs.
              </p>
              <Button asChild className="bg-accent text-navy hover:bg-gold-dark">
                <Link href="#contact">
                  Request a Custom Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-20 md:py-28 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6 reveal">
                <div className="space-y-4">
                  <div className="w-20 h-1 bg-accent"></div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Deep Expertise in Industrial Operations
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Founded by Dr. Gregor Jenzer, a recognized leader in operational excellence, Jenzer Advisory FZ-LLC
                    brings 25+ years of global expertise in asset-intensive industries.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    With a background in strategy at McKinsey and over two decades of leadership at Shell, Dr. Jenzer
                    combines high-level vision with real-world execution.
                  </p>
                  <p className="text-muted-foreground">
                    Beyond optimizing operations, we help leaders engage their workforce, ensuring sustainable,
                    high-performance cultures.
                  </p>
                  <p className="text-muted-foreground">
                    Based in the UAE's RAKEZ Free Zone, we provide high-impact consulting for companies looking to
                    improve performance, optimize processes, and mitigate operational risks.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                  <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <Link href="#industries">Our Industries</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal">
                <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-md">
                  <div className="grid gap-6">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CV%20photo%20Gregor%20Jenzer.jpg-FNrjw4cGv99ERLWDqQrP5miidSVeBl.jpeg"
                      width={400}
                      height={400}
                      alt="Dr. Gregor Jenzer - Founder & Managing Director"
                      className="rounded-lg"
                    />
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unknown-2-jzQYZL9nvltUXFIY1hMVwB7sMGDgCD.png"
                      width={800}
                      height={600}
                      alt="Executive meeting room overlooking industrial facilities"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="w-full py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 max-w-3xl mx-auto text-center md:text-left md:mx-0 reveal">
              <div className="space-y-2">
                <div className="w-20 h-1 bg-accent mx-auto md:mx-0"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Specialized in Asset-Intensive Sectors
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our expertise is tailored to the unique challenges of energy, industrial, and infrastructure sectors.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="flex flex-col items-center text-center space-y-4 p-8 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 reveal">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center">
                  <HardHat className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Oil & Gas</h3>
                <p className="text-muted-foreground">
                  Optimizing upstream, midstream, and downstream operations with proven frameworks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 reveal">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center">
                  <Pipette className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Petrochemicals</h3>
                <p className="text-muted-foreground">
                  Enhancing efficiency and compliance for chemical processing & refining facilities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 reveal">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center">
                  <Power className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Power Generation</h3>
                <p className="text-muted-foreground">
                  Boosting reliability and operational resilience for utilities and independent producers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 reveal">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center">
                  <Factory className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Manufacturing</h3>
                <p className="text-muted-foreground">
                  Driving lean transformation, predictive maintenance, and process efficiency.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Need expertise in another industry? Let's talk.</p>
              <Button asChild className="bg-accent text-navy hover:bg-gold-dark">
                <Link href="#contact">
                  Discuss Your Industry Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-20 reveal">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Competitive Edge</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="font-bold text-lg mb-3 text-navy">Deep Industry Expertise</div>
                  <p className="text-muted-foreground">
                    25+ years driving operational excellence across energy, industrial, and infrastructure sectors.
                  </p>
                </div>
                <div className="p-6 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="font-bold text-lg mb-3 text-navy">Global Reach & Network</div>
                  <p className="text-muted-foreground">
                    Extensive connections with international best practices, regulatory bodies, and key industry
                    players.
                  </p>
                </div>
                <div className="p-6 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="font-bold text-lg mb-3 text-navy">Hands-On, Results-Driven Approach</div>
                  <p className="text-muted-foreground">
                    We don't just advise—we implement, optimize, and deliver measurable results.
                  </p>
                </div>
                <div className="p-6 border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="font-bold text-lg mb-3 text-navy">
                    Tailored Solutions, Not One-Size-Fits-All Consulting
                  </div>
                  <p className="text-muted-foreground">
                    Every solution is tailored, ensuring maximum impact and efficiency for your specific challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">See how our expertise delivers measurable impact.</p>
              <Button asChild className="bg-accent text-navy hover:bg-gold-dark">
                <Link href="#results">
                  Explore Our Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="results" className="w-full py-20 md:py-28 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto reveal">
              <div className="space-y-2">
                <div className="w-20 h-1 bg-accent mx-auto"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Proven Impact & Client Results
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our strategic interventions deliver measurable improvements across operations, assets, and risk
                  management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-navy-light p-8 rounded-md reveal">
                <div className="text-accent text-6xl font-bold mb-4">35%</div>
                <h3 className="text-2xl font-bold mb-3">Reduced Downtime</h3>
                <p className="text-muted-foreground mb-4">
                  Implemented reliability-centered maintenance program for a major oil refinery, reducing unplanned
                  downtime by 35 % within 6 months.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-muted-foreground">
                  "Jenzer Advisory helped us cut downtime by 35% within months—unparalleled expertise in asset
                  management!"
                  <footer className="mt-2 text-xs">— Operations Director, Major Refinery</footer>
                </blockquote>
              </div>

              <div className="bg-navy-light p-8 rounded-md reveal">
                <div className="text-accent text-6xl font-bold mb-4">$4.2M</div>
                <h3 className="text-2xl font-bold mb-3">Annual Savings</h3>
                <p className="text-muted-foreground mb-4">
                  Optimized maintenance strategies for a petrochemical plant, resulting in $4 .2M annual savings through
                  improved resource allocation.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-muted-foreground">
                  "The ROI was immediate. Their expertise in optimization strategies delivered beyond our expectations."
                  <footer className="mt-2 text-xs">— CFO, Petrochemical Company</footer>
                </blockquote>
              </div>

              <div className="bg-navy-light p-8 rounded-md reveal">
                <div className="text-accent text-6xl font-bold mb-4">40%</div>
                <h3 className="text-2xl font-bold mb-3">Safety Incident Reduction</h3>
                <p className="text-muted-foreground mb-4">
                  Implemented comprehensive risk management framework for a power generation facility, reducing safety
                  incidents by 40% .
                </p>
                <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-muted-foreground">
                  "Their risk management expertise transformed our safety culture and operational reliability."
                  <footer className="mt-2 text-xs">— HSE Manager, Power Generation Facility</footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Discover how we can achieve similar results for your business.
              </p>
              <Button asChild className="bg-accent text-navy hover:bg-gold-dark">
                <Link href="#contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="insights" className="w-full py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 max-w-3xl mx-auto text-center md:text-left md:mx-0 reveal">
              <div className="space-y-2">
                <div className="w-20 h-1 bg-accent mx-auto md:mx-0"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Industry Insights & Thought Leadership
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Expert perspectives on the latest trends and challenges in operational excellence and asset
                  management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden reveal">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unknown-3-YnHs1aI74Am0aRVoHN1JUtAdDZMBkj.png"
                    fill
                    alt="Modern control room with advanced monitoring systems"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Industry Trends</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    The Future of Operational Excellence in the Oil & Gas Sector
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Exploring how digital transformation, sustainability initiatives, and changing market dynamics are
                    reshaping operational strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">By Dr. Gregor Jenzer | 5-Minute Read</div>
                    <Link href="#" className="text-sm font-medium text-accent hover:underline flex items-center">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden reveal">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unknown-5-VDZNDHLXj57oXoAG8cZxwBhOwuxynH.png"
                    fill
                    alt="AI and industrial automation"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Technology</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    How AI & Predictive Analytics Are Revolutionizing Industrial Asset Management
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Examining the impact of artificial intelligence on predictive maintenance, asset lifecycle
                    optimization, and operational decision-making.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">By Dr. Gregor Jenzer | 5-Minute Read</div>
                    <Link href="#" className="text-sm font-medium text-accent hover:underline flex items-center">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-border/20 rounded-md bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden reveal">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unknown-2-jzQYZL9nvltUXFIY1hMVwB7sMGDgCD.png"
                    fill
                    alt="Industry expert speaking"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Leadership</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    25+ Years of Leadership: Hard-Won Lessons in Energy & Industrial Operations
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Dr. Gregor Jenzer shares critical insights and lessons learned from over two decades of solving
                    complex operational challenges.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">By Dr. Gregor Jenzer | 5-Minute Read</div>
                    <Link href="#" className="text-sm font-medium text-accent hover:underline flex items-center">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Stay ahead with expert insights —subscribe to our industry newsletter.
              </p>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy/5">
                <Link href="#">
                  Get Industry Updates
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-20 md:py-28 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6 reveal">
                <div className="space-y-4">
                  <div className="w-20 h-1 bg-accent"></div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Let's Drive Real Results for Your Business—Get in Touch Today
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Reach out to discuss how we can help you optimize performance, reduce risk, and improve efficiency.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Give us a call</p>
                      <a href="tel:+971506842410" className="text-sm text-muted-foreground hover:underline">
                        +971 50 684 2410
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Send us an email</p>
                      <a
                        href="mailto:gregor@jenzeradvisory.com"
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        gregor @jenzeradvisory.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Visit our location</p>
                      <a
                        href="https://maps.app.goo.gl/Xj95FESpXc8WqR2q6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        RAKEZ, United Arab Emirates
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center reveal">
                <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium leading-none">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  {formStatus.status !== "idle" && (
                    <div
                      className={`p-3 rounded-md ${
                        formStatus.status === "success"
                          ? "bg-green-100 text-green-800"
                          : formStatus.status === "error"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-accent text-navy hover:bg-gold-dark"
                    disabled={formStatus.status === "submitting"}
                  >
                    {formStatus.status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Prefer a direct conversation? Let's schedule a call.</p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#contact">
                  Book a Call Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6 md:py-8 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy {new Date().getFullYear()} Jenzer Advisory FZ - LLC. All rights reserved.
              </p>
            </div>
            <div className="text-center flex items-center justify-center gap-4">
              <Link
                href="https://www.linkedin.com/in/gregor-jenzer-a72a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/jenzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Jenzer Advisory – Trusted Partner in Industrial Excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

