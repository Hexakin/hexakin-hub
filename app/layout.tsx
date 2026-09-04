import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/chrome";
import { NoVercelChrome } from "@/components/no-vercel-chrome";
import { CSP_POLICY, STRIP_VERCEL_CHROME_SCRIPT } from "@/lib/no-vercel-chrome";
import { SITE_CANONICAL, SITE_META, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_META,
  applicationName: "Hexakin",
  authors: [{ name: "Hexakin", url: SITE_URL }],
  creator: "Hexakin",
  alternates: {
    canonical: SITE_CANONICAL,
  },
  openGraph: {
    type: "website",
    url: SITE_CANONICAL,
    siteName: "Hexakin",
    title: SITE_TITLE,
    description: SITE_META,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_META,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CSP_POLICY} />
      </head>
      <body>
        <Script id="no-vercel-chrome" strategy="beforeInteractive">
          {STRIP_VERCEL_CHROME_SCRIPT}
        </Script>
        {children}
        <SiteFooter />
        <NoVercelChrome />
        <Analytics />
      </body>
    </html>
  );
}
