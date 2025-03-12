import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Here you would typically integrate with your email service
    // For example, using SendGrid, Postmark, or similar

    // Send to specified email
    const emailData = {
      to: "gregor@jenzeradvisory.com",
      from: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Message: ${data.message}
      `,
    }

    // For now, we'll just log the data
    console.log("Contact form submission:", emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

