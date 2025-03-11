import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate input fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedData = {
      name: data.name.trim(),
      company: data.company ? data.company.trim() : "Not provided",
      email: data.email.trim(),
      message: data.message.trim(),
    }

    // Send email via Resend
    const response = await resend.emails.send({
      from: "no-reply@jenzeradvisory.com",
      to: "gregor@jenzeradvisory.com",
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      text: `
        Name: ${sanitizedData.name}
        Company: ${sanitizedData.company}
        Email: ${sanitizedData.email}
        Message: ${sanitizedData.message}
      `,
    })

    if (response.error) {
      console.error("Resend email error:", response.error)
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 })
  }
}

