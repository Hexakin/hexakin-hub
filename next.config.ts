import type { NextConfig } from "next";

// Keep Vercel Live / feedback toolbar off this public hub (prod and preview).
const skipToolbar = {
  key: "x-vercel-skip-toolbar",
  value: "1",
} as const;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [skipToolbar],
      },
    ];
  },
};

export default nextConfig;
