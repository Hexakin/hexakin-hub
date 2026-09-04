import type { NextConfig } from "next";
import { SKIP_TOOLBAR_HEADERS } from "./lib/no-vercel-chrome";

const nextConfig: NextConfig = {
  env: {
    VERCEL_PREVIEW_FEEDBACK_ENABLED: "0",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...SKIP_TOOLBAR_HEADERS],
      },
    ];
  },
};

export default nextConfig;
