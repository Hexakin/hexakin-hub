import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "hexakin.com" }],
        destination: "https://www.hexakin.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
