import { ImageResponse } from "next/og";
import { getEssay } from "@/lib/writing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  const title = essay?.title ?? "Hexakin";
  const kicker = essay?.kicker ?? "Essay";
  const dek = essay?.dek ?? "Games writing from Hexakin. Building on the side.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0A0C",
          color: "#F4F1E9",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C4A574",
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#8C8B84",
            lineHeight: 1.4,
          }}
        >
          {dek}
        </div>
      </div>
    ),
    size,
  );
}
