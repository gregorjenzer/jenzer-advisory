import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  try {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #172b4a 60%, #0a1628 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Decorative dots pattern */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            right: "80px",
            height: "200px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            opacity: 0.3,
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
                borderRadius: "50%",
                backgroundColor: "white",
                opacity: 0.6 - (i / 40) * 0.4,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: "300",
              color: "white",
              letterSpacing: "0.1em",
              marginBottom: "20px",
            }}
          >
            DR. GREGOR JENZER
          </div>

          <div
            style={{
              fontSize: "120px",
              fontWeight: "900",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "10px",
              letterSpacing: "-0.02em",
            }}
          >
            ENGAGE
          </div>

          <div
            style={{
              fontSize: "80px",
              fontWeight: "300",
              fontStyle: "italic",
              color: "white",
              marginBottom: "10px",
            }}
          >
            for
          </div>

          <div
            style={{
              fontSize: "120px",
              fontWeight: "900",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "40px",
              letterSpacing: "-0.02em",
            }}
          >
            EXCELLENCE
          </div>

          <div
            style={{
              height: "2px",
              width: "70%",
              background: "#caa86a",
              margin: "24px auto 0",
            }}
          />

          <div
            style={{
              fontSize: "32px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "900px",
              lineHeight: 1.4,
              marginTop: "40px",
            }}
          >
            A Practical Leadership Playbook for High-Hazard Industries
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            fontSize: "28px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          jenzeradvisory.com/e4x
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: unknown) {
    console.error("Failed to generate OG image:", e)
    return new Response("Failed to generate image", { status: 500 })
  }
}
