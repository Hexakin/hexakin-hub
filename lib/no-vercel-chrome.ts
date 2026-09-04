export const SKIP_TOOLBAR_HEADERS = [
  { key: "x-vercel-skip-toolbar", value: "1" },
  {
    key: "Content-Security-Policy",
    value: [
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join("; "),
  },
] as const;

export const VERCEL_CHROME_SELECTOR = [
  "vercel-live-feedback",
  "vercel-toolbar",
  "#vercel-live-feedback",
  "#vercel-toolbar",
  "[data-vercel-toolbar]",
  "[data-vercel-live]",
  'iframe[src*="vercel.live"]',
  'script[src*="vercel.live"]',
  'script[src*="_next-live/feedback"]',
].join(", ");
