import { ImageResponse } from "next/og";
import { SITE_HUB, SITE_LINE, SITE_NAME } from "@/lib/site";

export const alt = "HEXAKIN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050505",
          color: "#F4F1E9",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -4,
            color: "#A8A49A",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#F4F1E9",
          }}
        >
          {SITE_LINE}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 18,
            color: "#A8A49A",
          }}
        >
          {SITE_HUB}
        </div>
      </div>
    ),
    size,
  );
}
