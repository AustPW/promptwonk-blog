import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "PromptWonk Blog";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsl(69,0%,5%)",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
          padding: "60px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "rgba(20, 184, 166, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            âš¡
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "hsl(210,26%,96%)",
            }}
          >
            PromptWonk
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 40 ? "48px" : "56px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Bottom tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "40px",
            fontSize: "20px",
            color: "hsl(221,91%,68%)",
          }}
        >
          blog.promptwonk.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
