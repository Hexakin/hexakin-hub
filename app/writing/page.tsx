import type { Metadata } from "next";
import Link from "next/link";
import { SITE_META, SITE_URL } from "@/lib/site";
import { listEssays } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: SITE_META,
  alternates: {
    canonical: `${SITE_URL}/writing`,
  },
};

export default function WritingIndex() {
  const items = listEssays();

  return (
    <main className="page">
      <h1 className="index-title">Writing</h1>
      <ol className="writing-index">
        {items.map((essay) => (
          <li key={essay.slug}>
            <p className="kicker">{essay.kicker}</p>
            <h2 className="story-title-sm">
              <Link href={`/writing/${essay.slug}`}>{essay.title}</Link>
            </h2>
            <p className="dek">{essay.dek}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
