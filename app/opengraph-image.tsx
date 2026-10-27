import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Convolift - Reddit Marketing, Done Right";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0F",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top Header / Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Logo Mark */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "#14141A",
              border: "2px solid #FF4500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#FF4500",
                borderRadius: "8px",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: "38px", fontWeight: 900, color: "#FFFFFF" }}>
              Convo
            </span>
            <span style={{ fontSize: "38px", fontWeight: 900, color: "#FF4500" }}>
              lift
            </span>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: "#FF4500",
                marginLeft: "4px",
                marginBottom: "8px",
              }}
            />
          </div>

          <div
            style={{
              marginLeft: "24px",
              padding: "6px 14px",
              backgroundColor: "#14141A",
              border: "1px solid #22222E",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#9CA3AF",
              letterSpacing: "0.08em",
            }}
          >
            REDDIT MARKETING &amp; EARN
          </div>
        </div>

        {/* Center Main Message */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#FF4500",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            REDDIT MARKETING, DONE RIGHT
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Get your brand <span style={{ color: "#FF4500" }}>noticed &amp; discussed</span> on Reddit.
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #22222E",
            paddingTop: "28px",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>
            convolift.com
          </div>
          <div style={{ fontSize: "18px", fontWeight: 600, color: "#9CA3AF" }}>
            For Brands &bull; For Earners
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
