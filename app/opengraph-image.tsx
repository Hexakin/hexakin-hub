import { ImageResponse } from "next/og";
import { SITE_LINE, SITE_NAME } from "@/lib/site";

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
          background: "#000000",
          color: "#F4F1E9",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 10,
            color: "#CDCAC1",
          }}
        >
          XX
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: 8,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#CDCAC1",
          }}
        >
          {SITE_LINE}
        </div>
      </div>
    ),
    size,
  );
}
