import type { Metadata } from "next";
import Link from "next/link";
import { SITE_META, SITE_URL } from "@/lib/site";
import { THANKS_PATH } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Thank you",
  description: SITE_META,
  alternates: {
    canonical: `${SITE_URL}${THANKS_PATH}`,
  },
};

export default function ThanksPage() {
  return (
    <main className="page">
      <div className="well">
        <h1 className="index-title">Thank you</h1>
        <p className="lede">
          <Link href="/">Back to Hexakin</Link>
        </p>
      </div>
    </main>
  );
}
