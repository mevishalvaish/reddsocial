import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ReddSocial - Be Part of the Conversation";
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
          backgroundColor: "#FFFFFF",
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
              backgroundColor: "#FFF0E9",
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
            <span style={{ fontSize: "38px", fontWeight: 800, color: "#1A1A1B" }}>
              Redd
            </span>
            <span style={{ fontSize: "38px", fontWeight: 800, color: "#FF4500" }}>
              Social
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
              backgroundColor: "#F6F7F8",
              border: "1px solid #EDEFF1",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#576F76",
              letterSpacing: "0.08em",
            }}
          >
            COMING SOON
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
            Reddit Marketing &amp; Community Growth
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#1A1A1B",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Big Ideas Start With{" "}
            <span style={{ color: "#FF4500" }}>Real Conversations.</span>
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #EDEFF1",
            paddingTop: "28px",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 600, color: "#576F76" }}>
            reddsocial.com
          </div>
          <div style={{ fontSize: "18px", fontWeight: 500, color: "#576F76" }}>
            Be Part of the Conversation.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
